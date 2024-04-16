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

    

    var animal = animals[index]; 

    var newWin = window.open("", "_blank", "width=850, height=850");
    var newWinDoc = newWin.document;


    newWinDoc.body.style.backgroundColor = "#ccccff";
    newWinDoc.body.style.textAlign = "center";
    newWinDoc.body.style.color = "black";
    newWinDoc.body.style.fontFamily = "'RMU Gloria Regular', sans-serif";
    newWinDoc.body.style.backgroundRepeat = "no-repeat";
    newWinDoc.body.style.backgroundSize = "cover";
    newWinDoc.body.style.backgroundPosition = "center";
    newWinDoc.body.style.backgroundAttachment = "fixed";

    var style = newWinDoc.createElement("style");
    style.innerHTML = `
        button, .applyButton, .viewMoreBtn {
            padding: 15px 30px; 
            font-size: 1.2em; 
            color: white; 
            background-color: #8ca0f5; 
            border: 2px solid transparent; 
            border-radius: 8px; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); 
            cursor: pointer; 
            transition: all 0.3s ease;
            margin-top: 10px;
            margin-right: 10px;
        }

        button:hover, .applyButton:hover, .viewMoreBtn:hover {
            background-color: #8ca0f5; 
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
            border-color: #ffffff; 
        }

        .applyButton {
            background-color: #8ca0f5; 
        }

        .applyButton:hover {
            background-color: #d66a2c; 
        }

        .adoptFormButton {
            background-color: #4CAF50;
        }

        .adoptFormButton:hover {
            background-color: #45A049;
        }
    `;
    newWinDoc.head.appendChild(style);

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

    // var applyButton = newWinDoc.createElement("button");
    // applyButton.innerHTML = "Apply";
    // applyButton.onclick = function() {
    //     window.location.href = '../forms/forms.html';
    // };
    // newWinDoc.body.appendChild(applyButton);

    var adoptFormButton = newWinDoc.createElement("button");
    adoptFormButton.innerHTML = "Adoption Form";
    //adoptFormButton.onclick = redirectToAdoptForm(animal.id);
    adoptFormButton.onclick = function() {
        newWinDoc.location.href = '../apply/' + animal.id;
    }
    newWinDoc.body.appendChild(adoptFormButton);



    // if (moreInfoDiv.style.display === "none") {
    //     moreInfoDiv.style.display = "block";
    //     viewMoreBtn.innerHTML = "View Less"; 
    //     viewMoreBtn.classList.remove('viewMoreBtn');
    //     viewMoreBtn.classList.add('viewLess'); 
    // } else {
    //     moreInfoDiv.style.display = "none";
    //     viewMoreBtn.innerHTML = "View More"; 
    //     viewMoreBtn.classList.remove('viewLess');
    //     viewMoreBtn.classList.add('viewMoreBtn');
    // }
    var container = document.getElementById("animalsContainerDiv");
    container.offsetHeight;
}

function redirectToAdoptForm(animal_id) {
    return function () {
        window.location.href = '../apply/' + animal_id;
    }
}
