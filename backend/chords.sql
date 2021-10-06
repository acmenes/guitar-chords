\echo 'Delete and recreate chords db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE chords_db;
CREATE DATABASE chords_db;
\connect chords_db

\i chords-schema.sql
\i chords-seed.sql

\echo 'Delete and recreate chords_db_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE chords_db_test;
CREATE DATABASE chords_db_test;