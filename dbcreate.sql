CREATE DATABASE beers_truck;

USE beers_truck;

-- generate the tables
CREATE TABLE IF NOT EXISTS beers (id_beer smallint AUTO_INCREMENT PRIMARY KEY, beer_name varchar(100) NOT NULL UNIQUE, temp_min int NOT NULL, temp_max int NOT NULL);
CREATE TABLE IF NOT EXISTS containers (id_container smallint AUTO_INCREMENT PRIMARY KEY, id_beer smallint NOT NULL, FOREIGN KEY (id_beer) REFERENCES beers(id_beer));

-- generate a view to join the container data with the beer data 
CREATE VIEW containers_beers AS SELECT cont.id_container, beer.beer_name, beer.temp_min, beer.temp_max
FROM beers AS beer
INNER JOIN containers as cont ON cont.id_beer = beer.id_beer;

-- insert values into table beers
INSERT INTO beers (beer_name, temp_min, temp_max) VALUES ("Pilsner", 4, 6);
INSERT INTO beers (beer_name, temp_min, temp_max) VALUES ("IPA", 5, 6);
INSERT INTO beers (beer_name, temp_min, temp_max) VALUES ("Lager", 4, 7);
INSERT INTO beers (beer_name, temp_min, temp_max) VALUES ("Stout", 6, 8);
INSERT INTO beers (beer_name, temp_min, temp_max) VALUES ("Wheat beer", 3, 5);
INSERT INTO beers (beer_name, temp_min, temp_max) VALUES ("Pale Ale", 4, 6);

-- insert values into table containers
INSERT INTO containers (id_beer) VALUES (4);
INSERT INTO containers (id_beer) VALUES (3);
INSERT INTO containers (id_beer) VALUES (1);
INSERT INTO containers (id_beer) VALUES (6);
INSERT INTO containers (id_beer) VALUES (5);
INSERT INTO containers (id_beer) VALUES (2);