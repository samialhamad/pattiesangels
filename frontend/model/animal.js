class Animal {
    //TODO - Update properties with actual model from server
    constructor(animal) {
        this.age = animal.age;
        this.breed = animal.breed;
        this.description = animal.description;
        this.gender = animal.gender;
        this.id = animal.animal_id;
        this.image_url = animal.image_url;
        this.name = animal.name;
        this.is_fixed = animal.is_fixed;
    }

    get fixedString() {
        if (this.fixed) {
            return "Fixed";
        } else {
            return "Not Fixed";
        }
    }
}



