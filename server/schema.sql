CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id integer auto_increment primary key,
  name VARCHAR(255)
);

CREATE TABLE users (
  id integer auto_increment primary key,
  name VARCHAR(255)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer auto_increment primary key,
  messages varchar(255),
  users_id integer,
  rooms_id integer,
  foreign key(users_id) references users(id),
  foreign key(rooms_id) references rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/