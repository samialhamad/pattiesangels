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

        console.log("Image URL for animal", animal.name, ":", animal.image_url); // Add this line to log image URLs
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

        var applyButton = document.createElement("button");
        applyButton.innerHTML = "Apply";
        applyButton.className = 'applyButton';
        applyButton.onclick = function() {
            window.location.href = '../forms/forms.html';
        };

        var adoptFormButton = document.createElement("button");
        adoptFormButton.innerHTML = "Adopt Form";
        adoptFormButton.className = 'adoptFormButton';
        adoptFormButton.onclick = redirectToAdoptForm(animal.id);



        moreInfoDiv.appendChild(applyButton);
        moreInfoDiv.appendChild(adoptFormButton);

        animalDiv.appendChild(moreInfoDiv);


        var viewMoreBtn = document.createElement("button");
        viewMoreBtn.innerHTML = "View More";
        viewMoreBtn.setAttribute("id", "viewMoreBtn" + i);
        viewMoreBtn.className = 'viewMoreBtn';
        viewMoreBtn.onclick = function() { toggleDetails(i); };
        animalDiv.appendChild(viewMoreBtn);

        animalsContainerDiv.appendChild(animalDiv);
    }
}

function toggleDetails(index) {
    var moreInfoDiv = document.getElementById("moreInfo" + index);
    var viewMoreBtn = document.getElementById("viewMoreBtn" + index); 
    if (moreInfoDiv.style.display === "none") {
        moreInfoDiv.style.display = "block";
        viewMoreBtn.innerHTML = "View Less"; 
        viewMoreBtn.classList.remove('viewMoreBtn');
        viewMoreBtn.classList.add('viewLess'); 
    } else {
        moreInfoDiv.style.display = "none";
        viewMoreBtn.innerHTML = "View More"; 
        viewMoreBtn.classList.remove('viewLess');
        viewMoreBtn.classList.add('viewMoreBtn');
    }
    var container = document.getElementById("animalsContainerDiv");
    container.offsetHeight;
}

function redirectToAdoptForm(animal_id) {
    return function () {
        window.location.href = '../apply/' + animal_id;
    }
}
