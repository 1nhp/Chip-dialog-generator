const dialog_input = document.getElementById("dialog_input");

dialog_input.addEventListener("input", () => {
    playsound("sounds/letter.ogg")    
    const dialog_text = document.getElementById("dialog_text")    
    dialog_text.innerHTML = dialog_input.value
});