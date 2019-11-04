<<<<<<< HEAD
CREATE DATABASE people_db;

USE people_db;

CREATE TABLE people_match (id INT NOT NULL AUTO_INCREMENT, 
first_name VARCHAR(50) NOT NULL, 
age INT NOT NULL,
astrology_sign varchar(50) not null,
quiz_answers varchar(200),
PRIMARY KEY(id));

=======
DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
>>>>>>> 2594d9cb692536037ce8ec19b42b5b65eb31d0b1
