class Animal {
    //TODO - Update properties with actual model from server
    constructor(animal) {
        if (!animal) {
            return;
        }

        this.ageInMonths = animal.age;
        this.breed = animal.breed;
        this.description = animal.description;
        this.gender = animal.gender;
        this.id = animal.animal_id;
        this.image_url = animal.image_url;
        this.name = animal.name;
        this.is_fixed = animal.is_fixed;
        this.is_adopted = animal.is_adopted;
    }

    get ageString() {
        let ageInMonths = this.ageInMonths;

        if (ageInMonths < 12) {
            let monthsString = ageInMonths == 1 ? "month" : "months";
            return ageInMonths + " " + monthsString + " old";
        } else {
            let ageInYears = Math.floor(ageInMonths / 12);
            let yearsString = ageInYears == 1 ? "year" : "years";
            return ageInYears + " " + yearsString + " old";
        }
    }


    get fixedString() {
        if (this.fixed) {
            return "Fixed";
        } else {
            return "Not Fixed";
        }
    }
}

module.exports = Animal; // Export Animal class as a constructor


