const expect = require("chai").expect;
const request = require("supertest");

const server = require("../app");

let app = request.agent(server);

describe("User Endpoint", () => {
  describe("POST Happy Path", () => {
    it("Successfully posts new user", () => {
      const newUser = {
        name: "testTEST",
        email: "test3@test.com",
        avatar_url: "https://www.test2.com/test123",
        height: 2,
        weight: 2,
        age: 2,
        sex: "two",
        BMR: 2,
        TDEE: 2,
        maintenance: 2,
        target: 2,
        dailyMacros: {},
        weeklyMacros: {},
        dailyFoodItems: [],
      };
      app
        .post("/api/user")
        .send(newUser)
        .end((err, res) => {
          console.log(err);
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an("object");
          expect(Object.keys(res.body.user).length).to.equal(18);
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
      const user = "test2@test.com";
      app.get(`/api/user/${user}`).end((err, res) => {
        expect(res.body).to.be.an("object");
        expect(Object.keys(res.body.user).length).to.equal(15);
        expect(Object.keys(res.body.user)).to.include("email");
      });
    });
  });
  describe("GET Sad Path", () => {
    it("Rejects request with more than one key", () => {
      let user = "badTest";
      app.get(`/api/user/${user}`).end((err, res) => {
        expect(res.status).to.equal(400);
      });
    });
    it("Rejects request with non email", () => {
      let user = "test2test.com";
      app.get(`/api/user/${user}`).end((err, res) => {
        expect(res.status).to.equal(400);
      });
    });
  });
});

describe("User Endpoint", () => {
  describe("PATCH Happy Path", () => {
    it("Successfully updates user", () => {
      const id = "62029d2a5b9e31f34a571e99";
      const update = { dailyMacros: { calories: 1, protein: 1, carbs: 1, fat: 1 } };
      app
        .patch(`/api/user/${id}`)
        .send(update)
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          expect(res.status).to.equal(200);
          expect(Object.keys(res.body.user).length).to.equal(18);
          expect(Object.keys(res.body.user)).to.include("email");
          process.exit();
        });
    });
  });
  describe("GET Sad Path", () => {
    it("Rejects request with incorrect user id", () => {
      const id = "62029d2a5b9e31f34a571e88";
      const update = { dailyMacros: { calories: 1, protein: 1, carbs: 1, fat: 1 } };
      app
        .get(`/api/user/${id}`)
        .send(update)
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
    });
    it("Rejects request incorrect update", () => {
      const id = "62029d2a5b9e31f34a571e99";
      const update = { bad: { bad: 0 } };
      app
        .get(`/api/user/${id}`)
        .send(update)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          process.exit();
        });
    });
  });
});
