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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
