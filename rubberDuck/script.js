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

  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newProblem: newProblem }),
  });
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

async function getData() {
  const url = "http://localhost:3000";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const messages = await response.json();
    console.log("these are all messages", messages);
  } catch (error) {
    console.error(error.message);
  }
}

window.addEventListener("load", getData());
