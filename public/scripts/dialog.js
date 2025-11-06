const dialog_input = document.getElementById("dialog_input");
const dialog_nameinput = document.getElementById("dialog_nameinput");

dialog_input.addEventListener("input", () => {
    playsound("sounds/letter.ogg")    
    const dialog_text = document.getElementById("dialog_text")         
    dialog_text.innerHTML = dialog_input.value 
});

dialog_nameinput.addEventListener("input", () => {
    playsound("sounds/letter.ogg")    
    const dialog_name = document.getElementById("dialog_charactertext")    
    const dialog_nameinput = document.getElementById("dialog_nameinput")               
    dialog_text.innerHTML = dialog_input.value
    dialog_name.innerHTML = dialog_nameinput.value    
});