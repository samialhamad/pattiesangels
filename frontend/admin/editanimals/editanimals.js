const buttons = document.querySelectorAll('.add-picture');
var animals = [];

var animalToEdit = [];

// text fields to edit animals 
// var newName = document.getElementById("newName");
// var newBreed = document.getElementById("newBreed");

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
            console.log("GetAnimal Response: " + request.response);

            var response = JSON.parse(request.response);
            
            animals = []; // Clear the existing animals array
            for (var i = 0; i < response.length; i++) {
                var animal = {
                    animal_id: response[i].animal_id,
                    name: response[i].name,
                    breed: response[i].breed,
                    gender: response[i].gender,
                    age: response[i].age,
                    description: response[i].description,
                    is_fixed: response[i].is_fixed,
                    is_adopted: response[i].is_adopted
                    
                };
                animals.push(animal);
            }
            addAnimals();
        }
        else {console.error('Error fetching animal:', request.statusText);
        }
     }
  }
  request.send();
}

// update the animals in the backend 
function updateAnimal(updatedAnimal){
  var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/update';

  // Testing url
  //var url = 'http://localhost:3000/api/animals/update';

  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status ==  200 || request.status == 201) {
        console.log("Animal updated successfully");

        // refresh the window after updating the animal
        window.location.reload();

        animalToEdit = [];

        getAnimals();

      }
      else{
        console.error("Error updating animal:", request.statusText);

      }
    }
  }
  request.send(JSON.stringify(updatedAnimal));
}

// pulls animals from DB add shows them 
function addAnimals() {
  var animalContainer = document.getElementById("animalsContainer");

  // Clear existing animal elements
  while (animalContainer.firstChild) {
    animalContainer.removeChild(animalContainer.firstChild);
  }
  
  var submitAnimal = document.getElementById("submit");
  var nameField = document.getElementById("newName");
  var breedField = document.getElementById("newBreed");
  var genderField = document.getElementById("newGender");
  var ageField = document.getElementById("newAge");
  var fixedField = document.getElementById("newFixed");
  var descriptionField = document.getElementById("newDescription");
  var adoptField = document.getElementById("newAdopt");

  for (var i = 0; i < animals.length; i++){
    var animal = animals[i];

    var animalDiv = document.createElement("div");
    animalDiv.setAttribute("class", "animalDiv");

    var name = document.createElement("h2");
    name.innerHTML = "Name: "+ animal.name;
    animalDiv.append(name);

    var breed = document.createElement("h2");
    breed.innerHTML = "Breed: " + animal.breed;
    animalDiv.append(breed);

    var gender = document.createElement("h2");
    gender.innerHTML = "Gender: " + animal.gender;
    animalDiv.append(gender);

    var age = document.createElement("h2");
    age.innerHTML = "Age: " + animal.age;
    animalDiv.append(age);

    var description = document.createElement("h2");
    description.innerHTML = "Description: " + animal.description;
    animalDiv.append(description);

    var fixed = document.createElement("h2");
    fixed.innerHTML = "Fixed: " + animal.is_fixed;
    animalDiv.append(fixed);

    var adopted = document.createElement("h2");
    adopted.innerHTML = "Adopted: " + animal.is_adopted;
    animalDiv.append(adopted);


    // Button function edit
    var editAnimal = document.createElement("button");
    editAnimal.innerHTML = "Edit Animal";

    

    var deleteAnimal = document.createElement("button");
    deleteAnimal.innerHTML = "Delete Animal"; 

    animalDiv.append(deleteAnimal,  " ", editAnimal);

    editAnimal.addEventListener('click', (function(animal_id, animalname, animalbreed, animalgender, animalage, animaldescription, animalfixed, animaladopt){
      return function() {
        console.log(animal_id)
        console.log(animalname);
        console.log(animalbreed);
        console.log(animalgender);
        console.log(animalage);
        //console.log(nameField.value);

        // grab new values
        nameField.value = animalname;
        breedField.value = animalbreed;
        genderField.value = animalgender;
        ageField.value = animalage;
        descriptionField.value = animaldescription;
        fixedField.value = animalfixed;
        adoptField.value = animaladopt;

        animalToEdit.push(animalname);

        submitAnimal.addEventListener('click', function(){
          var animalIndex = animals.findIndex(animal => animal.name === animalToEdit[0]);

          // updates animals values to new values 
          animals[animalIndex].name = nameField.value;
          animals[animalIndex].breed = breedField.value;
          animals[animalIndex].gender = genderField.value;
          animals[animalIndex].age = ageField.value;
          animals[animalIndex].description = descriptionField.value;
          animals[animalIndex].is_fixed = fixedField.value;
          animals[animalIndex].is_adopted = adoptField.value;
          
          // send new values to updateanimal function 
          updateAnimal(animals[animalIndex]);
        })
        

      };
    })(animal.animal_id, animal.name, animal.breed, animal.gender, animal.age, animal.description, animal.is_fixed, animal.is_adopted));

    var space = document.createElement("br");
    space.innerHTML = " ";
    animalDiv.append(space);
    
    var space = document.createElement("br");
    space.innerHTML = " ";
    animalDiv.append(space);

    animalContainer.append(animalDiv);

    // Add event listener to delete button
    deleteAnimal.addEventListener('click', deleteAnimalHandler.bind(null, animal.animal_id, animalDiv));
  }
}

// Function to handle delete animal button
function deleteAnimalHandler(animalID, animalDiv) {
  var confirmed = confirm("Are you sure you want to delete this animal?");
  if (confirmed) {
    // Delete the animal from the table and remove its HTML element
    deleteAnimalById(animalID, animalDiv);
  }
}

// Function to delete animal by ID
function deleteAnimalById(animalID, animalDiv) {
  var url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/delete';
  
  // Testing url
  //var url = 'http://localhost:3000/api/animals/delete';

  var request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log('Animal deleted successfully');
        // Remove the animal's HTML element from the page
        animalDiv.remove();
        // Update the list of animals after deletion
        getAnimals();
      } else {
        console.error('Error deleting animal:', request.statusText);
      }
    }
  };
  // Send the animal ID to delete
  request.send(JSON.stringify({ animalID: animalID }));
}