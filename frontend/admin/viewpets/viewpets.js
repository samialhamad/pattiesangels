var animals = [];

window.onload = function() {
    getAnimals();
}

function getAnimals() {
    var url = 'https://api.thedogapi.com/v1/breeds?limit=10&page=0';

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status = 200) {
                console.log("GetAnimals Response: " + request.response);

                var response = JSON.parse(request.response);
                
                animals = []; // Clear the existing animals array
                for (var i = 0; i < response.length; i++) {
                    var animal = {
                        name: response[i].name,
                        breed: response[i].breed,
                        gender: response[i].gender,
                        age: response[i].age,
                        isFixed: response[i].isFixed,
                        description: response[i].description
                        //imageURLString: 'path/to/image'
                    };
                    animals.push(animal);
                }
                addAnimalDivs();
            }
            else {console.error('Error fetching animals:', request.statusText);
        }
    }
}
request.send();
}

function addAnimalDivs() {
    var animalsContainerDiv = document.getElementById("animalsContainerDiv");

    for (var i = 0; i < animals.length; i++) {
        var animal = animals[i];

        var animalDiv = document.createElement("div");
        animalDiv.setAttribute("class", "animalDiv");

        var img = document.createElement("img");
        img.setAttribute("src", animal.imageURLString);
        animalDiv.append(img);

        var h2 = document.createElement("h2");
        h2.innerHTML = animal.name;
        animalDiv.append(h2);

        var breedP = document.createElement("p");
        breedP.innerHTML = "Breed: " + animal.breed;
        animalDiv.append(breedP);

        var genderP = document.createElement("p");
        genderP.innerHTML = "Gender: " + animal.gender;
        animalDiv.append(genderP);
        
        var ageP = document.createElement("p");
        ageP.innerHTML = "Age: " + animal.age;
        animalDiv.append(ageP);

        var fixedP = document.createElement("p");
        fixedP.innerHTML = "Fixed: " + animal.isFixed;
        animalDiv.append(fixedP);

        var descriptionP = document.createElement("p");
        descriptionP.setAttribute("class", "descriptionP");
        descriptionP.innerHTML = "Description: " + animal.description;
        animalDiv.append(descriptionP);

        var anchor = document.createElement("a");
        anchor.innerHTML = "Edit";
        animalDiv.append(anchor);

        var anchor = document.createElement("a");
        anchor.innerHTML = "Edit";
        anchor.setAttribute("class", "edit-button");
        anchor.setAttribute("data-index", i);
        anchor.addEventListener("click", function() {
            editAnimal(i);
        });
        animalDiv.append(anchor);

        animalsContainerDiv.append(animalDiv);
    }
}

function editAnimal(index) {
    var editedAnimal = animals[index];

    localStorage.setItem("editedAnimal", JSON.stringify(editedAnimal));
    localStorage.setItem("editedAnimalIndex", index);

    window.location.href = "../editpets/editpets.html";
}

function getEditedAnimal() {
    var editedAnimalData = localStorage.getItem("editedAnimal");
    if (editedAnimalData) {
        var editedAnimal = JSON.parse(editedAnimalData);
        document.getElementById("editingPetNameSpan").textContent = editedAnimal.name;
        document.getElementById("newName").value = editedAnimal.name;
        document.getElementById("newBreed").value = editedAnimal.breed;
    }
}

document.getElementById("submit").addEventListener("click", function() {
    saveChanges();
});

function saveChanges() {
    var editedAnimal = {
        name: document.getElementById("newName").value,
        breed: document.getElementById("newBreed").value,
    };

    var editedAnimalIndex = parseInt(localStorage.getItem("editedAnimalIndex"));

    animals[editedAnimalIndex] = editedAnimal;

    localStorage.removeItem("editedAnimal");
    localStorage.removeItem("editedAnimalIndex");

    sendUpdatedDataToBackend();

    window.location.href = "../viewpets/viewpets.html";
}

function sendUpdatedDataToBackend() {
    console.log("Sending updated data to the backend:", animals);
}