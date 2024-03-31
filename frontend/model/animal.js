class Animal {
    //TODO - Update properties with actual model from server
    constructor(animal) {
        this.ageInMonths = animal.age;
        this.breed = animal.breed;
        this.description = animal.description;
        this.gender = animal.gender;
        this.id = animal.Animal_ID;
        this.imageURLString = animal.ImageURL;
        this.name = animal.name;
        this.isFixed = animal.isFixed;
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
            return "Spayed";
        } else {
            return "Not Spayed";
        }
    }
}



