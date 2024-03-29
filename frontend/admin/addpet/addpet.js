window.onload = function() {

    function addAnimal(animalData) {
        var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/add';
    
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status == 201) {
                    console.log("Animal added successfully:", request.response);
                    var form = document.getElementById("addPetForm");
                    form.reset();
                } else {
                    console.error('Error adding animal:', request.statusText);
                }
            }
        };

        animalData.isFixed = animalData.isFixed ? "Yes" : "No";
    
        var jsonData = JSON.stringify(animalData);
    
        request.send(jsonData);
    }    

    var form = document.getElementById("addPetForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var petName = document.getElementById("petName").value;
        var petGender = document.getElementById("petGender").value;
        var petType = document.getElementById("petType").value;
        var petBreed = document.getElementById("petBreed").value;
        var petAge = document.getElementById("petAge").value;
        var petFixed = document.getElementById("petFixed").value === "yes";
        var petAdopted = document.getElementById("petAdopted").value === "yes";
        var petDescription = document.getElementById("petDescription").value;
        
        var newAnimal = {
            name: petName,
            breed: petBreed,
            gender: petGender,
            age: parseInt(petAge),
            isFixed: petFixed,
            isAdopted: petAdopted,
            description: petDescription
        };

        addAnimal(newAnimal);
    });
};
