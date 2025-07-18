jest.setTimeout(20000);

const request = require("supertest");
const app = require("../server");

describe("Auth testing", () => {
  test("SignUp testing", async () => {
    let res = await request(app)
      .post("/api/signup")
      .send({ name: "gru", email: "g@gmail.com", password: "pass123" });
    expect(res.statusCode).toBe(201);
    expect(res.body.msg).toBe("User signup success");
    expect(res.body.newUser).toBeDefined();
  });

  test("Login testing", async () => {
    let res = await request(app)
      .post("/api/login")
      .send({ email: "g@gmail.com", password: "pass123" });
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Login success");
    expect(res.body.token).toBeDefined();
  });
});
