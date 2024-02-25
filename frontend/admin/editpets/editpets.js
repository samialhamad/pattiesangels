const buttons = document.querySelectorAll('.add-picture');
var pets = [];

var petToEdit = [];

// text feilds to edit pets 
// var newName = document.getElementById("newName");
// var newBreed = document.getElementById("newBreed");




window.onload = function() {
  getPets();
}

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

function getPets() {
  var url = 'http://localhost:3000/api/animals';

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


// pulls pets from DB add shows them 
function addPets() {
  var petContainer = document.getElementById("PetsContainer");

  var submitPet = document.getElementById("submit");

  var nameField = document.getElementById("newName");
  var breedField = document.getElementById("newBreed");


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
    fixed.innerHTML = "Fixed: " + pet.fixed;
    petDiv.append(fixed);

    var adopted = document.createElement("h2");
    adopted.innerHTML = "Adopted: " + pet.adopted;
    petDiv.append(adopted);


    // Button function edit


    var editPet = document.createElement("button");
    editPet.innerHTML = "Edit Pet";

    var deletePet = document.createElement("button");
    deletePet.innerHTML = "Delete Pet"; 


    petDiv.append(deletePet,  " ", editPet);


    editPet.addEventListener('click', (function(animal_id, petname, petbreed){
      return function() {
        console.log(animal_id)
        console.log(petname);
        console.log(petbreed);
        //console.log(nameField.value);

        nameField.value = petname;
        breedField.value = petbreed;

        petToEdit.push(petname);

        submitPet.addEventListener('click', function(){
          console.log('hi');
          
        })

      };
    })(pet.Animal_ID, pet.name, pet.breed));

    


    var space = document.createElement("br");
    space.innerHTML = " ";
    petDiv.append(space);
    
    var space = document.createElement("br");
    space.innerHTML = " ";
    petDiv.append(space);

    petContainer.append(petDiv);



    
  }


}









