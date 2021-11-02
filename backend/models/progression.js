"use strict";

const db = require("../db");

const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
  } = require("../expressError");

class Progression {
    static async getAllProgressions() {
        const result = await db.query(`SELECT id, 
                                            chord_1 as "chord1", 
                                            chord_2 as "chord2",
                                            chord_3 as "chord3",
                                            chord_4 as "chord4"
                                        FROM progressions
                                        ORDER BY id`, );
        return result.rows;
    };

    static async getProgression(id) {
        const result = await db.query(`SELECT id, 
                                            chord_1 as "chord1", 
                                            chord_2 as "chord2",
                                            chord_3 as "chord3",
                                            chord_4 as "chord4"
                                        FROM progressions
                                        WHERE id = $1`, [id],);
        
        const progression = result.rows[0];

        if (!progression) throw new NotFoundError(`No progression with that id: ${id}`);

        return progression;
    };
}

module.exports = Progression;