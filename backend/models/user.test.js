"use strict";

const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
  } = require("../expressError");
  const db = require("../db.js");
  const User = require("./user.js");

  /** Test registration */

  describe("register", async function (){
    const newUser = {
        username: "newtestuser",
        password: "testpassword"
    }

    test("registration works", async function (){
        let user = await User.register(newUser) 

        expect(user).toEqual(newUser)
        const found = await db.query("SELECT * FROM users WHERE username = 'newtestuser'");
        expect(found.rows.length).toEqual(1); 
        /// test bcrype
        expect(found.rows[0].password.startsWith("$2b$")).toEqual(true);
    });

    test("bad request with dup data", async function () {
        try {
          await User.register(newUser);
          await User.register(newUser);
          fail();
        } catch (err) {
          expect(err instanceof BadRequestError).toBeTruthy();
        }
      });
    });