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
    applicant1_first_name VARCHAR(50) NOT NULL,
    applicant1_last_name VARCHAR(50) NOT NULL,
    applicant1_dob DATE NOT NULL,
    applicant2_first_name VARCHAR(50),
    applicant2_last_name VARCHAR(50),
    applicant2_dob DATE NOT NULL,
    address VARCHAR(255) NOT NULL,
    apartment_number VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zipcode VARCHAR(255) NOT NULL,
    home_phone VARCHAR(20),
    cell_phone VARCHAR(20),
    email_address VARCHAR(100),
    house_ownership VARCHAR(10),
    residency_duration INT,
    plan_to_move_in_the_near_future BOOLEAN,
    landlord_condo_board_name VARCHAR(255),
    landlord_condo_board_phone_number VARCHAR(20),
    referral_source VARCHAR(255),
    household_adults_count INT,
    household_adults_relationships TEXT,
    household_adults_adoption_agreed BOOLEAN,
    household_children_count INT,
    household_children_ages VARCHAR(255),
    household_children_had_pets BOOLEAN,
    household_expect_current_situation_to_change BOOLEAN,
    household_allergic_to_pets BOOLEAN,
    household_allergic_to_pets_list TEXT,
    status ENUM('Pending', 'Approved', 'Denied') NOT NULL DEFAULT 'Pending',
    FOREIGN KEY (pet_id) REFERENCES pets(id)
);

CREATE TABLE user (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(40),

    CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

);