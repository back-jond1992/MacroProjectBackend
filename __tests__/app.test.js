const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("MacroAPI tests", () => {
  describe("USER ENPOINTS", () => {
    describe("path: get /api/user (happy path)", () => {
      test("status 200 returns user object", () => {
        const user = { name: "jack" };
        return request(app)
          .get("/api/user")
          .send(user)
          .expect(200)
          .then(({ body }) => {
            expect(body.user.length).toBe(15);
            done();
          });
      });
    });
  });
});
