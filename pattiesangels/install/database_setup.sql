CREATE TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(60) NOT NULL UNIQUE,
    hashed_password VARCHAR(72) NOT NULL
);

CREATE TABLE pets(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    breed VARCHAR(255),
    gender VARCHAR(255),
    spayed VARCHAR(255),
    description TEXT
);

CREATE TABLE applications(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pet_id INT,
    status ENUM('Pending', 'Approved', 'Denied') NOT NULL DEFAULT 'Pending'
);
