const baseURL = "https://<your-deployed-json-server>/questions";

document.getElementById("quiz-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const questionData = {
    title: document.getElementById("title").value,
    optiona: document.getElementById("optiona").value,
    optionb: document.getElementById("optionb").value,
    optionc: document.getElementById("optionc").value,
    optiond: document.getElementById("optiond").value,
    correctoption: document.getElementById("correctoption").value,
    reviewStatus: false,
  };

  await fetch(baseURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(questionData),
  });
  alert("Question Created");
  fetchQuestions();
});

async function fetchQuestions() {
  const res = await fetch(baseURL);
  const data = await res.json();
  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  data.forEach((q) => {
    const card = document.createElement("div");
   card.className= card${q.reviewStatus ? "reviewd" : ""};
   card.innerHTML=`
      <h3>${q.title}</h3>
      <p>A: ${q.optiona} | B: ${q.optionb} | C: ${q.optionc} | D: ${q.optiond}</p>
      <button onclick="reviewQuestion(${q.id})">Review Question</button>
      <button onclick="deleteQuestion(${q.id})">Delete Question</button>
    `;
    container.appendChild(card);
  });
}

async function reviewQuestion(id) {
  if (confirm("Are you sure to review the question?")) {
    await fetch( ${baseURL}/ ${id}, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviewStatus: true }),
    });
    fetchQuestions();
  }
}

async function deleteQuestion(id) {
  if (confirm("Are you sure to delete?")) {
    await fetch(${baseURL}/${id}, { method: "DELETE" });
    fetchQuestions();
  }
}

fetchQuestions();