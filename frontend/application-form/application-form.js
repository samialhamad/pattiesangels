window.onload = function () {
    setMinMaxDate();
}

function setMinMaxDate() {
    var currentDate = new Date();
    var minDate = new Date;
    minDate.setFullYear(currentDate.getFullYear() - 100);

    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');
    var formattedCurrentDate = year + '-' + month + '-' + day;

    year = minDate.getFullYear();
    month = (minDate.getMonth() + 1).toString().padStart(2, '0');
    day = minDate.getDate().toString().padStart(2, '0');
    var formattedMinDate = year + '-' + month + '-' + day;

    document.getElementById('applicant-dob').setAttribute('min', formattedMinDate);
    document.getElementById('applicant-dob').setAttribute('max', formattedCurrentDate);
}

function formValidation() {
    var dobInput = document.getElementById('applicant-dob');
    var dobValue = dobInput.value;
    var dobDate = new Date(dobValue);

    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("You must be at least 18 years old to submit the form.");
        return false;
    }

    return true;
}