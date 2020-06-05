DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer auto_increment primary key,
  username VARCHAR(255)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer auto_increment primary key,
  text varchar(255),
  roomname varchar(255),
  user_id integer,
  foreign key(user_id) references users(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/