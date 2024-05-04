class Form {
    //TODO - Update properties with actual model from server

    constructor(form) {
        this.id = form.id;
        this.animalID = form.animal_id;
        this.name = form.applicant_first_name + " " + form.applicant_last_name;
        this.dateOfBirth = form.applicant_dob;
        this.coApplicantInfo = form.co_applicant_first_name + " " + form.co_applicant_last_name + " Date of Birth: " + form.co_applicant_dob;
        this.address = form.address + " " + form.city + " " + form.state + " " + form.zipCode + " Apartment Number: " + form.apartment_number
        this.phone = form.home_phone + " Cell Phone " + form.cell_phone;
        this.email = form.email_address;
        this.residency = form.house_ownership + " for " + form.residency_duration;
        this.relocationPlan = form.plan_to_move_in_the_near_future;
        this.landlord = form.landlord_condo_board_name + " LandLord Phone Number: " + form.landlord_condo_board_phone_number;
        this.referral = form.referral_source;
        this.householdAdultInfo = form.household_adults_count + 
        " Relationship: " + form.household_adults_relationships + 
        " Agreed upon Adoption: " + form.household_adults_adoption_agreed;

        this.householdChildrenInfo = form.household_children_count + 
        " Children Ages: " + form.household_children_ages + 
        " Had pets before:" + form.household_children_had_pets;

        this.situationChange = form.household_expect_current_situation_to_change;
        this.allergies = form.household_allergic_to_pets + " List: " + form.household_allergic_to_pets_list;
        this.adoptionReason = "Self Companion: " + form.why_adopt_self_companion + 
        " Child Companion: " + form.why_adopt_child_companion + 
        " Watch Dog: " + form.why_adopt_watch_dog + 
        " Gift " + form.why_adopt_gift + 
        " Pet Companion " + form.why_adopt_pet_companion + 
        " Adult Companion " + form.why_adopt_household_companion;

        this.employment = form.employment_position_held + " at " + form.employment_employer + " for " + form.employment_duration;
        this.employerAddress = form.employment_employer_address + 
        " " + form.employment_employer_city + 
        " " + form.employment_employer_state + 
        " " + form.employment_employer_zip_code;

        this.employerPhone = form.employment_employer_phone;
        this.hasPets = form.pet_has_pets;
        this.firstPet = form.pet_pet1_name + 
        " Breed: " + form.pet_pet1_breed + 
        " Age: " + form.pet_pet1_age + 
        " Gender: " + form.pet_pet1_gender + 
        " Spayed: " + form.pet_pet1_spayed +
        " Location: " + form.pet_pet1_where_are_they;

        this.secondPet = form.pet_pet2_name + 
        " Breed: " + form.pet_pet2_breed + 
        " Age: " + form.pet_pet2_age + 
        " Gender: " + form.pet_pet2_gender + 
        " Spayed: " + form.pet_pet2_spayed +
        " Location: " + form.pet_pet2_where_are_they;

        this.thirdPet = form.pet_pet3_name + 
        " Breed: " + form.pet_pet3_breed + 
        " Age: " + form.pet_pet3_age + 
        " Gender: " + form.pet_pet3gender + 
        " Spayed: " + form.pet_pet3_spayed +
        " Location: " + form.pet_pet3_where_are_they;

        this.givenUpPet = form.pet_have_you_ever_given_or_relinquished + " Reason: " + form.pet_given_circumstances;
        this.veterinarianInfo = form.veterinarian_name + 
        " Phone Number: " + form.veterinarian_phone + 
        " Last visit: " + form.veterinarian_last_visit;
        
        this.lengthOfPetSearch = form.new_pet_how_long_have_you_been_looking;
        this.petFoodInfo = form.new_pet_what_will_you_feed + " Times per day: " + form.new_pet_how_often_will_you_feed;
        this.timeToAdjustToPet = form.new_pet_time_adjust;
        this.emergencyBill = form.new_pet_emergency_care_bill + " Yearly Budget: " + form.new_pet_maintenance_yearly_budget;
        this.isHomeCommitted = form.new_pet_responsible_home_committed;
        this.planIfMoving = form.new_pet_plan_if_move;
        this.keptDayAndNight = form.new_pet_where_will_it_be_kept_during_day_night;
        this.careGiver = form.new_pet_primary_care_giver + " Emergency Care Giver: " + form.new_pet_emergency_care_giver;
        this.outsideTime = form.new_pet_times_outside_per_day;
        this.trainingPlan = form.new_pet_house_train_plan;
        this.yardInfo = form.new_pet_fenced_in_yard + " Type of Yard: " + form.new_pet_fenced_size_type;
        this.dailyTimeAlone = form.new_pet_hours_left_alone_per_day;
        this.diggingProblem = form.new_pet_digging; 
        this.barkingProblem = form.new_pet_barking;
        this.chewingProblem = form.new_pet_chewing;
        this.separationProblem = form.new_pet_separation_anxiety;
        this.aggressionProblem = form.new_pet_aggression;
        this.referenceOne = form.references_1 + " Relationship: " + form.references_1_relationship + " Phone Number: " + form.references_1_phone;
        this.referenceTwo = form.references_2 + " Relationship: " + form.references_2_relationship + " Phone Number: " + form.references_2_phone;
        this.referenceThree = form.references_3 + " Relationship: " + form.references_3_relationship + " Phone Number: " + form.references_3_phone;
    }
}

