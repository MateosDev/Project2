CREATE DATABASE people_db;

USE people_db;

CREATE TABLE people_match (id INT NOT NULL AUTO_INCREMENT, 
first_name VARCHAR(50) NOT NULL, 
age INT NOT NULL,
astrology_sign varchar(50) not null,
quiz_answers varchar(200),
PRIMARY KEY(id));

