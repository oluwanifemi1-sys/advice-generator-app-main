const diceEl = document.getElementById("dice");
const textEl = document.getElementById("text");
const numberEl = document.getElementById("number");

diceEl.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      numberEl.textContent = `Advice #${data.slip.id}`;
      textEl.textContent = data.slip.advice;
    });
});
