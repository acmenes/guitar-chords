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
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    profile_picture TEXT,
    bio TEXT,
    is_admin BOOLEAN
)