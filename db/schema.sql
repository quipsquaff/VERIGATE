CREATE DATABASE verigate_db;

USE verigate_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(25) NOT NULL,
    pin INT(4) NOT NULL,
    switch BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);


