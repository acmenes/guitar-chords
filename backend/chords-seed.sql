-- INSERT INTO chords (key, 
--                     quality, 
--                     extensions, 
--                     inv, 
--                     E_fret,
--                     A_fret,
--                     D_fret,
--                     G_fret,
--                     B_fret,
--                     High_E_fret,
--                     E_finger,
--                     A_finger,
--                     D_finger,
--                     G_finger,
--                     B_finger,
--                     High_E_finger)
--         VALUES ('C', 'Major', 'None', '0', 'x', '3', '2', '0', '1', '0', '0', '3', '2', '0', '1', '0'),
--                 ('G', 'Major', 'None', '0', '3', '2', '0', '0', '0', '3', '3', '2', '0', '0', '0', '4');

INSERT INTO CHORDS(roots, qualities, barres, capo, frets, fingers) 
        VALUES  ('G', 'Major', 'None', 'False', '3, 2, 0, 0, 0, 3', '3, 2, 0, 0, 0, 4'),
                ('A', 'Major', 'None', 'False', '0, 0, 2, 2, 2, 0', '0, 0, 2, 3, 4, 0'),
                ('C', 'Major', 'None', 'False', '0, 3, 2, 0, 1, 0', '0, 3, 2, 0, 1, 0'),
                ('D', 'Major', 'None', 'False', '0, 0, 0, 2, 3, 2', '0, 0, 0, 1, 3, 2'),
                ('E', 'Major', 'None', 'False', '0, 2, 2, 1, 0, 0', '0, 2, 3, 1, 0, 0'),
                ('A', 'Minor', 'None', 'False', '0, 0, 2, 2, 1, 0', '0, 0, 2, 3, 1, 0'),
                ('D', 'Minor', 'None', 'False', '0, 0, 0, 2, 3, 1', '0, 0, 0, 2, 4, 1'),
                ('E', 'Minor', 'None', 'False', '0, 2, 2, 0, 0, 0', '0, 2, 3, 0, 0, 0');
               