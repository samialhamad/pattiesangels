var forms = [];

window.onload = function() {
    getForms();
}

function getForms() {
    // var url = 'http://localhost:3000/apply/adoption_forms'; // Testing url
    var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/apply/adoption_forms';
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status = 200) {
                console.log("GetForms Response: " + request.response);

                var response = JSON.parse(request.response);
                
                forms = []; // Clear the existing forms array
                for (var i = 0; i < response.length; i++) {
                    var form = new Form(response[i]);
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
        (function(index) {
            var form = forms[index];

            var formDiv = document.createElement("div");
            formDiv.setAttribute("class", "formDiv");

            var h2 = document.createElement("h2");
            h2.innerHTML = form.name;
            formDiv.append(h2);

            var applyingForP = document.createElement("p");
            applyingForP.innerHTML = "Applying for: " + form.animalID;
            formDiv.append(applyingForP);

            var emailP = document.createElement("p");
            emailP.innerHTML = "Email: " + form.email;
            formDiv.append(emailP);

            var phoneNumberP = document.createElement("p");
            phoneNumberP.innerHTML = "Phone Number: " + form.phone;
            formDiv.append(phoneNumberP);
            
            var dateOfBirthP = document.createElement("p");
            dateOfBirthP.innerHTML = "Date of Birth: " + form.dateOfBirth;
            formDiv.append(dateOfBirthP);

            var addressP = document.createElement("p");
            addressP.innerHTML = "Address: " + form.address;
            formDiv.append(addressP);

            var hasPetsP = document.createElement("p");
            hasPetsP.innerHTML = "Has Pets: " + form.hasPets;
            formDiv.append(hasPetsP);

            var anchor = document.createElement("a");
                anchor.innerHTML = "View Full Form";
                anchor.setAttribute("id", "viewFullFormButton" + index);
                anchor.setAttribute("data-index", index);
                anchor.onclick = function() { toggleDetails(index); }; // Pass the captured index
                formDiv.append(anchor);

                formsContainerDiv.append(formDiv);
        })(i);
    }
}
    
