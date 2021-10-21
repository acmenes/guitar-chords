"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
  } = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

class User {
    /** Methods for the user class */

    /** Check if a user is in the database and make sure the password they entered is correct  */

    static async authenticate(username, password) {
        const result = await db.query(`SELECT username, password 
                                        FROM users 
                                        WHERE username = $1`, [username]);
        
        const user = result.rows[0];

        if (user) {
        // compare hashed password to a new hash from password
        const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
                    delete user.password;
                    return user;
                    }
                }
                                    
         throw new UnauthorizedError("Invalid username/password");
    }

    /** Add a new user */
    static async register({ username, password }) {

        /** Check for a duplicate username before registering */

        const duplicateCheck = await db.query(
            `SELECT username
             FROM users
             WHERE username = $1`,
          [username],
      );
  
      if (duplicateCheck.rows[0]) {
        throw new BadRequestError(`Duplicate username: ${username}`);
      }
  
      const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

      const result = await db.query(`INSERT INTO users
                                            (username,
                                            password)
                                            VALUES ($1, $2)
                                            RETURNING username`,
                                            [
                                                username,
                                                hashedPassword
                                            ],
                                    );

        const user = result.rows[0];

        return user;  
    }
    
    static async findAll() {
        /** Find all users */
        const result = await db.query(
              `SELECT username
               FROM users
               ORDER BY username`,
        );
    
        return result.rows;
      }

    static async getUser(username) {
        /** Get a user by their username */
        const result = await db.query(`SELECT username FROM users WHERE username = $1`, [username]);
        return result.rows;
    }

    static async editUser(username) {
        /** Edit a user */
        /// I need some extra helpers for this
    }

    static async removeUser(username) {
        /** Remove a user  */
        let result = await db.query(
                `DELETE
                FROM users
                WHERE username = $1
                RETURNING username`,
                [username],
            );
        const user = result.rows[0];
        
        if (!user) throw new NotFoundError(`No user: ${username}`);
    }
}

module.exports = User;