const expect = require("chai").expect;
const request = require("supertest");

const server = require("../app");

let app = request.agent(server);

describe("User Endpoint", () => {
  describe("POST Happy Path", () => {
    it("Successfully posts new user", () => {
      const newUser = {
        name: "test2",
        email: "test2@test.com",
        avatar_url: "https://www.test2.com/test123",
        height: 2,
        weight: 2,
        age: 2,
        sex: "two",
        BMR: 2,
        TDEE: 2,
        maintenance: 2,
        target: "test(2)",
      };
      app
        .post("/api/user")
        .send(newUser)
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          expect(Object.keys(res.body.user).length).to.equal(15);
          expect(Object.keys(res.body.user)).to.include("name");
        });
    });
  });
  describe("POST Sad Path", () => {
    it("Rejects request with missing field", () => {
      const newUser = {
        name: "test2",
        avatar_url: "https://www.test2.com/test123",
        height: 2,
        weight: 2,
        age: 2,
        sex: "two",
        BMR: 2,
        TDEE: 2,
        maintenance: 2,
        target: "test(2)",
      };
      app
        .post("/api/user")
        .send(newUser)
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
    });
    it("Rejects request with incorrect field", () => {
      const newUser = {
        badTest: "test2",
        email: "test2@test.com",
        avatar_url: "https://www.test2.com/test123",
        height: 2,
        weight: 2,
        age: 2,
        sex: "two",
        BMR: 2,
        TDEE: 2,
        maintenance: 2,
        target: "test(2)",
      };
      app
        .post("/api/user")
        .send(newUser)
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
    });
  });
});

describe("User Endpoint", () => {
  describe("GET Happy Path", () => {
    it("Successfully gets user", () => {
      const user = {
        email: "test2@test.com",
      };
      app
        .get("/api/user")
        .send(user)
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          expect(Object.keys(res.body.user).length).to.equal(15);
          expect(Object.keys(res.body.user)).to.include("email");
          process.exit();
        });
    });
  });
  describe("GET Sad Path", () => {
    it("Rejects request with more than one key", () => {
      let user = {
        email: "test2@test.com",
        badTest: "badTest",
      };
      app
        .get("/api/user")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
    });
    it("Rejects request without 'email' key", () => {
      let user = {
        badTest: "test2@test.com",
      };
      app
        .get("/api/user")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          process.exit();
        });
    });
  });
});
