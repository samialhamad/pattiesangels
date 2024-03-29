var forms = [];

window.onload = function() {
    getForms();
}

function getForms() {
    var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/apply/all';

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status = 200) {
                console.log("GetForms Response: " + request.response);

                var response = JSON.parse(request.response);
                
                forms = []; // Clear the existing animals array
                for (var i = 0; i < response.length; i++) {
                    var form = {
                        name: response[i].name,
                        email: response[i].email,
                        phoneNumber: response[i].phoneNumber,
                        preferredContact: response[i].preferredContact,
                        previouslyOwned: response[i].previouslyOwned,
                        adoptionReason: response[i].adoptionReason
                    };
                    forms.push(form);
                }
                addFormsDivs();
            }
            else {console.error('Error fetching forms:', request.statusText);
        }
    }
}
request.send();
}

function addFormsDivs() {
    var formsContainerDiv = document.getElementById("formsContainerDiv");

    for (var i = 0; i < forms.length; i++) {
        var form = forms[i];

        var formDiv = document.createElement("div");
        formDiv.setAttribute("class", "formDiv");

        var h2 = document.createElement("h2");
        h2.innerHTML = form.name;
        formDiv.append(h2);

        var emailP = document.createElement("p");
        emailP.innerHTML = "Email: " + form.email;
        formDiv.append(emailP);

        var phoneNumberP = document.createElement("p");
        phoneNumberP.innerHTML = "Phone Number: " + form.phoneNumber;
        formDiv.append(phoneNumberP);
        
        var preferredContactP = document.createElement("p");
        preferredContactP.innerHTML = "Preferred Contact: " + form.preferredContact;
        formDiv.append(preferredContactP);

        var previouslyOwnedP = document.createElement("p");
        previouslyOwnedP.innerHTML = "Previously Owned: " + form.previouslyOwned;
        formDiv.append(previouslyOwnedP);

        var adoptionReasonP = document.createElement("p");
        adoptionReasonP.setAttribute("class", "descriptionP");
        adoptionReasonP.innerHTML = "Reason for Adoption: " + form.adoptionReason;
        formDiv.append(adoptionReasonP);

        var anchor = document.createElement("a");
        anchor.innerHTML = "Accept";
        formDiv.append(anchor);

        var anchor = document.createElement("a");
        anchor.innerHTML = "Accept";
        anchor.setAttribute("class", "accept-button");
        anchor.setAttribute("data-index", i);
        anchor.addEventListener("click", function() {
            editAnimal(i);
        });
        formDiv.append(anchor);

        formsContainerDiv.append(formDiv);
    }
}