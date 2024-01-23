const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => { 
    console.log(textInput.value.length);
console.log(textInput.dataset.length);
    if (textInput.value.length == textInput.dataset.length) {
        console.log("Length OK");
         textInput.classList.replace("invalid", "valid");
        return;
    }

    textInput.classList.add("invalid");  
});