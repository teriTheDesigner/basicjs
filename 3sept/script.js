const box = document.getElementById("box");

box.addEventListener("click", function () {
  if (box.style.backgroundColor === "red") {
    box.style.backgroundColor = "aqua";
  } else {
    box.style.backgroundColor = "red";
  }
});

const message = document.getElementById("message");

document.getElementById("button").addEventListener("mouseover", function () {
  message.classList.remove("hidden");
  message.classList.add("visible");
});

document.getElementById("button").addEventListener("mouseout", function () {
  message.classList.remove("visible");
  message.classList.add("hidden");
});

document.getElementById("input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToList();
  }
});

document.getElementById("todoButton").addEventListener("click", addToList);

function addToList() {
  const newinput = document.getElementById("input").value;

  const newli = document.createElement("li");
  newli.textContent = newinput;
  newli.classList.add("li");
  document.getElementById("ul").appendChild(newli);
}
