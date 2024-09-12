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
