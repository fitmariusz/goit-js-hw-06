const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => { 
    console.log(textInput.value.length);
console.log(textInput.dataset.length);
    if (textInput.value.length == textInput.dataset.length) {
         textInput.classList.replace("invalid", "valid");
        return;
    }
    textInput.classList.add("invalid");  
});