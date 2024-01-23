const inputFontSize = document.getElementById("font-size-control");
let span = document.getElementById("text");
inputFontSize.addEventListener("input", () => { 
    span.style.fontSize = inputFontSize.value + "px";
});
