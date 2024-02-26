const express = require('express');
const db = require('../db');
const {NULL} = require("mysql/lib/protocol/constants/types");
const applyingRoutes = express.Router();

applyingRoutes.get('/:animalID', (req, res) => {
    const animalID = req.params['animalID'];
    if (isNaN(animalID)) {
        return res.status(400).send('Invalid animalID. Must be a number.');
    }
    res.render('pages/application-form.ejs', {animalID: animalID});
})

applyingRoutes.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);
    db.query('INSERT INTO AdoptionApplications (animals_id, applicant_last_name, applicant_first_name, applicant_dob, co_applicant_first_name, co_applicant_last_name, co_applicant_dob, address, apartment_number, city, state, zip_code, home_phone, cell_phone, email_address, house_ownership, residency_duration, plan_to_move_in_the_near_future, landlord_condo_board_name, landlord_condo_board_phone_number, referral_source, household_adults_count, household_adults_relationships, household_adults_adoption_agreed, household_children_count, household_children_ages) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
        formData['animalID'],
        formData['applicantLastName'],
        formData['applicantFirstName'],
        formData['applicantDob'],
        formData['coApplicantLastName'],
        formData['coApplicantFirstName'],
        formData['coApplicantDob'] || null,
        formData['address'],
        formData['apartment'],
        formData['city'],
        formData['state'],
        formData['zipCode'],
        formData['homePhone'],
        formData['cellPhone'],
        formData['emailAddress'],
        formData['currently'],
        formData['residencyDuration'] || null,
        formData['planToMove'],
        formData['landlordName'],
        formData['landlordPhone'],
        formData['referral'],

        formData['adultsCount'] || null,
        formData['adultsRelationships'],
        formData['adultsAdoptionAgreed'],
        formData['childrenCount'] || null,
        formData['childrenAges'],
    ]);
    res.send('success');
})

module.exports = applyingRoutes;