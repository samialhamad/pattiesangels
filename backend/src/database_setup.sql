CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL

    --CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';
);

CREATE TABLE pets(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    breed VARCHAR(255) CHECK(breed REGEXP '^[A-Za-z]'),
    gender VARCHAR(255),
    spayed VARCHAR(255),
    description TEXT
);

CREATE TABLE AdoptionApplications(
    id INT PRIMARY KEY AUTO_INCREMENT,
    animal_id INT NOT NULL,
	applicant_last_name VARCHAR(50) NOT NULL,
    applicant_first_name VARCHAR(50) NOT NULL,
    applicant_dob DATE NOT NULL,
	co_applicant_last_name VARCHAR(50),
    co_applicant_first_name VARCHAR(50),
    co_applicant_dob DATE DEFAULT NULL,
    address VARCHAR(100) NOT NULL,
    apartment_number VARCHAR(10),
    city VARCHAR(50) NOT NULL,
    state VARCHAR(15) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    home_phone VARCHAR(20),
    cell_phone VARCHAR(20),
    email_address VARCHAR(100),
    house_ownership ENUM('Own', 'Rent') DEFAULT NULL,
    residency_duration VARCHAR(20) DEFAULT NULL,
    plan_to_move_in_the_near_future ENUM('Yes', 'No') DEFAULT NULL,
    landlord_condo_board_name VARCHAR(50) DEFAULT NULL,
    landlord_condo_board_phone_number VARCHAR(20) DEFAULT NULL,
    referral_source VARCHAR(50) DEFAULT NULL,
	
    household_adults_count TINYINT DEFAULT NULL,
    household_adults_relationships VARCHAR(100) DEFAULT NULL,
    household_adults_adoption_agreed ENUM('Yes', 'No') DEFAULT NULL,
    household_children_count TINYINT,
    household_children_ages VARCHAR(20),
    household_children_had_pets ENUM('Yes', 'No') DEFAULT NULL,
    household_expect_current_situation_to_change ENUM('Yes', 'No') DEFAULT NULL,
    household_allergic_to_pets ENUM('Yes', 'No') DEFAULT NULL,
    household_allergic_to_pets_list VARCHAR(255) DEFAULT NULL,
	why_adopt_self_companion BOOLEAN DEFAULT FALSE,
	why_adopt_child_companion BOOLEAN DEFAULT FALSE,
	why_adopt_watch_dog BOOLEAN DEFAULT FALSE,
	why_adopt_gift BOOLEAN DEFAULT FALSE,
	why_adopt_pet_companion BOOLEAN DEFAULT FALSE,
	why_adopt_household_companion BOOLEAN DEFAULT FALSE,
	
    employment_employer VARCHAR(50) DEFAULT NULL,
    employment_position_held VARCHAR(50) DEFAULT NULL,
    employment_employer_address VARCHAR(100) DEFAULT NULL,
    employment_employer_city VARCHAR(50) DEFAULT NULL,
    employment_employer_state VARCHAR(15) DEFAULT NULL,
    employment_employer_zip_code VARCHAR(10) DEFAULT NULL,
    employment_duration VARCHAR(20) DEFAULT NULL,
    employment_employer_phone VARCHAR(20) DEFAULT NULL,
	
    pet_has_pets ENUM('Yes', 'No') DEFAULT NULL,
    pet_pet1_name VARCHAR(20) DEFAULT NULL,
    pet_pet1_breed VARCHAR(30) DEFAULT NULL,
    pet_pet1_age TINYINT,
    pet_pet1_gender ENUM('M', 'F') DEFAULT NULL,
    pet_pet1_spayed ENUM('Yes', 'No') DEFAULT NULL,
    pet_pet1_where_are_they VARCHAR(50) DEFAULT NULL,
    pet_pet2_name VARCHAR(20) DEFAULT NULL,
    pet_pet2_breed VARCHAR(30) DEFAULT NULL,
    pet_pet2_age TINYINT,
    pet_pet2_gender ENUM('M', 'F') DEFAULT NULL,
    pet_pet2_spayed ENUM('Yes', 'No') DEFAULT NULL,
    pet_pet2_where_are_they VARCHAR(50) DEFAULT NULL,
    pet_pet3_name VARCHAR(20) DEFAULT NULL,
    pet_pet3_breed VARCHAR(30) DEFAULT NULL,
    pet_pet3_age TINYINT,
    pet_pet3_gender ENUM('M', 'F') DEFAULT NULL,
    pet_pet3_spayed ENUM('Yes', 'No') DEFAULT NULL,
    pet_pet3_where_are_they VARCHAR(50) DEFAULT NULL,
    pet_have_you_ever_given_or_relinquished ENUM('Yes', 'No') DEFAULT NULL,
    pet_given_circumstances VARCHAR(255) DEFAULT NULL,

    veterinarian_name VARCHAR(30) DEFAULT NULL,
    veterinarian_phone VARCHAR(20) DEFAULT NULL,
    veterinarian_last_visit VARCHAR(255) DEFAULT NULL,

    new_pet_how_long_have_you_been_looking VARCHAR(20) DEFAULT NULL,
    new_pet_what_will_you_feed VARCHAR(50) DEFAULT NULL,
    new_pet_how_often_will_you_feed VARCHAR(50) DEFAULT NULL,
    new_pet_time_adjust VARCHAR(50) DEFAULT NULL,
    new_pet_emergency_care_bill ENUM('Yes', 'No') DEFAULT NULL,
    new_pet_maintenance_yearly_budget VARCHAR(10) DEFAULT NULL,
    new_pet_responsible_home_committed ENUM('Yes', 'No') DEFAULT NULL,
    new_pet_plan_if_move VARCHAR(50) DEFAULT NULL,
    new_pet_where_will_it_be_kept_during_day_night VARCHAR(30) DEFAULT NULL,
    new_pet_primary_care_giver VARCHAR(10) DEFAULT NULL,
    new_pet_primary_care_giver_alternative VARCHAR(10) DEFAULT NULL,
    new_pet_emergency_care_giver VARCHAR(20) DEFAULT NULL,
    new_pet_times_outside_per_day VARCHAR(20) DEFAULT NULL,
    new_pet_house_train_plan VARCHAR(30) DEFAULT NULL,
    new_pet_fenced_in_yard ENUM('Yes', 'No') DEFAULT NULL,
    new_pet_fenced_size_type VARCHAR(20) DEFAULT NULL,
    new_pet_hours_left_alone_per_day VARCHAR(20) DEFAULT NULL,
    new_pet_digging VARCHAR(30) DEFAULT NULL,
    new_pet_barking VARCHAR(30) DEFAULT NULL,
    new_pet_chewing VARCHAR(30) DEFAULT NULL,
    new_pet_separation_anxiety VARCHAR(30) DEFAULT NULL,
    new_pet_aggression VARCHAR(30) DEFAULT NULL,

    references_1 VARCHAR(30) DEFAULT NULL,
    references_1_relationship VARCHAR(15) DEFAULT NULL,
    references_1_phone VARCHAR(20) DEFAULT NULL,
    references_2 VARCHAR(30) DEFAULT NULL,
    references_2_relationship VARCHAR(15) DEFAULT NULL,
    references_2_phone VARCHAR(20) DEFAULT NULL,
    references_3 VARCHAR(30) DEFAULT NULL,
    references_3_relationship VARCHAR(15) DEFAULT NULL,
    references_3_phone VARCHAR(20) DEFAULT NULL,

    applicant VARCHAR(30),
    co_applicant VARCHAR(30),

    status ENUM('Pending', 'Approved', 'Denied') NOT NULL DEFAULT 'Pending',
    submission_timestamp TIMESTAMP;

    FOREIGN KEY (animal_id) REFERENCES Animals(animal_id)
);

--CREATE TABLE user(
--    user_id INT PRIMARY KEY,
--    username VARCHAR(255) NOT NULL,
--    password VARCHAR(40),

    --CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

--);