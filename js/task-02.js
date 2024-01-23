const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ulList=document.querySelector("#ingredients")

const arrayLi = ingredients.map((item) => {
  const liList = document.createElement("li");
  liList.textContent = item;
  liList.classList.add("item");
  return liList;
 });

ulList.append(...arrayLi);