function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorSpec = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  const generatedColor = getRandomHexColor();
  colorSpec.textContent = generatedColor;
  body.style.backgroundColor = generatedColor;
});
