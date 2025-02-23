function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

function createBoxes(amount) {
  boxes.innerHTML = "";
  let size = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    fragment.appendChild(box);
    size += 10;
  }

  boxes.appendChild(fragment);
}

create.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
  input.value = "";
});

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});

// createButton.addEventListener("click", () => {
//   if (numberInput.value >= 1 && numberInput.value <= 100) {
//     createBoxes(numberInput.value);
//   }
//   numberInput.value = "";
// });

// deleteButton.addEventListener("click", () => {
//   boxesContainer.innerHTML = "";
// });
