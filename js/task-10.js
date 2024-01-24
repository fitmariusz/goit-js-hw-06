function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createElement = document.querySelector('[data-create]');
const destroyElement = document.querySelector('[data-destroy]');
const divBox = document.getElementById("boxes");
const valueInput = document.querySelector('input');
valueInput.value = 1;


function createBox()
{
  const startSize = 30;
  const stepSize = 10;
  for (let i = 0; i < valueInput.value; i++) {
    const box = document.createElement("div");
    const randomColor = getRandomHexColor();

    box.style.backgroundColor = randomColor;
    box.setAttribute('class', `divBox`);
    box.style.height = `${startSize + startSize * i}px`;
    box.style.width = `${startSize + stepSize * i}px`;
    divBox.append(box);
  }
}

function destroyBox() {
  const divs = document.querySelectorAll(".divBox");
  divs.forEach(div => { 
    div.remove();
  });
}

createElement.addEventListener("click", () => {
  destroyBox();
  createBox();

});
 
destroyElement.addEventListener("click", () => {
  destroyBox();
});