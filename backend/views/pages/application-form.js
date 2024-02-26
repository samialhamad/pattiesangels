function formValidation() {
    const applicantCurrentlyOwned = document.getElementById('applicant-currently-owned');
    const applicantCurrentlyRent = document.getElementById('applicant-currently-rent');

    if (!applicantCurrentlyOwned.checked && !applicantCurrentlyRent) {
        event.preventDefault();
    }
}