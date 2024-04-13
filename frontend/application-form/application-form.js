window.onload = function () {
    setMinMaxDate();
}

function setMinMaxDate() {
    let currentDate = new Date();
    let minDate = new Date;
    minDate.setFullYear(currentDate.getFullYear() - 100);

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let day = currentDate.getDate().toString().padStart(2, '0');
    let formattedCurrentDate = year + '-' + month + '-' + day;

    year = minDate.getFullYear();
    month = (minDate.getMonth() + 1).toString().padStart(2, '0');
    day = minDate.getDate().toString().padStart(2, '0');
    let formattedMinDate = year + '-' + month + '-' + day;

    document.getElementById('applicant-dob').setAttribute('min', formattedMinDate);
    document.getElementById('applicant-dob').setAttribute('max', formattedCurrentDate);
}

function formValidation() {
    let dobInput = document.getElementById('applicant-dob');
    let dobValue = dobInput.value;
    let dobDate = new Date(dobValue);

    let today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    let monthDiff = today.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("You must be at least 18 years old to submit the form.");
        return false;
    }

    document.getElementById('submission-timestamp').value = today.toISOString().slice(0, 19).replace('T', ' ');

    return true;
}