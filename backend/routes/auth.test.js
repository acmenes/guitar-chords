"use strict";

const request = require("supertest");

const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/** AUTH ROUTES */

describe("POST /auth/token", function () {
    test("works", async function () {
        const resp = await request(app)
            .post("/auth/token")
            .send({
              username: "u1",
              password: "testuser1",
            });
        expect(resp.body).toEqual({
          "token": expect.any(String),
        });
      });
});
