var animals = [];

window.onload = function() {
    getAnimals();
}

function getAnimals() {
    var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals';

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
        anchor.setAttribute("href", "#");
        anchor.innerHTML = "View More";
        animalDiv.append(anchor);

        animalsContainerDiv.append(animalDiv);
    }
}


