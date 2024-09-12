const values = ["Peter", 7, "Marianne", true, "Helle", 8];

values.forEach(findType);

function findType(value) {
  console.log(value, "is a", typeof value);
}

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  //   { title: "Pride and Prejudice", author: "Jane Austen" },
  //   { title: "The Catcher in the Rye", author: "J.D. Salinger" },
];

books.forEach(addBook);

function addBook(book) {
  const newBook = document.createElement("p");
  newBook.textContent = book.title + " " + "written by" + " " + book.author;
  const list = document.getElementById("list");

  list.appendChild(newBook);
}

function findLargest(num1, num2, num3, num4) {
  return Math.max(num1, num2, num3, num4);
}

const largestNumber = findLargest(12, 27, 102, 7);
console.log(largestNumber);

//Create a function that takes 3 numbers as 3 parameters. The first parameter is the number to check. The 2nd and 3rd parameter is a range (from and to). If the first parameter is within the range of the range it should return true and false if not.

function checkRange(number, from, to) {
  if (number >= from && number <= to) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange(5, 1, 7));
console.log(checkRange(1, 5, 7));

//Numbers guessing game

const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;
let guess;

document.getElementById("guessButton").addEventListener("click", checkValue);

function checkValue() {
  numberOfGuesses++;
  let guess = Number(document.getElementById("guessInput").value);

  if (guess === randomNumber) {
    alert(
      "Congratulations! The number was" +
        " " +
        randomNumber +
        " " +
        "it took you" +
        " " +
        numberOfGuesses +
        " " +
        "tries to guess it"
    );
  } else if (guess > randomNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Too low! Try again.");
  }
}
