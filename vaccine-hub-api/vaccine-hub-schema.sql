CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    password    TEXT NOT NULL, 
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    location    TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
    date        TIMESTAMP NOT NULL
)