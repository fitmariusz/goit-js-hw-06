const btInput = document.querySelector("button");
const bodyOutput = document.querySelector("body");
const nameColor = document.querySelector("span");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btInput.addEventListener("click", () => {
  const color = getRandomHexColor();
  nameColor.textContent = color;
  bodyOutput.style.background = color;
 });