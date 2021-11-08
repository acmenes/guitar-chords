"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError")

class Chord {
    /** Displays chords based on information in the database */

    static async getAllChords() {
        const result = await db.query(`SELECT 
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
        const result = await db.query(`SELECT
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

    // add a new chord
    static async addChord({ chordFullName, roots, qualities, barres, capo, frets, fingers }) {
        /// I should run a duplicate check not by name but by frets/fingers
        
        const result = await db.query(`INSERT INTO chords
                                        (chord_fullname,
                                        roots,
                                        qualities,
                                        barres,
                                        capo,
                                        frets,
                                        fingers)
                                    VALUES ($1, $2, $3, $4, $5, $6, $7)
                                    RETURNING chord_fullname as "chordFullName",
                                        roots, qualities, barres, capo, frets, fingers`,
                                        [
                                            chordFullName, 
                                            roots, 
                                            qualities, 
                                            barres, 
                                            capo, 
                                            frets, 
                                            fingers,
                                        ],
                                    );
        const chord = result.rows[0];

        return chord

    }
}

module.exports = Chord;