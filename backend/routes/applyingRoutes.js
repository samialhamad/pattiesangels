const express = require('express');
const db = require('../db');
const applyingRoutes = express.Router();

applyingRoutes.get('/:animalID', (req, res) => {
    const animalID = req.params['animalID'];
    if (isNaN(animalID)) {
        return res.status(400).send('Invalid animalID. Must be a number.');
    }
    res.render('pages/application-form.ejs', {animalID: animalID});
});

applyingRoutes.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);
    try {
        db.query('INSERT INTO AdoptionApplications (animals_id, applicant_last_name, applicant_first_name, applicant_dob, co_applicant_first_name, co_applicant_last_name, co_applicant_dob, address, apartment_number, city, state, zip_code, home_phone, cell_phone, email_address, house_ownership, residency_duration, plan_to_move_in_the_near_future, landlord_condo_board_name, landlord_condo_board_phone_number, referral_source, household_adults_count, household_adults_relationships, household_adults_adoption_agreed, household_children_count, household_children_ages, household_children_had_pets, household_expect_current_situation_to_change, household_allergic_to_pets, household_allergic_to_pets_list, why_adopt_self_companion, why_adopt_child_companion, why_adopt_watch_dog, why_adopt_gift, why_adopt_pet_companion, why_adopt_household_companion, employment_employer, employment_position_held, employment_employer_address, employment_employer_city, employment_employer_state, employment_employer_zip_code, employment_duration, employment_employer_phone, pet_has_pets, pet_pet1_name, pet_pet1_breed, pet_pet1_age, pet_pet1_gender, pet_pet1_spayed, pet_pet1_where_are_they, pet_pet2_name, pet_pet2_breed, pet_pet2_age, pet_pet2_gender, pet_pet2_spayed, pet_pet2_where_are_they, pet_pet3_name, pet_pet3_breed, pet_pet3_age, pet_pet3_gender, pet_pet3_spayed, pet_pet3_where_are_they, pet_have_you_ever_given_or_relinquished, pet_given_circumstances) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
        ]);
        res.send('success');
    } catch (e) {
        res.send('error');
    } finally {
    }
})

module.exports = applyingRoutes;