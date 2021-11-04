CREATE TABLE chords (
    chord_fullname TEXT NOT NULL PRIMARY KEY,
    roots TEXT NOT NULL,
    qualities TEXT NOT NULL,
    barres TEXT,
    capo BOOLEAN,
    frets TEXT,
    fingers TEXT
);

CREATE TABLE users (
    username TEXT NOT NULL PRIMARY KEY,
    password TEXT NOT NULL,
    profile_picture TEXT,
    bio TEXT,
    is_admin BOOLEAN
);

CREATE TABLE user_chords (
    id SERIAL PRIMARY KEY,
    username TEXT REFERENCES users ON DELETE CASCADE,
    chord_fullname TEXT REFERENCES chords ON DELETE CASCADE,
    done BOOLEAN DEFAULT FALSE,
    UNIQUE (username, chord_fullname)
);

CREATE TABLE progressions (
    id SERIAL PRIMARY KEY,
    chord_1 TEXT REFERENCES chords,
    chord_2 TEXT REFERENCES chords,
    chord_3 TEXT REFERENCES chords,
    chord_4 TEXT REFERENCES chords
)