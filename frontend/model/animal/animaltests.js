//ageString()

testAgeString0Month();
function testAgeString0Month() {
    var animal = new Animal();
    animal.ageInMonths = 0;

    var actual = animal.ageString;
    var expected = "0 month old"
    assert(actual, expected, arguments.callee.name);
}

testAgeString0Months();
function testAgeString0Months() {
    var animal = new Animal();
    animal.ageInMonths = 0;

    var actual = animal.ageString;
    var expected = "0 months old"
    assert(actual, expected, arguments.callee.name);
}

testAgeString1Month();
function testAgeString1Month() {
    var animal = new Animal();
    animal.ageInMonths = 1;

    var actual = animal.ageString;
    var expected = "1 month old"
    assert(actual, expected, arguments.callee.name);
}

testAgeString4Months();
function testAgeString4Months() {
    var animal = new Animal();
    animal.ageInMonths = 4;

    var actual = animal.ageString;
    var expected = "4 months old"
    assert(actual, expected, arguments.callee.name);
}

testAgeString13Months();
function testAgeString13Months() {
    var animal = new Animal();
    animal.ageInMonths = 13;

    var actual = animal.ageString;
    var expected = "1 year old"
    assert(actual, expected, arguments.callee.name);
}

testAgeString1YearOld();
function testAgeString1YearOld() {
    var animal = new Animal();
    animal.ageInMonths = 12;

    var actual = animal.ageString;
    var expected = "1 year old"
    assert(actual, expected, arguments.callee.name);
}

testAgeString12YearsOld();
function testAgeString12YearsOld() {
    var animal = new Animal();
    animal.ageInMonths = 144;

    var actual = animal.ageString;
    var expected = "12 years old"
    assert(actual, expected, arguments.callee.name);
}
