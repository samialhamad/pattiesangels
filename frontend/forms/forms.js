window.onload = function() {

    function addForm(formData) {
        var url = '';
    
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status == 201) {
                    console.log("Form added successfully:", request.response);
                    var form = document.getElementById("adoptionForm");
                    form.reset();
                } else {
                    console.error('Error adding form:', request.statusText);
                }
            }
        };
    
        var jsonData = JSON.stringify(formData);
    
        request.send(jsonData);
    }    

    var form = document.getElementById("adoptionForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var formName = document.getElementById("fullname").value;
        var formEmail = document.getElementById("email").value;
        var formPhoneNumber = document.getElementById("phone").value;
        var formPreferredContact = document.getElementById("contactEmail").value;
        var formPreviouslyOwned = document.getElementById("previouslyOwned").value === "yes";
        var formAdoptionReason = document.getElementById("reasonForAdoption").value;
        
        var newForm = {
            name: formName,
            email: formEmail,
            phoneNumber: formPhoneNumber,
            preferredContact: formPreferredContact,
            previouslyOwned: formPreviouslyOwned,
            adoptionReason: formAdoptionReason
        };

     addForm(newForm);
    });
};