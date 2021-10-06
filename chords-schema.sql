CREATE TABLE chords (
    id SERIAL PRIMARY KEY,
    key TEXT NOT NULL,
    quality TEXT NOT NULL,
    extensions TEXT,
    inv INTEGER,
    E_fret TEXT,
    A_fret TEXT,
    D_fret TEXT,
    G_fret TEXT,
    B_fret TEXT,
    High_E_fret TEXT,
    E_finger TEXT,
    A_finger TEXT,
    D_finger TEXT,
    G_finger TEXT,
    B_finger TEXT,
    High_E_finger TEXT
);