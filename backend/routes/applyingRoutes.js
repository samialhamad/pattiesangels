const express = require('express');
const db = require('../db');
const applyingRoutes = express.Router();

// Endpoint to fetch all applications
applyingRoutes.get('/all', (req, res) => {
    // Query the database for all applications
    db.query('SELECT * FROM AdoptionApplications', (error, results) => {
        if (error) {
            console.error('Error fetching applications:', error);
            return res.status(500).send('Error fetching applications');
        }
        // Send the applications as a JSON response
        res.json(results);
    });
});

applyingRoutes.get('/:animalID', (req, res) => {
    const animalID = parseInt(req.params.animalID); // Parse animalID to an integer
    if (isNaN(animalID)) {
        return res.status(400).send('Invalid animalID. Must be a number.');
    }
    res.render('pages/application-form.ejs', {animalID: animalID});
});

applyingRoutes.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);
    try {
        db.query('INSERT INTO AdoptionApplications (animals_id, applicant_last_name, applicant_first_name, applicant_dob, co_applicant_first_name, co_applicant_last_name, co_applicant_dob, address, apartment_number, city, state, zip_code, home_phone, cell_phone, email_address, house_ownership, residency_duration, plan_to_move_in_the_near_future, landlord_condo_board_name, landlord_condo_board_phone_number, referral_source, household_adults_count, household_adults_relationships, household_adults_adoption_agreed, household_children_count, household_children_ages, household_children_had_pets, household_expect_current_situation_to_change, household_allergic_to_pets, household_allergic_to_pets_list, why_adopt_self_companion, why_adopt_child_companion, why_adopt_watch_dog, why_adopt_gift, why_adopt_pet_companion, why_adopt_household_companion, employment_employer, employment_position_held, employment_employer_address, employment_employer_city, employment_employer_state, employment_employer_zip_code, employment_duration, employment_employer_phone, pet_has_pets, pet_pet1_name, pet_pet1_breed, pet_pet1_age, pet_pet1_gender, pet_pet1_spayed, pet_pet1_where_are_they, pet_pet2_name, pet_pet2_breed, pet_pet2_age, pet_pet2_gender, pet_pet2_spayed, pet_pet2_where_are_they, pet_pet3_name, pet_pet3_breed, pet_pet3_age, pet_pet3_gender, pet_pet3_spayed, pet_pet3_where_are_they, pet_have_you_ever_given_or_relinquished, pet_given_circumstances, veterinarian_name, veterinarian_phone, veterinarian_last_visit, new_pet_how_long_have_you_been_looking, new_pet_what_will_you_feed, new_pet_how_often_will_you_feed, new_pet_time_adjust, new_pet_emergency_care_bill, new_pet_maintenance_yearly_budget, new_pet_responsible_home_committed, new_pet_plan_if_move, new_pet_where_will_it_be_kept_during_day_night, new_pet_primary_care_giver, new_pet_primary_care_giver_alternative, new_pet_emergency_care_giver, new_pet_times_outside_per_day, new_pet_house_train_plan, new_pet_fenced_in_yard, new_pet_fenced_size_type, new_pet_hours_left_alone_per_day, new_pet_digging, new_pet_barking, new_pet_chewing, new_pet_separation_anxiety, new_pet_aggression, references_1, references_1_relationship, references_1_phone, references_2, references_2_relationship, references_2_phone, references_3, references_3_relationship, references_3_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            formData['animalID'],
            formData['applicantLastName'],
            formData['applicantFirstName'],
            formData['applicantDob'],
            formData['coApplicantLastName'],
            formData['coApplicantFirstName'],
            formData['coApplicantDob'] || null,
            formData['address'],
            formData['apartment'] || null,
            formData['city'],
            formData['state'],
            formData['zipCode'],
            formData['homePhone'] || null,
            formData['cellPhone'] || null,
            formData['emailAddress'],
            formData['currently'] || null,
            formData['residencyDuration'] || null,
            formData['planToMove'] || null,
            formData['landlordName'],
            formData['landlordPhone'],
            formData['referral'],

            formData['adultsCount'] || null,
            formData['adultsRelationships'],
            formData['adultsAdoptionAgreed'] || null,
            formData['childrenCount'] || null,
            formData['childrenAges'] || null,
            formData['childrenHadPets'] || null,
            formData['situationChange'] || null,
            formData['petsAllergic'] || null,
            formData['petsAllergicList'] || null,
            formData['selfCompanion'] || null,
            formData['childCompanion'] || null,
            formData['watchDog'] || null,
            formData['gift'] || null,
            formData['petCompanion'] || null,
            formData['householdCompanion'] || null,

            formData['employer'] || null,
            formData['positionHeld'] || null,
            formData['employerAddress'] || null,
            formData['employerCity'] || null,
            formData['employerState'] || null,
            formData['employerZipCode'] || null,
            formData['employmentDuration'] || null,
            formData['employerPhone'] || null,

            formData['hasPets'] || null,
            formData['pet1Name'] || null,
            formData['pet1Breed'] || null,
            formData['pet1Age'] || null,
            formData['pet1Gender'] || null,
            formData['pet1Spayed'] || null,
            formData['pet1Where'] || null,
            formData['pet2Name'] || null,
            formData['pet2Breed'] || null,
            formData['pet2Age'] || null,
            formData['pet2Gender'] || null,
            formData['pet2Spayed'] || null,
            formData['pet2Where'] || null,
            formData['pet3Name'] || null,
            formData['pet3Breed'] || null,
            formData['pet3Age'] || null,
            formData['pet3Gender'] || null,
            formData['pet3Spayed'] || null,
            formData['pet3Where'] || null,
            formData['petGiven'] || null,
            formData['givenCircumstances'] || null,

            formData['veterinarianName'] || null,
            formData['veterinarianPhone'] || null,
            formData['veterinarianLastVisit'] || null,

            formData['timeLookingPet'] || null,
            formData['newPetFeed'] || null,
            formData['newPetFeedFrequency'] || null,
            formData['petTimeAdjust'] || null,
            formData['emergencyBill'] || null,
            formData['maintenanceYearlyBudget'] || null,
            formData['homeCommitted'] || null,
            formData['planIfMove'] || null,
            formData['whereBeKept'] || null,
            formData['primaryCareGiver'] || null,
            formData['alternativeCareGiver'] || null,
            formData['emergencyCareGiver'] || null,
            formData['timesOutside'] || null,
            formData['trainPlan'] || null,
            formData['fenced'] || null,
            formData['fencedSizeType'] || null,
            formData['hoursLeftAlone'] || null,
            formData['digging'] || null,
            formData['barking'] || null,
            formData['chewing'] || null,
            formData['separation'] || null,
            formData['aggression'] || null,

            formData['references1'] || null,
            formData['references1Relationship'] || null,
            formData['references1Phone'] || null,
            formData['references2'] || null,
            formData['references2Relationship'] || null,
            formData['references2Phone'] || null,
            formData['references3'] || null,
            formData['references3Relationship'] || null,
            formData['references3Phone'] || null,
        ]);
        res.send('success');
    } catch (e) {
        res.send('error');
    } finally {
    }
})

module.exports = applyingRoutes;