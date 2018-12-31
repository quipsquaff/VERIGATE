INSERT INTO gates (unit_location, nickname, SSID, pass, ip, switch)
    VALUES
        ("Room 307", "UCLAx Coding Bootcamp TTh", "UCLA_WEB", "", "", 0),
        ("Front Door", "UCLAx", "UCLA_WEB", "", "", 0),
        ("Equipment Closet", "UCLAx", "UCLA_WEB", "", "", 0);

INSERT INTO users (name, email, admin)
    VALUES
		("Omar Patel", "omar.patel@gmail.com", 1),
		("Chuck Ausburn", "chuck.ausburn1@gmail.com", 1),
        ("Edeer Ramirez", "quipsquaff@gmail.com", 1),
        ("Steven Ng", "stevo.room121@gmail.com", 0),
        ("Tristan Perera", "tristan.e.perera@gmail.com", 0),
        ("Ted I", "tedi0722@gmail.com", 0),
        ("Freddie Robinson", "deadiefreddie@gmail.com", 0),
        ("Sally Witten", "authorentrenched@gmail.com", 0),
        ("Barry Baltimore", "tridentfx@gmail.com", 0);
        
INSERT INTO gates_users (userID, gateID)
	VALUES
		(1, 1),
        (1, 2),
        (1, 3),
        (2, 1),
        (2, 2),
        (3, 1),
        (3, 2),
        (4, 1),
        (4, 2),
        (5, 1),
        (5, 2),
        (6, 1),
        (6, 2),
        (7, 2),
        (8, 2),
        (9, 2);
        
INSERT INTO user_details (userID, img_url)
	VALUES
		(1, "http://www.facetheforce.today/luke/150"),
        (2, "http://www.facetheforce.today/han/150"),
        (3, "http://www.facetheforce.today/yoda/150"),
        (4, "http://www.facetheforce.today/obiwan/150"),
        (5, "http://www.facetheforce.today/quigon/150"),
        (6, "http://www.facetheforce.today/poe/150"),
        (7, "http://www.facetheforce.today/bb8/150"),
        (8, "http://www.facetheforce.today/chewbacca/150");