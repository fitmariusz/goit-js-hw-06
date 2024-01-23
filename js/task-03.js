const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// ../css/task-03.css
function addCssFile() {
// var file = location.pathname.split( "" ).pop();

  var link = document.createElement("link");
link.rel = "stylesheet";
link.href = `css/task-03.css`;
// link.type = "text/css";

// link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );
}



addCssFile()
const ulImage = document.querySelector("ul");
ulImage.classList.add("ulStyle");
const imagesList = images.map((imageParameter) =>`<li><img  class="imgStyle" src="${imageParameter.url}" alt="${imageParameter.alt}"  width="150px" higth="100px" ></img></li>`)
    .join("");
console.log(imagesList);
  ulImage.insertAdjacentHTML("beforeend", imagesList)
// const liList = document.createElement("li");
// const image = document.createElement("img"); 
// image.src = imgData.url;
// image.alt = imgData.alt;
// liList.append(image);
// ulImage.append(liList);

// const ulListimg = document.querySelector("images");

// ul.forEach((item) => {
//   const liList = document.createElement("li");
//   const image = document.createElement("img");
//   image.src = item.src;
//   image.alt = item.alt;
//   ulList.append(liList);
// });


// // const imagesList = document.querySelector("#images")
// images.forEach(img => {
//   const image = document.createElement("img");
// // image.src = "https://placeimg.com/640/480/nature";
// // image.alt 
//  });

// const image = document.createElement("img");
// console.log(images);
// // image.src = "https://placeimg.com/640/480/nature";
// // image.alt = "Nature";
// // console.log(image);// <img src="https://placeimg.com/640/480/nature" alt="Nature" />
// // });
// // ingredients.forEach((item) => {
// //   const liList = document.createElement("li");
// //   liList.textContent = item;
// //   liList.classList.add("item");
// //   ulList.append(liList);
// // });
