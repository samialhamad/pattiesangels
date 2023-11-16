class Animal {
    constructor(ageInMonths,
                breed,
                description,
                gender,
                imageURLString,
                name,
                spayed) {
        this.ageInMonths = ageInMonths;
        this.breed = breed;
        this.description = description;
        this.gender = gender;
        this.imageURLString = imageURLString;
        this.name = name;
        this.spayed = spayed;
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



