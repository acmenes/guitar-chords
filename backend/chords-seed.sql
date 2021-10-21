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

INSERT INTO CHORDS(chord_fullname, roots, qualities, barres, capo, frets, fingers) 
        VALUES  ('g-major', 'G', 'Major', 'None', 'False', '3, 2, 0, 0, 0, 3', '3, 2, 0, 0, 0, 4'),
                ('a-major', 'A', 'Major', 'None', 'False', '0, 0, 2, 2, 2, 0', '0, 0, 2, 3, 4, 0'),
                ('c-major', 'C', 'Major', 'None', 'False', '0, 3, 2, 0, 1, 0', '0, 3, 2, 0, 1, 0'),
                ('d-major', 'D', 'Major', 'None', 'False', '0, 0, 0, 2, 3, 2', '0, 0, 0, 1, 3, 2'),
                ('e-major', 'E', 'Major', 'None', 'False', '0, 2, 2, 1, 0, 0', '0, 2, 3, 1, 0, 0'),
                ('a-minor', 'A', 'Minor', 'None', 'False', '0, 0, 2, 2, 1, 0', '0, 0, 2, 3, 1, 0'),
                ('d-minor', 'D', 'Minor', 'None', 'False', '0, 0, 0, 2, 3, 1', '0, 0, 0, 2, 4, 1'),
                ('e-minor', 'E', 'Minor', 'None', 'False', '0, 2, 2, 0, 0, 0', '0, 2, 3, 0, 0, 0');
                
INSERT INTO USERS(username, password, profile_picture, bio)
        VALUES('testuser', 'testtest', 'https://picsum.photos/200/300', 'test user'),  
              ('testuser2', 'testtest', 'https://picsum.photos/200/300', 'test user 2');             