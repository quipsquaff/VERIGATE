-- For use during DEVELOPMENT!
DROP DATABASE IF EXISTS verigate_db;

-- Create Database.
CREATE DATABASE verigate_db;
USE verigate_db;

-- This table references each Verigate device that is paired to a specific entry point.
-- CRUD operations should only be controlled by 'users' WHERE 'admin' = true
-- With the exception of the switch BOOLEAN (which allows us to control our relay/gate/led)
CREATE TABLE gates (
	gateID INT UNSIGNED AUTO_INCREMENT,
    unit_location VARCHAR(255) NOT NULL DEFAULT "",
    nickname VARCHAR(45) NOT NULL DEFAULT "",
    SSID VARCHAR(255) NOT NULL DEFAULT "", -- SSiD and Password to the wifi signal that Verigate can access.
    pass VARCHAR(255) NOT NULL DEFAULT "",
    ip VARCHAR(20) NOT NULL DEFAULT "",
    switch VARCHAR(2) DEFAULT "0", -- This is the value that will be referenced to allow multiple users to open doors or turn on our test/dev LED.
    PRIMARY KEY (gateID)
    );
    
-- This table references all individuals registered to a device or devices.
-- Users should be able to READ/UPDATE their own data and DELETE their account.
CREATE TABLE users (
	userID INT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL DEFAULT "",
    email VARCHAR(100) NOT NULL DEFAULT "",
    admin BOOLEAN DEFAULT 0,
    user_pass VARCHAR(255) NOT NULL DEFAULT "1234",
    PRIMARY KEY (userID)
    );
    
-- This table references individual details related to a specific user.
-- This is where we will store the user data for facial recognition.
-- Currently stores a profile image url for us to reference to display a user's image after authentication.
CREATE TABLE user_details (
	userID INT UNSIGNED NOT NULL,
    img_url VARCHAR(255) NOT NULL DEFAULT "",
    PRIMARY KEY (userID),
    FOREIGN KEY (userID) REFERENCES users(userID)
    );
    
-- This is a junction table to establish our many-to-many relationship between our 'gates' table and our 'users' table.
CREATE TABLE gates_users (
	userID INT UNSIGNED,
    gateID INT UNSIGNED,
    PRIMARY KEY (userID, gateID),
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (gateID) REFERENCES gates(gateID)
    );
    





    
    