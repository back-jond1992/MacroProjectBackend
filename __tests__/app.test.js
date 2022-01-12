const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

const testFuncs = require("../testFuncs");

helloWorld = testFuncs.helloWorld();

console.log(process.env.NODE_ENV);
console.log(helloWorld);

describe("test", function () {
  describe("helloWorld()", function () {
    it("should return hello world", function () {
      console.log(process.env.NODE_ENV);
      console.log(helloWorld);
      expect(helloWorld).to.equal("hello world");
    });
  });
});
