const request = require("supertest");
const app = require("../server");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

let token;
let userId;
let bookId;

beforeAll(async () => {
  if (!process.env.Mongo_URI) {
    throw new Error("Mongo URI is not defined");
  }

  await mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  });
  await request(app)
    .post("/api/signup")
    .send({ name: "Gru-new", email: "new@gmail.com", password: "pass123" });

  const res = await request(app)
    .post("/api/login")
    .send({ email: "new@gmail.com", password: "pass123" });
  expect(res.statusCode).toBe(200);
  expect(res.body.msg).toBe("Login success");
  expect(res.body.token).toBeDefined();

  token = res.body.token;
  console.log("token", token);
  const decoded = jwt.decode(token);
  userId = decoded.userId;
  console.log("userID", userId);
});

describe("Book Routes testing", () => {
  //get test
  test("Show books - get request", async () => {
    const data = await request(app)
      .get("/app/books")
      .set("Authorization", `Bearer ${token}`);
    expect(data.statusCode).toBe(200);
    expect(data.body.msg).toBe("Data from DB");
    // expect(data.body.cached).toBeDefined();
  });

  // post test
  test("Add a book - post request", async () => {
    const res = await request(app)
      .post("/app/books")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "testBook", author: "testAuthor", genre: "TestGenre" });
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Book added");
    expect(res.body.bookList).toMatchObject({
      name: "testBook",
      author: "testAuthor",
      genre: "TestGenre",
      userId: userId,
    });
    bookId = res.body.bookList._id;
  });

  // put test
  test("Update book - put request", async () => {
    const res = await request(app)
      .put(`/app/books/${bookId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "testBook-update" });
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Book data updated successfully.");
    expect(res.body.updatedBook).toMatchObject({
      name: "testBook-update",
      author: "testAuthor",
      genre: "TestGenre",
      userId: userId,
    });
  });

  // delete book
  test("Delete a book - delete request", async () => {
    let res = await request(app)
      .delete(`/app/books/${bookId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Book deleted successfully");
  });
});
