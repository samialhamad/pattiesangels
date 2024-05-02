function submitContactForm() {
    // var url = 'http://localhost:3000/api/contact/send-email';

    var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/contact/send-email';

    var petName = document.getElementById("petName").value;
    var question = document.getElementById("question").value;
    var email = document.getElementById("email").value;

    var data = JSON.stringify({
        petName: petName,
        question: question,
        email: email
    });

    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == 4) { // Ensure the request is complete
            if (request.status == 200) { // Check if the request was successful
                console.log("Email sent successfully: " + request.response);
                alert("Successfully submitted form and sent email.");
                // Refresh the page
                window.location.reload();
            } else {
                console.error("Error submitting form: " + request.statusText);
                alert("Error submitting form and sending email.");
            }
        }
    }
    request.send(data);
}

document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        submitContactForm(); // Call your function to submit the form
    });
});
