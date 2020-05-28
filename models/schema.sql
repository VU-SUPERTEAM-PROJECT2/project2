DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;
CREATE TABLE beer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    beer_name VARCHAR(200) NOT NULL,
    beer_type VARCHAR(200) NOT NULL,
    brewery VARCHAR(200) NOT NULL
);

    CREATE TABLE user
    (
        id INT NOT NULL
        AUTO_INCREMENT PRIMARY KEY,
    user_nickname VARCHAR
        (200) NOT NULL,
    user_favorite VARCHAR
        (200),
    user_beer_foreignKey INTEGER,
    user_zipcode VARCHAR
        (5) NOT NULL
    user_score INTEGER,
);

        CREATE TABLE questions
        (
            id INT NOT NULL
            AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR
            (255) NOT NULL,
);