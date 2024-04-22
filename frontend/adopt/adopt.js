var animals = [];

window.onload = function() {
    getAnimals();
}

function getAnimals() {
    var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals';

    // Testing url
    //var url = 'http://localhost:3000/api/animals';

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status = 200) {
                console.log("GetAnimals Response: " + request.response);

                var response = JSON.parse(request.response);
                
                animals = []; 
                for (var i = 0; i < response.length; i++) {
                    var animal = new Animal(response[i]);
                    console.log(animal);
                    animals.push(animal);
                }
                addAnimalDivs();
            }
            else {
                console.error('Error fetching animals:', request.statusText);
            }
        }
    }
    request.send();
}

function addAnimalDivs() {
    var animalsContainerDiv = document.getElementById("animalsContainerDiv");
    for (let i = 0; i < animals.length; i++) {
        var animal = animals[i];

        var animalDiv = document.createElement("div");
        animalDiv.setAttribute("class", "animalDiv");

        var img = document.createElement("img");
        img.setAttribute("src", animal.image_url);
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
        
        var moreInfoDiv = document.createElement("div");
        moreInfoDiv.setAttribute("class", "moreInfo");
        moreInfoDiv.setAttribute("id", "moreInfo" + i);
        moreInfoDiv.style.display = "none"; 

        var ageP = document.createElement("p");
        ageP.innerHTML = "Age: " + animal.ageString;
        moreInfoDiv.appendChild(ageP); 

        var fixedP = document.createElement("p");
        fixedP.innerHTML = "Fixed: " + animal.is_fixed;
        moreInfoDiv.appendChild(fixedP); 

        var descriptionP = document.createElement("p");
        descriptionP.setAttribute("class", "descriptionP");
        descriptionP.innerHTML = "Description: " + animal.description;
        moreInfoDiv.appendChild(descriptionP); 

        var adoptFormButton = document.createElement("button");
        adoptFormButton.innerHTML = "Adopt Form";
        adoptFormButton.className = 'adoptFormButton';
        adoptFormButton.onclick = redirectToAdoptForm(animal.id);

        moreInfoDiv.appendChild(adoptFormButton);

        animalDiv.appendChild(moreInfoDiv);


        var viewMoreButton = document.createElement("button");
        viewMoreButton.innerHTML = "View More";
        viewMoreButton.setAttribute("id", "viewMoreButton" + i);
        viewMoreButton.className = 'viewMoreButton';
        viewMoreButton.onclick = function() { toggleDetails(i); };
        animalDiv.appendChild(viewMoreButton);

        animalsContainerDiv.appendChild(animalDiv);
    }
}

function toggleDetails(index) {
    var viewMoreButton = document.getElementById("viewMoreButton" + index); 

    var animal = animals[index]; 

    var newTab = window.open("", "_blank");
    var newWinDoc = newTab.document;

    newWinDoc.title = "More about " + animal.name;

    var link = newWinDoc.createElement("link");
    link.rel = "stylesheet";
    link.href = "viewmore.css";
    newWinDoc.head.appendChild(link);

    // Clear existing content in the new window
    newWinDoc.body.innerHTML = '';

    // Create elements to display the additional information
    var heading = newWinDoc.createElement("h1");
    heading.textContent = "Additional Information for " + animal.name;
    newWinDoc.body.appendChild(heading);

    var img = newWinDoc.createElement("img");
    img.setAttribute("src", animal.image_url);
    newWinDoc.body.appendChild(img)

    var breed = newWinDoc.createElement("p");
    breed.innerHTML = "Breed: " + animal.breed;
    newWinDoc.body.appendChild(breed);

    var gender = newWinDoc.createElement("p");
    gender.innerHTML = "Gender: " + animal.gender;
    newWinDoc.body.appendChild(gender);

    var ageP = newWinDoc.createElement("p");
    ageP.innerHTML = "Age: " + animal.ageString;
    newWinDoc.body.appendChild(ageP); 

    var fixedP = newWinDoc.createElement("p");
    fixedP.innerHTML = "Fixed: " + animal.is_fixed;
    newWinDoc.body.appendChild(fixedP); 

    var descriptionP = newWinDoc.createElement("p");
    descriptionP.innerHTML = "Description: " + animal.description;
    newWinDoc.body.appendChild(descriptionP); 

    var adoptFormButton = newWinDoc.createElement("button");
    adoptFormButton.innerHTML = "Adoption Form";
    adoptFormButton.onclick = function() {
        newWinDoc.location.href = '../apply/' + animal.id;
    }
    newWinDoc.body.appendChild(adoptFormButton);

    var container = document.getElementById("animalsContainerDiv");
    container.offsetHeight;
}

function redirectToAdoptForm(animal_id) {
    return function () {
        window.location.href = '../apply/' + animal_id;
    }
}
