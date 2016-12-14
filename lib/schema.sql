DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS secretStuff;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS rooms;

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

CREATE TABLE rooms(
  room_id INT PRIMARY KEY,
  username VARCHAR
);

CREATE TABLE items(
  description VARCHAR NOT NULL,
  link VARCHAR,
  price VARCHAR NOT NULL,
  room_id INT,
  username VARCHAR
);



COMMIT;


