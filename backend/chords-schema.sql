CREATE TABLE chords (
    id SERIAL PRIMARY KEY,
    chord_fullname TEXT NOT NULL,
    roots TEXT NOT NULL,
    qualities TEXT NOT NULL,
    barres TEXT,
    capo BOOLEAN,
    frets TEXT,
    fingers TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    profile_picture TEXT,
    bio TEXT
)