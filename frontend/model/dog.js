class Dog {
    constructor(dog) {
        this.ageInMonths = dog.ageInMonths;
        this.breed = dog.breed;
        this.description = dog.description;
        this.gender = dog.gender;
        this.imageURLString = dog.imageURLString;
        this.name = dog.name;
        this.spayed = dog.spayed;
    }

    get ageString() {
        let ageInMonths = this.ageInMonths;
        
        if (ageInMonths < 12) {
            let monthsString = ageInMonths == 1 ? "month" : "months";
            return ageInMonths + " " + monthsString + " old";
        } else {
            let ageInYears = ageInMonths / 12;
            let yearsString = ageInYears == 1 ? "year" : "years";
            return ageInYears + " " + yearsString + " old";
        }
    }

    get spayedString() {
        if (this.spayed) {
            return "Spayed";
        } else {
            return "Not Spayed";
        }
    }
}



