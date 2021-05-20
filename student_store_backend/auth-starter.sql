\echo 'Delete and recreate auth_starter db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE auth_starter;
CREATE DATABASE auth_starter;
\connect auth_starter

\i auth-starter-schema.sql

\echo 'Delete and recreate auth_starter_test db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE auth_starter_test;
CREATE DATABASE auth_starter_test;
\connect auth_starter_test

\i auth-starter-schema.sql
