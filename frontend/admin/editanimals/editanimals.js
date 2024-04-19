document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables and fetch animals
  const animalContainer = document.getElementById("animalsContainer");
  const submitButton = document.getElementById("submit");
  let currentAnimalId = null; // Tracks the current animal being edited


  function getAnimals() {
    //const url = 'http://localhost:3000/api/animals'; // Testing url
    const url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals';  
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
              const response = JSON.parse(request.response);
              displayAnimals(response);
          } else if (request.readyState === XMLHttpRequest.DONE) {
              console.error('Error fetching animals:', request.statusText);
          }
      };
      request.send();
  }

  function displayAnimals(animals) {
      animalContainer.innerHTML = '';  // Clear previous animal entries
      animals.forEach(animal => createAnimalDiv(animal));
  }

  function createAnimalDiv(animal) {
      const animalDiv = document.createElement("div");
      animalDiv.className = "animalDiv";
      displayAnimalDetails(animal, animalDiv);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit Animal";
      editButton.addEventListener('click', function() {
          populateFormWithAnimalData(animal);
          currentAnimalId = animal.animal_id;
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete Animal";
      deleteButton.addEventListener('click', function() {
          deleteAnimal(animal.animal_id, animalDiv);
      });

      animalDiv.appendChild(editButton);
      animalDiv.appendChild(deleteButton);
      animalContainer.appendChild(animalDiv);
  }

  function displayAnimalDetails(animal, container) {
    const details = {
        'name': 'Name',
        'breed': 'Breed',
        'gender': 'Gender',
        'age': 'Age',
        'is_fixed': 'Fixed',
        'is_adopted' : 'Adopted',
        'description': 'Description'
    };

    // If an image URL exists, create and append an image element
    if (animal.image_url) {
        const imageElement = document.createElement("img");
        imageElement.src = animal.image_url;
        imageElement.alt = `Image of ${animal.name}`;
        imageElement.style.width = '150px'; // Set the width or any style you like
        imageElement.style.height = 'auto'; // Maintain aspect ratio
        container.appendChild(imageElement);
    }

    // Display each property in the details object
    for (const [key, label] of Object.entries(details)) {
        const detailElement = document.createElement("h2");
        let value = (key === 'is_fixed' || key === 'is_adopted') ? (animal[key] ? "Yes" : "No") : animal[key];

        if (key === 'age') {
            value = getAgeString(value);
        }

        detailElement.textContent = `${label}: ${value}`;
        container.appendChild(detailElement);
    }
}

function getAgeString(ageInMonths) {
    if (ageInMonths < 12) {
        let monthsString = ageInMonths == 1 ? "month" : "months";
        return ageInMonths + " " + monthsString + " old";
    } else {
        let ageInYears = Math.floor(ageInMonths / 12);
        let yearsString = ageInYears == 1 ? "year" : "years";
        return ageInYears + " " + yearsString + " old";
    }
}

  function populateFormWithAnimalData(animal) {
      document.getElementById("newName").value = animal.name;
      document.getElementById("newBreed").value = animal.breed;
      document.getElementById("newGender").value = animal.gender;
      document.getElementById("newAge").value = animal.age;
      document.getElementById("newFixed").value = animal.is_fixed ? "Yes" : "No";
      document.getElementById("newAdopt").value = animal.is_adopted ? "Yes" : "No";
      document.getElementById("newDescription").value = animal.description;
      document.getElementById("uploadPreview").src = animal.image_url;
  }

  function deleteAnimal(animalID, animalDiv) {
      if (confirm("Are you sure you want to delete this animal?")) {
        const url = 'https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/delete';  
        //const url = 'http://localhost:3000/api/animals/delete'; // Testing url
          const request = new XMLHttpRequest();
          request.open('POST', url);
          request.setRequestHeader('Content-Type', 'application/json');
          request.onreadystatechange = function() {
              if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                  console.log('Animal deleted successfully');
                  animalDiv.remove();
                  getAnimals(); // Refresh the list
              } else if (request.readyState === XMLHttpRequest.DONE) {
                  console.error('Error deleting animal:', request.statusText);
              }
          };
          request.send(JSON.stringify({ animalID: animalID }));
      }
  }

  submitButton.addEventListener('click', function() {
      if (currentAnimalId !== null) {
          updateAnimal(currentAnimalId);
      }
  });

  function updateAnimal(animalId) {
    //const url = `http://localhost:3000/api/animals/update/${animalId}`; // Testing url
    const url = `https://patties-angels-8cd06741a91a.herokuapp.com/api/animals/update/${animalId}`;  
      const formData = new FormData(document.getElementById('editForm'));
      const request = new XMLHttpRequest();
      request.open("PATCH", url);
      request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200 || request.status === 201) {
                  console.log("Animal updated successfully");
                  window.location.reload();
              } else {
                  console.error("Error updating animal:", request.statusText);
              }
          }
      };
      request.send(formData);
  }

  getAnimals(); // Fetch animals at initialization
});
