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
    employment_employer VARCHAR(255),
    employment_position_held VARCHAR(255),
    employment_employer_address VARCHAR(255),
    employment_employer_city VARCHAR(255),
    employment_employer_state VARCHAR(255),
    employment_employer_zipcode VARCHAR(255),
    employment_duration VARCHAR(255),
    employment_employer_phone VARCHAR(20),
    pet_has_pets BOOLEAN,
    pet_pet1_name VARCHAR(255),
    pet_pet1_breed VARCHAR(255),
    pet_pet1_age INT,
    pet_pet1_gender ENUM('M', 'F'),
    pet_pet1_spayed BOOLEAN,
    pet_pet1_where_are_they TEXT,
    pet_pet2_name VARCHAR(255),
    pet_pet2_breed VARCHAR(255),
    pet_pet2_age INT,
    pet_pet2_gender ENUM('M', 'F'),
    pet_pet2_spayed BOOLEAN,
    pet_pet2_where_are_they TEXT,
    pet_pet3_name VARCHAR(355),
    pet_pet3_breed VARCHAR(355),
    pet_pet3_age INT,
    pet_pet3_gender ENUM('M', 'F'),
    pet_pet3_spayed BOOLEAN,
    pet_pet3_where_are_they TEXT,
    pet_have_you_ever_given_or_relinquished BOOLEAN,
    pet_given_circumstances TEXT,

    status ENUM('Pending', 'Approved', 'Denied') NOT NULL DEFAULT 'Pending',
    FOREIGN KEY (pet_id) REFERENCES pets(id)
);

CREATE TABLE user(
    user_id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(40),

    CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

);