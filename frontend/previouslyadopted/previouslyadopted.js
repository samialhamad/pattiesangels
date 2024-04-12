// previouslyadopted.js

//function
async function fetchPets() {
    try {
        const response = await fetch('URL_to_your_backend_API_for_pets');
        const pets = await response.json();
        return pets;
    } catch (error) {
        console.error('Error fetching pets:', error);
    }
}

async function renderPets() {
    const animalsContainerDiv = document.getElementById('animalsContainerDiv');
    const pets = await fetchPets();
    
    animalsContainerDiv.innerHTML = '';

    pets.forEach(pet => {
        const petElement = document.createElement('div');
        petElement.classList.add('pet');

        const image = document.createElement('img');
        image.src = pet.image;
        image.alt = pet.species;

        const animalDesc = document.createElement('div');
        animalDesc.classList.add('animalDesc');

        const animalInfo = document.createElement('p');
        animalInfo.textContent = `Name: ${pet.name}, Species: ${pet.species}`;

        const testimonialLink = document.createElement('button');
        testimonialLink.textContent = 'Link to Testimonial';

        animalDesc.appendChild(animalInfo);
        animalDesc.appendChild(testimonialLink);

        petElement.appendChild(image);
        petElement.appendChild(animalDesc);

        animalsContainerDiv.appendChild(petElement);
    });
}


window.onload = renderPets;