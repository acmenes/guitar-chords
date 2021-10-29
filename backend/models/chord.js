"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError")

class Chord {
    /** Displays chords based on information in the database */

    static async getAllChords() {
        const result = await db.query(`SELECT id, 
                                            chord_fullname, 
                                            roots, 
                                            qualities, 
                                            barres, 
                                            capo, 
                                            frets, 
                                            fingers 
                                        FROM chords`)
        return result.rows;
    }

    // select one chord
    static async getChord(chord_fullname) {
        const result = await db.query(`SELECT id, 
                                        chord_fullname, 
                                        roots, 
                                        qualities, 
                                        barres, 
                                        capo, 
                                        frets, 
                                        fingers 
                                    FROM chords
                                    WHERE chord_fullname=$1`, [chord_fullname]);
        return result.rows;
    }
}

module.exports = Chord;