class Form {
    //TODO - Update properties with actual model from server
    constructor(form) {
        this.name = form.applicant_first_name + " " + form.applicant_last_name;
        this.email = form.email_address;
        this.phoneNumber = null;
        this.preferredContact = null;
        this.previouslyOwned = null;
        this.adoptionReason = form.why_adopt_pet_companion;
    }
}

