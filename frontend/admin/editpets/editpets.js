const buttons = document.querySelectorAll('.add-picture');
var pets = [];

var petToEdit = [];

// text fields to edit pets 
// var newName = document.getElementById("newName");
// var newBreed = document.getElementById("newBreed");

window.onload = function() {
  getPets();
}

const fileInput = document.getElementById('fileInput');
const previewImg = document.getElementById('previewImg');

fileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    previewImg.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
/*
buttons.forEach(button => {
  button.addEventListener('click', handlePictureUpload);
});


function handlePictureUpload(event) {
  const index = event.target.dataset.index;
  const imageElement = document.querySelector(`.picture[data-index="${index}"]`);

 
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageElement.src = reader.result;
      imageElement.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}
*/

function getPets() {
  var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals';

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status = 200) {
            console.log("GetPet Response: " + request.response);

            var response = JSON.parse(request.response);
            
            animals = []; // Clear the existing animals array
            for (var i = 0; i < response.length; i++) {
                var pet = {
                    Animal_ID: response[i].Animal_ID,
                    name: response[i].name,
                    breed: response[i].breed,
                    gender: response[i].gender,
                    age: response[i].age,
                    description: response[i].description,
                    isFixed: response[i].isFixed,
                    isAdopted: response[i].isAdopted
                    
                };
                pets.push(pet);
            }
            addPets();
        }
        else {console.error('Error fetching pet:', request.statusText);
        }
     }
  }
  request.send();
}

// update the pets in the backend 
function updatePet(updatedPet){
  var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/update';

  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status ==  200 || request.status == 201) {
        console.log("Pet updated successfully");

        // refresh the window after updating the pet
        window.location.reload();

        petToEdit = [];

        getPets();

      }
      else{
        console.error("Error updating pet:", request.statusText);

      }
    }
  }
  request.send(JSON.stringify(updatedPet));
}

// pulls pets from DB add shows them 
function addPets() {
  var petContainer = document.getElementById("PetsContainer");

  var submitPet = document.getElementById("submit");

  var nameField = document.getElementById("newName");
  var breedField = document.getElementById("newBreed");
  var genderField = document.getElementById("newGender");
  var ageField = document.getElementById("newAge");
  var fixedField = document.getElementById("newFixed");
  var descriptionField = document.getElementById("newDescription");
  var adoptField = document.getElementById("newAdopt");

  for (var i = 0; i < pets.length; i++){
    var pet = pets[i];

    var petDiv = document.createElement("div");
    petDiv.setAttribute("class", "petDiv");

    var name = document.createElement("h2");
    name.innerHTML = "Name: "+ pet.name;
    petDiv.append(name);

    var breed = document.createElement("h2");
    breed.innerHTML = "Breed: " + pet.breed;
    petDiv.append(breed);

    var gender = document.createElement("h2");
    gender.innerHTML = "Gender: " + pet.gender;
    petDiv.append(gender);

    var age = document.createElement("h2");
    age.innerHTML = "Age: " + pet.age;
    petDiv.append(age);

    var description = document.createElement("h2");
    description.innerHTML = "Description: " + pet.description;
    petDiv.append(description);

    var fixed = document.createElement("h2");
    fixed.innerHTML = "Fixed: " + pet.isFixed;
    petDiv.append(fixed);

    var adopted = document.createElement("h2");
    adopted.innerHTML = "Adopted: " + pet.isAdopted;
    petDiv.append(adopted);


    // Button function edit
    var editPet = document.createElement("button");
    editPet.innerHTML = "Edit Pet";

    var deletePet = document.createElement("button");
    deletePet.innerHTML = "Delete Pet"; 

    petDiv.append(deletePet,  " ", editPet);

    editPet.addEventListener('click', (function(animal_id, petname, petbreed, petgender, petage, petdescription, petfixed, petadopt){
      return function() {
        console.log(animal_id)
        console.log(petname);
        console.log(petbreed);
        console.log(petgender);
        console.log(petage);
        //console.log(nameField.value);

        // grab new values
        nameField.value = petname;
        breedField.value = petbreed;
        genderField.value = petgender;
        ageField.value = petage;
        descriptionField.value = petdescription;
        fixedField.value = petfixed;
        adoptField.value = petadopt;

        petToEdit.push(petname);

        submitPet.addEventListener('click', function(){
          var petIndex = pets.findIndex(pet => pet.name === petToEdit[0]);

          // updates pets values to new values 
          pets[petIndex].name = nameField.value;
          pets[petIndex].breed = breedField.value;
          pets[petIndex].gender = genderField.value;
          pets[petIndex].age = ageField.value;
          pets[petIndex].description = descriptionField.value;
          pets[petIndex].isFixed = fixedField.value;
          pets[petIndex].isAdopted = adoptField.value;
          
          // send new values to updatePet function 
          updatePet(pets[petIndex]);
        })

      };
    })(pet.Animal_ID, pet.name, pet.breed, pet.gender, pet.age, pet.description, pet.isFixed, pet.isAdopted));

    var space = document.createElement("br");
    space.innerHTML = " ";
    petDiv.append(space);
    
    var space = document.createElement("br");
    space.innerHTML = " ";
    petDiv.append(space);

    petContainer.append(petDiv);

    // Add event listener to delete button
    deletePet.addEventListener('click', deletePetHandler.bind(null, pet.Animal_ID, petDiv));
  }
}

// Function to handle delete pet button
function deletePetHandler(animalID, petDiv) {
  var confirmed = confirm("Are you sure you want to delete this pet?");
  if (confirmed) {
    // Delete the pet from the table and remove its HTML element
    deletePetById(animalID, petDiv);
  }
}

// Function to delete pet by ID
function deletePetById(animalID, petDiv) {
  var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/delete';
  var request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log('Pet deleted successfully');
        // Remove the pet's HTML element from the page
        petDiv.remove();
        // Update the list of pets after deletion
        getPets();
      } else {
        console.error('Error deleting pet:', request.statusText);
      }
    }
  };
  // Send the animal ID to delete
  request.send(JSON.stringify({ animalID: animalID }));
}