class Animal {
    constructor(animal) {
        this.ageInMonths = null;
        this.breed = null;
        this.description = null;
        this.gender = null;
        this.id = animal.id;
        this.imageURLString = "https://cdn2.thedogapi.com/images/" + animal.reference_image_id + ".jpg";
        this.name = animal.name;
        this.spayed = null;
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

    get spayedString() {
        if (this.spayed) {
            return "Spayed";
        } else {
            return "Not Spayed";
        }
    }
}



