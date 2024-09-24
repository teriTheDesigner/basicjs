export async function addProblem2(problem) {
  const newProblem = problem.value;

  console.log("I AM IN THE ADD PROBLEM FUNCTION", newProblem);

  await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newProblem: newProblem }),
  });

  console.log("I AM IN THE ADD PROBLEM FUNCTION", newProblem);
}

export async function getData() {
  const url = "http://localhost:3000";
  try {
    const response = await fetch(url, {
      method: "GET", // Specify the GET method
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const messages = await response.json();
    console.log("these are all messages", messages);
  } catch (error) {
    console.error(error.message);
  }
}
