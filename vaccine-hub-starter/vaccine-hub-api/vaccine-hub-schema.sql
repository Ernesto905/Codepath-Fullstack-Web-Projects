CREATE TABLE users (
    email       TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
    password    TEXT NOT NULL, 
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    location    TEXT NOT NULL,
    date        TIMESTAMP NOT NULL
    id          SERIAL PRIMARY KEY,
)