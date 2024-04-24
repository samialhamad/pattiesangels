window.onload = function() {
    //var url = 'http://localhost:3000/api/animals/add';  // Testing URL
    var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/add';  // Production URL

    function addAnimal(animalData) {
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status == 201) {
                    console.log("Animal added successfully:", request.response);
                    var form = document.getElementById("addAnimalForm");
                    form.reset();
                } else {
                    console.error('Error adding animal:', request.statusText);
                }
            }
        };

        animalData.is_fixed = animalData.is_fixed ? "Yes" : "No";
        var jsonData = JSON.stringify(animalData);
        request.send(jsonData);
    }

    var form = document.getElementById("addAnimalForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission
    
        var formData = new FormData(form);  // Create a FormData object from the form
        var genderValue = document.getElementById("animalGender").value;
        formData.set('animalGender', genderValue.charAt(0).toUpperCase() + genderValue.slice(1).toLowerCase());
        
        formData.append('is_fixed', document.getElementById("animalFixed").value === "yes" ? "Yes" : "No");
        formData.append('is_adopted', document.getElementById("animalAdopted").value === "yes" ? "Yes" : "No");
        
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`); // This will log all keys and values
        }

        var request = new XMLHttpRequest();
        request.open("POST", url);  // Use the same URL for form data submission
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 201) {
                console.log("Animal added successfully:", request.responseText);
                form.reset();  // Reset the form on successful submission
            } else if (request.readyState == 4) {
                console.error('Error adding animal:', request.statusText);
            }
        };
        request.send(formData);  // Send the FormData object
    });
};
