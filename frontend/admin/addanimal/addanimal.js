window.onload = function() {

    function addAnimal(animalData) {
        var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/add';

        // Testing url
        //var url = 'http://localhost:3000/api/animals/add';
    
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
        event.preventDefault(); 
        
        var animalName = document.getElementById("animalName").value;
        var animalGender = document.getElementById("animalGender").value;
        var animalType = document.getElementById("animalType").value;
        var animalBreed = document.getElementById("animalBreed").value;
        var animalAge = document.getElementById("animalAge").value;
        var animalFixed = document.getElementById("animalFixed").value === "yes";
        var animalAdopted = document.getElementById("animalAdopted").value === "yes";
        var animalDescription = document.getElementById("animalDescription").value;
        
        var newAnimal = {
            name: animalName,
            breed: animalBreed,
            gender: animalGender,
            age: parseInt(animalAge),
            is_fixed: animalFixed,
            is_adopted: animalAdopted,
            description: animalDescription
        };

        addAnimal(newAnimal);
    });
};
