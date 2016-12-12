DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS secretStuff;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS rooms

BEGIN;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE,
  userToken VARCHAR
);

CREATE TABLE secretstuff(
  secret_id SERIAL PRIMARY KEY,
  mySecret VARCHAR NOT NULL,
  myOtherSecret VARCHAR NOT NULL
);

CREATE TABLE items(
  description VARCHAR NOT NULL,
  link VARCHAR,
  price INT NOT NULL
  room_id INT
  user_id INT
);

CREATE TABLE rooms(
  room_id SERIAL PRIMARY KEY,
  room_name VARCHAR NOT NULL,
  user_id SERIAL PRIMARY KEY,
);

ALTER TABLE ONLY items
   ADD CONSTRAINT quadrants_user_id_fkey
   FOREIGN KEY (user_id)
   REFERENCES users(id)
   ON UPDATE CASCADE
   ON DELETE CASCADE;

COMMIT;


