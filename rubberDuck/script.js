const problem = document.getElementById("input");
const button = document.getElementById("send");

button.addEventListener("click", addProblem);

function addProblem() {
  const newProblem = problem.value;
  const item = document.createElement("li");
  item.textContent = newProblem;
  const list = document.createElement("ul");
  list.appendChild(item);

  document.getElementById("main").appendChild(list);
}

const mrDuck = document.getElementById("mrDuck");

mrDuck.addEventListener("mouseover", displayMessage);

mrDuck.addEventListener("mouseout", hideMessage);

function displayMessage() {
  const message = document.createElement("h2");
  message.id = "message";
  message.textContent = "You are useless";
  document.getElementById("main").prepend(message);
}

function hideMessage() {
  document.getElementById("message").classList.add("hide");
}
