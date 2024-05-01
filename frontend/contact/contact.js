window.onload = function() {

function submitContactForm() {
    // Insert URL into var below, for API endpoint or however an email will be sent
    var url;

    var petName = document.getElementById("petName").value;
    var question = document.getElementById("question").value;
    var email = document.getElementById("email").value;

    // Updat this var with the .env variable for the email address
    var emailAddress = process.env.EMAIL_ADDRESS;

    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 201 || request.status === 201) {
                alert("Successly submitted form:", request.response);
            } else {
                alert("Error submitting form:", request.statusText);
            }
        }
    };
    var jsonData = JSON.stringify({petName: petName, question: question, email: email});
    request.send(jsonData);
}

document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        submitContactForm(); // Call your submit function
    });
})
};
