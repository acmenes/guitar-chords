CREATE TABLE chords (
    id SERIAL PRIMARY KEY,
    roots TEXT NOT NULL,
    qualities TEXT NOT NULL,
    barres TEXT,
    capo BOOLEAN,
    frets TEXT,
    fingers TEXT
);