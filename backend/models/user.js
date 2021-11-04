"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
    ExpressError,
  } = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config");

const defaultImg = "https://picsum.photos/200/300";
const defaultBio = "Add your bio here!"

class User {
    /** Methods for the user class */

    /** Check if a user is in the database and make sure the password they entered is correct  */

    static async authenticate({ username, password }) {
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
    static async register({ username, password, profilePicture, bio, isAdmin }) {

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
                                            password,
                                            profile_picture,
                                            bio,
                                            is_admin)
                                            VALUES ($1, $2, $3, $4, $5)
                                            RETURNING username, is_admin AS "isAdmin"`,
                                            [
                                                username,
                                                hashedPassword,
                                                defaultImg,
                                                defaultBio,
                                                isAdmin,
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

    /** Add chords to a user's practice list */
    static async addChordToList(username, chord_fullname) {
        const checkChord = await db.query(`SELECT chord_fullname 
                                            FROM chords 
                                            WHERE chord_fullname=$1`, [chord_fullname])
        const chord = checkChord.rows[0]

        if(!chord) throw new NotFoundError(`No chord by that name`)

        const checkUser = await db.query(`SELECT username 
                                            FROM users
                                            WHERE username=$1`, [username])

        const user = checkUser.rows[0]

        if(!user) throw new NotFoundError(`No user by that name`)

        await db.query(`INSERT INTO user_chords (username, chord_fullname) 
                            VALUES ($1, $2)`, [username, chord_fullname])
    }

    static async getUserChords(username) {
        const result = await db.query(`SELECT chord_fullname, done 
                                                FROM user_chords
                                                WHERE username = $1`, [username])

        return result.rows;
    }

    static async addProgressionTolist(username, id) {
        /// coming soon
    }
}

module.exports = User;