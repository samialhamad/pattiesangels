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

                for (var i = 0; i < response.length; i++) {
                    var animal = new Animal(response[i]);
                    animals.push(animal);
                }

                addAnimalDivs();
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
        breedP.innerHTML = "Breed:";
        animalDiv.append(breedP);

        var ageP = document.createElement("p");
        ageP.innerHTML = "Age:";
        animalDiv.append(ageP);

        var genderP = document.createElement("p");
        genderP.innerHTML = "Gender:";
        animalDiv.append(genderP);

        var spayedP = document.createElement("p");
        spayedP.innerHTML = "Spayed:";
        animalDiv.append(spayedP);

        var descriptionP = document.createElement("p");
        descriptionP.innerHTML = "Description:";
        animalDiv.append(descriptionP);

        var button = document.createElement("button");
        button.innerHTML = "Apply";
        animalDiv.append(button);

        animalsContainerDiv.append(animalDiv);
    }
}


