\echo 'Delete and recreate lifetracker db?'
\prompt 'Return for yes or ctrl-C to cancle > ' foo 

DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker

\i lifetracker-schema.sql

-- Testing goes here


