-- --------------------------------------------------------
-- Host:                         dcrhg4kh56j13bnu.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Server version:               10.4.32-MariaDB-log - Source distribution
-- Server OS:                    Linux
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table test.Admin
CREATE TABLE IF NOT EXISTS `Admin` (
  `admin_id` int(11) NOT NULL DEFAULT 0,
  `username` varchar(255) NOT NULL DEFAULT '',
  `password_hash` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Contains login information for admin\r\n';

-- Dumping data for table test.Admin: ~0 rows (approximately)
DELETE FROM `Admin`;
INSERT INTO `Admin` (`admin_id`, `username`, `password_hash`) VALUES
	(0, 'Admin', 'SeniorProj');

-- Dumping structure for table test.AdoptionApplications
CREATE TABLE IF NOT EXISTS `AdoptionApplications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `animal_id` int(11) NOT NULL,
  `applicant_last_name` varchar(50) NOT NULL,
  `applicant_first_name` varchar(50) NOT NULL,
  `applicant_dob` date NOT NULL,
  `co_applicant_last_name` varchar(50) DEFAULT NULL,
  `co_applicant_first_name` varchar(50) DEFAULT NULL,
  `co_applicant_dob` date DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `apartment_number` varchar(10) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(15) NOT NULL,
  `zip_code` varchar(10) NOT NULL,
  `home_phone` varchar(20) DEFAULT NULL,
  `cell_phone` varchar(20) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `house_ownership` enum('Own','Rent') DEFAULT NULL,
  `residency_duration` varchar(50) DEFAULT NULL,
  `plan_to_move_in_the_near_future` enum('Yes','No') DEFAULT NULL,
  `landlord_condo_board_name` varchar(50) DEFAULT NULL,
  `landlord_condo_board_phone_number` varchar(20) DEFAULT NULL,
  `referral_source` varchar(50) DEFAULT NULL,
  `household_adults_count` tinyint(4) DEFAULT NULL,
  `household_adults_relationships` varchar(100) DEFAULT NULL,
  `household_adults_adoption_agreed` enum('Yes','No') DEFAULT NULL,
  `household_children_count` tinyint(4) DEFAULT NULL,
  `household_children_ages` varchar(20) DEFAULT NULL,
  `household_children_had_pets` enum('Yes','No') DEFAULT NULL,
  `household_expect_current_situation_to_change` enum('Yes','No') DEFAULT NULL,
  `household_allergic_to_pets` enum('Yes','No') DEFAULT NULL,
  `household_allergic_to_pets_list` varchar(255) DEFAULT NULL,
  `why_adopt_self_companion` tinyint(1) DEFAULT 0,
  `why_adopt_child_companion` tinyint(1) DEFAULT 0,
  `why_adopt_watch_dog` tinyint(1) DEFAULT 0,
  `why_adopt_gift` tinyint(1) DEFAULT 0,
  `why_adopt_pet_companion` tinyint(1) DEFAULT 0,
  `why_adopt_household_companion` tinyint(1) DEFAULT 0,
  `employment_employer` varchar(50) DEFAULT NULL,
  `employment_position_held` varchar(50) DEFAULT NULL,
  `employment_employer_address` varchar(100) DEFAULT NULL,
  `employment_employer_city` varchar(50) DEFAULT NULL,
  `employment_employer_state` varchar(15) DEFAULT NULL,
  `employment_employer_zip_code` varchar(10) DEFAULT NULL,
  `employment_duration` varchar(50) DEFAULT NULL,
  `employment_employer_phone` varchar(20) DEFAULT NULL,
  `pet_has_pets` enum('Yes','No') DEFAULT NULL,
  `pet_pet1_name` varchar(20) DEFAULT NULL,
  `pet_pet1_breed` varchar(30) DEFAULT NULL,
  `pet_pet1_age` tinyint(4) DEFAULT NULL,
  `pet_pet1_gender` enum('M','F') DEFAULT NULL,
  `pet_pet1_spayed` enum('Yes','No') DEFAULT NULL,
  `pet_pet1_where_are_they` varchar(50) DEFAULT NULL,
  `pet_pet2_name` varchar(20) DEFAULT NULL,
  `pet_pet2_breed` varchar(30) DEFAULT NULL,
  `pet_pet2_age` tinyint(4) DEFAULT NULL,
  `pet_pet2_gender` enum('M','F') DEFAULT NULL,
  `pet_pet2_spayed` enum('Yes','No') DEFAULT NULL,
  `pet_pet2_where_are_they` varchar(50) DEFAULT NULL,
  `pet_pet3_name` varchar(20) DEFAULT NULL,
  `pet_pet3_breed` varchar(30) DEFAULT NULL,
  `pet_pet3_age` tinyint(4) DEFAULT NULL,
  `pet_pet3_gender` enum('M','F') DEFAULT NULL,
  `pet_pet3_spayed` enum('Yes','No') DEFAULT NULL,
  `pet_pet3_where_are_they` varchar(50) DEFAULT NULL,
  `pet_have_you_ever_given_or_relinquished` enum('Yes','No') DEFAULT NULL,
  `pet_given_circumstances` varchar(255) DEFAULT NULL,
  `veterinarian_name` varchar(30) DEFAULT NULL,
  `veterinarian_phone` varchar(20) DEFAULT NULL,
  `veterinarian_last_visit` varchar(255) DEFAULT NULL,
  `new_pet_how_long_have_you_been_looking` varchar(50) DEFAULT NULL,
  `new_pet_what_will_you_feed` varchar(50) DEFAULT NULL,
  `new_pet_how_often_will_you_feed` varchar(50) DEFAULT NULL,
  `new_pet_time_adjust` varchar(50) DEFAULT NULL,
  `new_pet_emergency_care_bill` enum('Yes','No') DEFAULT NULL,
  `new_pet_maintenance_yearly_budget` varchar(10) DEFAULT NULL,
  `new_pet_responsible_home_committed` enum('Yes','No') DEFAULT NULL,
  `new_pet_plan_if_move` varchar(50) DEFAULT NULL,
  `new_pet_where_will_it_be_kept_during_day_night` varchar(30) DEFAULT NULL,
  `new_pet_primary_care_giver` varchar(10) DEFAULT NULL,
  `new_pet_primary_care_giver_alternative` varchar(10) DEFAULT NULL,
  `new_pet_emergency_care_giver` varchar(20) DEFAULT NULL,
  `new_pet_times_outside_per_day` varchar(20) DEFAULT NULL,
  `new_pet_house_train_plan` varchar(30) DEFAULT NULL,
  `new_pet_fenced_in_yard` enum('Yes','No') DEFAULT NULL,
  `new_pet_fenced_size_type` varchar(20) DEFAULT NULL,
  `new_pet_hours_left_alone_per_day` varchar(20) DEFAULT NULL,
  `new_pet_digging` varchar(30) DEFAULT NULL,
  `new_pet_barking` varchar(30) DEFAULT NULL,
  `new_pet_chewing` varchar(30) DEFAULT NULL,
  `new_pet_separation_anxiety` varchar(30) DEFAULT NULL,
  `new_pet_aggression` varchar(30) DEFAULT NULL,
  `references_1` varchar(30) DEFAULT NULL,
  `references_1_relationship` varchar(15) DEFAULT NULL,
  `references_1_phone` varchar(20) DEFAULT NULL,
  `references_2` varchar(30) DEFAULT NULL,
  `references_2_relationship` varchar(15) DEFAULT NULL,
  `references_2_phone` varchar(20) DEFAULT NULL,
  `references_3` varchar(30) DEFAULT NULL,
  `references_3_relationship` varchar(15) DEFAULT NULL,
  `references_3_phone` varchar(20) DEFAULT NULL,
  `applicant` varchar(30) DEFAULT NULL,
  `co_applicant` varchar(30) DEFAULT NULL,
  `status` enum('Pending','Approved','Denied') NOT NULL DEFAULT 'Pending',
  `submission_timestamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `animals_id` (`animal_id`) USING BTREE,
  CONSTRAINT `AdoptionApplications_ibfk_1` FOREIGN KEY (`animal_id`) REFERENCES `Animals` (`Animal_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table test.AdoptionApplications: ~3 rows (approximately)
DELETE FROM `AdoptionApplications`;
INSERT INTO `AdoptionApplications` (`id`, `animal_id`, `applicant_last_name`, `applicant_first_name`, `applicant_dob`, `co_applicant_last_name`, `co_applicant_first_name`, `co_applicant_dob`, `address`, `apartment_number`, `city`, `state`, `zip_code`, `home_phone`, `cell_phone`, `email_address`, `house_ownership`, `residency_duration`, `plan_to_move_in_the_near_future`, `landlord_condo_board_name`, `landlord_condo_board_phone_number`, `referral_source`, `household_adults_count`, `household_adults_relationships`, `household_adults_adoption_agreed`, `household_children_count`, `household_children_ages`, `household_children_had_pets`, `household_expect_current_situation_to_change`, `household_allergic_to_pets`, `household_allergic_to_pets_list`, `why_adopt_self_companion`, `why_adopt_child_companion`, `why_adopt_watch_dog`, `why_adopt_gift`, `why_adopt_pet_companion`, `why_adopt_household_companion`, `employment_employer`, `employment_position_held`, `employment_employer_address`, `employment_employer_city`, `employment_employer_state`, `employment_employer_zip_code`, `employment_duration`, `employment_employer_phone`, `pet_has_pets`, `pet_pet1_name`, `pet_pet1_breed`, `pet_pet1_age`, `pet_pet1_gender`, `pet_pet1_spayed`, `pet_pet1_where_are_they`, `pet_pet2_name`, `pet_pet2_breed`, `pet_pet2_age`, `pet_pet2_gender`, `pet_pet2_spayed`, `pet_pet2_where_are_they`, `pet_pet3_name`, `pet_pet3_breed`, `pet_pet3_age`, `pet_pet3_gender`, `pet_pet3_spayed`, `pet_pet3_where_are_they`, `pet_have_you_ever_given_or_relinquished`, `pet_given_circumstances`, `veterinarian_name`, `veterinarian_phone`, `veterinarian_last_visit`, `new_pet_how_long_have_you_been_looking`, `new_pet_what_will_you_feed`, `new_pet_how_often_will_you_feed`, `new_pet_time_adjust`, `new_pet_emergency_care_bill`, `new_pet_maintenance_yearly_budget`, `new_pet_responsible_home_committed`, `new_pet_plan_if_move`, `new_pet_where_will_it_be_kept_during_day_night`, `new_pet_primary_care_giver`, `new_pet_primary_care_giver_alternative`, `new_pet_emergency_care_giver`, `new_pet_times_outside_per_day`, `new_pet_house_train_plan`, `new_pet_fenced_in_yard`, `new_pet_fenced_size_type`, `new_pet_hours_left_alone_per_day`, `new_pet_digging`, `new_pet_barking`, `new_pet_chewing`, `new_pet_separation_anxiety`, `new_pet_aggression`, `references_1`, `references_1_relationship`, `references_1_phone`, `references_2`, `references_2_relationship`, `references_2_phone`, `references_3`, `references_3_relationship`, `references_3_phone`, `applicant`, `co_applicant`, `status`, `submission_timestamp`) VALUES
	(1, 1, 'dasdasd', 'dasdasd', '1998-09-09', 'dasda', 'dasda', '2010-10-10', '1', '1234', '31231', '1321', '95757', '916999999', '1234567889', 'dasdasd@gmail.com', NULL, '10', NULL, 'N/A', '1234567889', 'N/A', 2, 'mom', 'Yes', 1, '12, 14', 'Yes', 'No', 'Yes', 'abc', 1, 1, 1, 1, 1, 1, 'AVC', 'CEO', 'dasdasdasdasdasd', 'SA', 'CA', '12345', '10', '1234567889', NULL, 'K', 'O', 1, NULL, 'Yes', 'H', 'K2', 'O2', 2, NULL, 'Yes', 'H2', 'K3', 'O3', 3, NULL, 'No', 'H3', 'Yes', 'None', 'dasd', '12345678902', 'Last year', 'N/A', 'N/A', 'N/A', '1 year', 'Yes', 'dasdsad', 'Yes', 'dasdas', 'dasd', 'dasd', 'dasdasd', 'dasdas', 'dasdasd', NULL, 'Yes', 'dasdas', 'dasdas', 'dasdasd', 'asdasd', 'dasdasd', 'dasdasd', 'dasda', 'dasdas', 'dasdas', '123456789', 'dasdasd', 'dasd', '1234567890', 'dasda', 'dasdasd', '12345678901', NULL, NULL, 'Pending', NULL),
	(2, 1, 'dasdasd', 'dasdasd', '1997-10-11', 'dasda', 'dasda', '2020-10-11', '1', NULL, '31231', '1321', '95757', '916999999', NULL, 'dasdasd@gmail.com', NULL, '10', NULL, 'N/A', '1234567889', 'N/A', 2, 'mom', NULL, 1, '12, 14', NULL, NULL, NULL, 'abc', NULL, NULL, NULL, NULL, NULL, NULL, 'AVC', 'CEO', 'dasdasdasdasdasd', 'SA', 'CA', '12345', '10', '1234567889', NULL, 'K', 'O', 1, NULL, NULL, 'H', 'K2', 'O2', 2, NULL, NULL, 'H2', 'K3', 'O3', 3, NULL, NULL, 'H3', NULL, 'None', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pending', NULL),
	(3, 1, 'DINH', 'PHUC', '1233-10-13', 'PHUC', 'DINH', '2023-03-03', '10082 Mud Hen Way', NULL, 'Elk Grove', 'CA', '95757', '19165388315', NULL, 'phucvandinh@icloud.com', NULL, NULL, NULL, '', '', '', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '10082 Mud Hen Way', 'Elk Grove', 'CA', '95757', NULL, '19165388315', NULL, 'PHUC V DINH', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pending', NULL),
	(15, 1, 'Alhamad', 'Sami', '2000-07-04', '', '', NULL, '111 circle road', NULL, 'folsom', 'CA', '95630', '9161234567', NULL, 'samialhamad@pattiesangels.com', 'Own', '3 years', 'No', '', '', '', 3, 'family', 'Yes', 0, NULL, NULL, NULL, NULL, NULL, 1, NULL, 1, NULL, NULL, 1, 'whole foods', 'shopper', 'palladio', 'folsom', 'ca', '95630', '1 year', NULL, 'No', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 year', 'canned food', 'twice daily', 'a lot', 'Yes', '2,000', 'Yes', 'bring them with me', 'house', 'me', 'neighbor', 'neighbor/friends', 'twice', 'third party trainer', 'Yes', NULL, '2 hours max', 'discipline', 'discipline2', 'discipline3', 'discipline4', 'discipline5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pending', '2024-04-22 00:29:27'),
	(16, 2, 'Smith', 'John', '2001-03-01', 'Sandra', 'Rose', '2000-11-10', '887 Imaginary Court', '31', 'Rancho Cordova', 'California', '95742', '916-123-3456', '530-000-1122', 'notarealemail@internet.org', 'Rent', '1 year', 'Yes', 'Landlord Inc', '730-9908-1456', 'Friend', 2, 'Relationship', 'Yes', 0, '0', 'No', 'No', 'No', 'N/A', 1, NULL, 1, 1, NULL, 1, 'McDonalds', 'Line cook', '130 Clown Road', 'Rancho Cordova', 'California', '95742', '2 years', '916-789-9901', 'Yes', 'Fluffles', 'Retriever', 15, 'M', 'Yes', 'Apartment', 'Roses', 'German Shepard', 24, 'F', 'No', 'Apartment2', 'Brownies', 'Husky', 3, 'F', 'Yes', 'Apartment3', 'No', 'N/A', 'Dr. Veterinarian', '916-454-2231', '3 months ago, shot', '3 months', 'canned food', 'twice daily', 'a lot', 'Yes', '2,150', 'Yes', 'bring them with me', 'house', 'me', 'girlfriend', 'girlfriend', 'twice', 'third party trainer', 'No', 'n/a', '2 max', 'disciplinary action 1', 'disciplinary action 2', 'disciplinary action 3', 'disciplinary action 4', 'disciplinary action 5', 'friend one', 'school', '213-394-9001', 'friend two', 'work', '000-165-7801', 'friend three', 'family', '333-762-4444', NULL, NULL, 'Pending', '2024-04-22 00:46:13'),
	(17, 1, 'Testing API', 'dasdasd', '2000-10-11', '', '', NULL, 'sdaasdasd', NULL, 'dasdasd', 'dasda', '12345', NULL, NULL, 'dasdasd@gmail.com', NULL, NULL, NULL, '', '', '', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'dasdasdasdasd', 'dasdasda', 'dasdsadasd', '3123213', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pending', '2024-04-26 07:36:40');

-- Dumping structure for table test.Animals
CREATE TABLE IF NOT EXISTS `Animals` (
  `animal_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `breed` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `age` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_fixed` enum('Yes','No') DEFAULT NULL,
  `is_adopted` enum('Yes','No') DEFAULT NULL,
  `image_url` longtext DEFAULT NULL,
  PRIMARY KEY (`animal_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This is the information for all the adoptable animals.';

-- Dumping data for table test.Animals: ~6 rows (approximately)
DELETE FROM `Animals`;
INSERT INTO `Animals` (`animal_id`, `name`, `breed`, `gender`, `age`, `description`, `is_fixed`, `is_adopted`, `image_url`) VALUES
	(1, 'Shasta', 'Husky Mix', 'Female', '13', 'Test edit', 'Yes', 'Yes', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/Shasta.jpg'),
	(2, 'Zoya', 'Husky', 'Female', '14', 'Test edit', 'Yes', 'No', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/IMG_03111111.jpg'),
	(45, 'Roxy', 'Miniature Pinscher mix', 'Female', '96', 'Testing add', 'Yes', 'No', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/Roxy.webp'),
	(47, 'Bailey', 'Rat Terrier', 'Male', '84', 'Testing deployment', 'Yes', 'Yes', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/IMG_06731.jpg'),
	(48, 'River', 'German Shepheard', 'Male', '84', 'Add test', 'No', 'No', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/River.jpg'),
	(49, 'Robodog', 'Lab mix', 'Female', '36', 'A dog', 'No', 'Yes', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/DALL%C3%82%C2%B7E%202024-04-24%2019.46.32%20-%20A%20realistic%20and%20detailed%20depiction%20of%20a%20robot%20labrador%20mix.%20The%20robot%20dog%20features%20metallic%20and%20mechanical%20components%20blended%20with%20organic%2C%20lifelike%20f.webp'),
	(55, 'Sean', 'Terrier Mix', 'Male', '64', 'Testing function', 'Yes', 'No', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/Joey%20on%20Path.jpg'),
	(56, 'asdasdasd', 'asdasd', 'Male', '10', 'dasdasdasd', 'Yes', 'No', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/domestic-dog_thumb_square.jpg'),
	(57, 'Branched Deploy Testing Fetch API', 'Chihuahua', 'Female', '12', 'Verifying fetch API on merged branched', 'No', 'Yes', 'https://patties-angels.s3.us-west-1.amazonaws.com/Adoptable_Animals/dumbdog.png');

-- Dumping structure for table test.Testimonials
CREATE TABLE IF NOT EXISTS `Testimonials` (
  `testimonial_id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `date` date NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `animal_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`testimonial_id`) USING BTREE,
  KEY `Animal_ID` (`animal_id`) USING BTREE,
  CONSTRAINT `Animal_ID` FOREIGN KEY (`animal_id`) REFERENCES `Animals` (`Animal_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='All the testimonials';

-- Dumping data for table test.Testimonials: ~0 rows (approximately)
DELETE FROM `Testimonials`;
INSERT INTO `Testimonials` (`testimonial_id`, `author`, `content`, `date`, `image`, `animal_id`) VALUES
	(1, 'Fernando', 'content goes here\r\n', '2024-02-11', NULL, 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
