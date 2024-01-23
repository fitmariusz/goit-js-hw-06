function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createElement = document.querySelector('[data-create]');
const destroyElement = document.querySelector('[data-destroy]');
const divBox = document.getElementById("boxes");
const valueInput = document.querySelector('input');


createElement.addEventListener("click", () => {
  listDiv = [];
  startSize = 30;
  for (let i = 0; i < valueInput.value; i += 1){
    listDiv.push(`<div width=${startSize+10*i} higth=${startSize+10*i}></div>`)
  }
  console.log(listDiv);
});
 

destroyElement.addEventListener("click", () => {
  console.log("Button destroy");
});