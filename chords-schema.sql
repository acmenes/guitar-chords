CREATE TABLE chords (
    id SERIAL PRIMARY KEY,
    root TEXT NOT NULL,
    quality TEXT NOT NULL,
    extensions TEXT,
    inv INTEGER,
    E_fret INTEGER,
    A_fret INTEGER,
    D_fret INTEGER,
    G_fret INTEGER,
    B_fret INTEGER,
    High_E_fret INTEGER,
    E_finger INTEGER,
    A_finger INTEGER,
    D_finger INTEGER,
    G_finger INTEGER,
    B_finger INTEGER,
    High_E_finger INTEGER
);