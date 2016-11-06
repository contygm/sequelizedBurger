-- CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
    description varchar(255),
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY(id)
);

sequelize model:create --name Burger —attributes "burger_name:string, devoured:boolean, uniformColor:string, uniformNumber:string"