function toggleDetails(index) {
    var viewMoreButton = document.getElementById("viewMoreButton" + index); 

    var form = forms[index]; 

    var newTab = window.open("", "_blank");
    var newWinDoc = newTab.document;

    newWinDoc.title = "Full Form Details";

    var link = newWinDoc.createElement("link");
    link.rel = "stylesheet";
    link.href = "viewforms.css";
    newWinDoc.head.appendChild(link);

    // Clear existing content in the new window
    newWinDoc.body.innerHTML = '';

    // Create elements to display the additional information
    var heading = newWinDoc.createElement("h1");
    heading.textContent = "Full Form Information for " + form.name;
    newWinDoc.body.appendChild(heading);

    var nameP = newWinDoc.createElement("p");
    nameP.innerHTML = "Full name: " + form.name;
    newWinDoc.body.appendChild(nameP);

    var dateOfBirthP = document.createElement("p");
    dateOfBirthP.innerHTML = "Date of Birth: " + form.dateOfBirth;
    newWinDoc.body.appendChild(dateOfBirthP);

    var coApplicantP = newWinDoc.createElement("p");
    coApplicantP.innerHTML = "Co-Applicant: " + form.coApplicantInfo;
    newWinDoc.body.appendChild(coApplicantP);

    var addressP = newWinDoc.createElement("p");
    addressP.innerHTML = "Address: " + form.address;
    newWinDoc.body.appendChild(addressP);

    var phoneNumberP = document.createElement("p");
    phoneNumberP.innerHTML = "Phone Number: " + form.phone;
    newWinDoc.body.appendChild(phoneNumberP);

    var emailP = document.createElement("p");
    emailP.innerHTML = "Email: " + form.email;
    newWinDoc.body.appendChild(emailP);

    var residencyP = document.createElement("p");
    residencyP.innerHTML = "Residency: " + form.residency;
    newWinDoc.body.appendChild(residencyP);

    var relocationP = document.createElement("p");
    relocationP.innerHTML = "Relocation plans: " + form.relocationPlan;
    newWinDoc.body.appendChild(relocationP);

    var landlordP = document.createElement("p");
    landlordP.innerHTML = "Landlord: " + form.landlord;
    newWinDoc.body.appendChild(landlordP);

    var referralP = document.createElement("p");
    referralP.innerHTML = "Referral: " + form.referral;
    newWinDoc.body.appendChild(referralP);

    var householdAdultInfoP = document.createElement("p");
    householdAdultInfoP.innerHTML = "Household Adult Info: " + form.householdAdultInfo;
    newWinDoc.body.appendChild(householdAdultInfoP);

    var householdChildrenInfoP = document.createElement("p");
    householdChildrenInfoP.innerHTML = "Household Children Info: " + form.householdChildrenInfo;
    newWinDoc.body.appendChild(householdChildrenInfoP);

    var situationChangeP = document.createElement("p");
    situationChangeP.innerHTML = "Situation change expected?: " + form.householdChildrenInfo;
    newWinDoc.body.appendChild(situationChangeP);

    var allergiesP = document.createElement("p");
    allergiesP.innerHTML = "Allergies?: " + form.householdChildrenInfo;
    newWinDoc.body.appendChild(allergiesP);

    var allergiesP = document.createElement("p");
    allergiesP.innerHTML = "Allergies?: " + form.householdChildrenInfo;
    newWinDoc.body.appendChild(allergiesP);
    
    var adoptionReasonP = document.createElement("p");
    adoptionReasonP.innerHTML = "Adoption Reason: " + form.adoptionReason;
    newWinDoc.body.appendChild(adoptionReasonP);

    var employmentP = document.createElement("p");
    employmentP.innerHTML = "Employment: " + form.employment;
    newWinDoc.body.appendChild(employmentP);

    var employerAddressP = document.createElement("p");
    employerAddressP.innerHTML = "Employer Address: " + form.employerAddress;
    newWinDoc.body.appendChild(employerAddressP);

    var employerPhoneP = document.createElement("p");
    employerPhoneP.innerHTML = "Employer Phone: " + form.employerPhone;
    newWinDoc.body.appendChild(employerPhoneP);

    var hasPetsP = document.createElement("p");
    hasPetsP.innerHTML = "Currently own or owned pets?: " + form.hasPets;
    newWinDoc.body.appendChild(hasPetsP);

    var firstPetP = document.createElement("p");
    firstPetP.innerHTML = "First pet info: " + form.firstPet;
    newWinDoc.body.appendChild(firstPetP);

    var secondPetP = document.createElement("p");
    secondPetP.innerHTML = "Second pet info: " + form.secondPet;
    newWinDoc.body.appendChild(secondPetP);

    var thirdP = document.createElement("p");
    thirdP.innerHTML = "Third pet info: " + form.thirdPet;
    newWinDoc.body.appendChild(thirdP);

    var givenUpPetP = document.createElement("p");
    givenUpPetP.innerHTML = "Given up pet before?: " + form.givenUpPet;
    newWinDoc.body.appendChild(givenUpPetP);

    var veterinarianInfoP = document.createElement("p");
    veterinarianInfoP.innerHTML = "Veterinarian Info: " + form.veterinarianInfo;
    newWinDoc.body.appendChild(veterinarianInfoP);

    var lengthOfPetSearchP = document.createElement("p");
    lengthOfPetSearchP.innerHTML = "Length of pet search: " + form.lengthOfPetSearch;
    newWinDoc.body.appendChild(lengthOfPetSearchP);

    var petFoodInfoP = document.createElement("p");
    petFoodInfoP.innerHTML = "Pet food info: " + form.petFoodInfo;
    newWinDoc.body.appendChild(petFoodInfoP);

    var timeToAdjustToPetP = document.createElement("p");
    timeToAdjustToPetP.innerHTML = "Time to adjust to pet: " + form.timeToAdjustToPet;
    newWinDoc.body.appendChild(timeToAdjustToPetP);

    var emergencyBillP = document.createElement("p");
    emergencyBillP.innerHTML = "Ok with emergency bill & budget: " + form.emergencyBill;
    newWinDoc.body.appendChild(emergencyBillP);

    var isHomeCommittedP = document.createElement("p");
    isHomeCommittedP.innerHTML = "Is the home committed?: " + form.isHomeCommitted;
    newWinDoc.body.appendChild(isHomeCommittedP);

    var planIfMovingP = document.createElement("p");
    planIfMovingP.innerHTML = "Plan for pets if you move?: " + form.planIfMoving;
    newWinDoc.body.appendChild(planIfMovingP);

    var keptDayAndNightP = document.createElement("p");
    keptDayAndNightP.innerHTML = "Where will they be kept day and night?: " + form.keptDayAndNight;
    newWinDoc.body.appendChild(keptDayAndNightP);

    var careGiverP = document.createElement("p");
    careGiverP.innerHTML = "Main & emergency cargivers: " + form.careGiver;
    newWinDoc.body.appendChild(careGiverP);

    var outsideTimeP = document.createElement("p");
    outsideTimeP.innerHTML = "How many times per day will they be taken outside?: " + form.outsideTime;
    newWinDoc.body.appendChild(outsideTimeP);

    var trainingPlanP = document.createElement("p");
    trainingPlanP.innerHTML = "Whats the plan for training?: " + form.trainingPlan;
    newWinDoc.body.appendChild(trainingPlanP);

    var yardInfoP = document.createElement("p");
    yardInfoP.innerHTML = "Yard info: " + form.yardInfo;
    newWinDoc.body.appendChild(yardInfoP);

    var dailyTimeAloneP = document.createElement("p");
    dailyTimeAloneP.innerHTML = "How many hours will they be left alone?: " + form.dailyTimeAlone;
    newWinDoc.body.appendChild(dailyTimeAloneP);

    var diggingProblemP = document.createElement("p");
    diggingProblemP.innerHTML = "Plan if a digging problem is developed?: " + form.diggingProblem;
    newWinDoc.body.appendChild(diggingProblemP);

    var barkingProblemP = document.createElement("p");
    barkingProblemP.innerHTML = "Plan if a barking problem is developed?: " + form.barkingProblem;
    newWinDoc.body.appendChild(barkingProblemP);

    var chewingProblemP = document.createElement("p");
    chewingProblemP.innerHTML = "Plan if a chewing problem is developed?: " + form.chewingProblem;
    newWinDoc.body.appendChild(chewingProblemP);

    var separationProblemP = document.createElement("p");
    separationProblemP.innerHTML = "Plan if a separation problem is developed?: " + form.separationProblem;
    newWinDoc.body.appendChild(separationProblemP);

    var aggressionProblemP = document.createElement("p");
    aggressionProblemP.innerHTML = "Plan if a aggression problem is developed?: " + form.aggressionProblem;
    newWinDoc.body.appendChild(aggressionProblemP);

    var referenceOneP = document.createElement("p");
    referenceOneP.innerHTML = "Reference one: " + form.referenceOne;
    newWinDoc.body.appendChild(referenceOneP);

    var referenceTwoP = document.createElement("p");
    referenceTwoP.innerHTML = "Reference two: " + form.referenceTwo;
    newWinDoc.body.appendChild(referenceTwoP);

    var referenceThreeP = document.createElement("p");
    referenceThreeP.innerHTML = "Reference three: " + form.referenceThree;
    newWinDoc.body.appendChild(referenceThreeP);

    var container = document.getElementById("formsContainerDiv");
    container.offsetHeight;
}