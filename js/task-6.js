function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

let lastValue = null; // Змінна для збереження останнього введеного значення

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    let colorama = [];

    for (let i = 0; i < amount; i++) {
      colorama.push(getRandomHexColor());
    }

    const markup = colorama
      .map(
        (color, index) =>
          `<div style="background-color: ${color}; height: ${
            30 + index * 10 + "px"
          }; width: ${30 + index * 10 + "px"}" class="list-item"></div>`
      )
      .join("");

    boxes.innerHTML = markup;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => {
  let amount = Number(input.value.trim());

  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    lastValue = amount;
    destroyBoxes();
    createBoxes(amount);
  } else if (lastValue !== null) {
    destroyBoxes();
    createBoxes(lastValue);
  }

  input.value = "";
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});
