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
  ulImage.insertAdjacentHTML("beforeend", imagesList)

