"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError")

class Chord {
    /** Displays chords based on information in the database */

    static async getAllChords(){
        const result = await db.query(`SELECT id, roots, qualities, barres, capo, frets, fingers 
                                        FROM chords`)
        return result.rows;
    }
}

module.exports = Chord;