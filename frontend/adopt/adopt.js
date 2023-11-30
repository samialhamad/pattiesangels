var animals = [];

window.onload = function() {
    getAnimals();
}

function addAnimalCards() {

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
            }
        }
    }
    request.send();
}

