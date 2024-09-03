import { Cat } from "./Cat.js";
import { Car } from "./Car.js";
import { Person } from "./Person.js";

let firstName = "Christian";
const birthDate = new Date(1979, 1, 1);

//months are zero indexed, the dates are not

console.log(firstName);
console.log(birthDate);

firstName = "John";
console.log(firstName);

let numberOfCats = 2;

console.log(numberOfCats);

function add(a, b, c) {
  return a + b + c;
}

const result = add(1, 2, "cats");

console.log(result);

let cat1 = {
  catsName: "Monty",
  color: "gray",
  gender: "male",

  getNameAndColor: function () {
    return this.catsName + " " + this.color;
  },
};

console.log(cat1);

cat1.species = "Main Coon";
console.log(cat1);

cat1.address = {
  street: "Main 17",
  zip: "3400",
  city: "Hillerød",
};
console.log(cat1.getNameAndColor());

const { catsName, color } = cat1;

console.log("name", catsName, color);

//----------------------------------------------------------------------------------

// Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printet correctly.

function fullName(firstname, lastname) {
  return firstname + " " + lastname;
}

console.log(fullName("John", "Smith"));

//Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.

function calculateRectangle(a, b) {
  return a * b;
}

console.log(calculateRectangle(5, 6));

// Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function

function calculateDistance(speed, time) {
  return speed * time;
}

const distance = calculateDistance(50, 0.5);

console.log("You have traveled", distance, "km");

//Create an object called calculator with the name of the owner (eg. Your name) and modify your code so the 3 previous functions are attached to the object

const calculator = {
  fullName: function (firstname, lastname) {
    return firstname + " " + lastname;
  },
  calculateRectangle: function (a, b) {
    return a * b;
  },
  calculateDistance: function (speed, time) {
    return speed * time;
  },
};

console.log(calculator.fullName("John", "Smith"));
console.log(calculator.calculateRectangle(5, 6));
console.log("You have traveled", calculator.calculateDistance(50, 0.5), "km");

// JavaScript Classes

const person1 = new Person("Christian", "cats");
person1.greet();

function changeName() {
  person1.firstname = "Terezia";
}

changeName();

console.log(person1.firstname);

const firstCat = new Cat("Fluffy", "Orange", "from the street");

console.log(firstCat.bio());

firstCat.changeName("Eva");
console.log(firstCat.catsname);

const firstCar = new Car("Ford", "Focus", "2020");

console.log(firstCar);

console.log(firstCar.start());
console.log(firstCar.stop());

const secondCar = new Car("Ferrari", "Roma", "2024");

console.log(secondCar);

console.log(secondCar.start());
console.log(secondCar.stop());

// Arrays

let students = ["Patrik", "Lavi", "Thomas", 45, [], undefined];
students.push("Kai");
console.log(students);
console.log(students[0]);

let students2 = students.slice(0, 3);
console.log(students2);

students.push({ name: "Sofia", hobby: "Roller skating" });
console.log(students[7].hobby);

// Arrays and Objects

const Student = {
  name: "Sara",
  id: 35,
  grades: [],
};

function addGrade(student, newGrade) {
  student.grades.push(newGrade);
}
addGrade(Student, 5);

addGrade(Student, 7);
console.log(Student);

function updateStudentName(student, newName) {
  student.name = newName;
}

updateStudentName(Student, "Hannah");

console.log(Student);
