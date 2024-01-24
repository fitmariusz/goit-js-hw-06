const inputFontSize = document.getElementById("font-size-control");
let span = document.getElementById("text");
span.style.fontSize = inputFontSize.value + "px";
inputFontSize.addEventListener("input", () => { 
    span.style.fontSize = inputFontSize.value + "px";
});
