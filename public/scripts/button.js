const buttons = document.querySelectorAll('button, textarea');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        playsound("sounds/button_hover.ogg");
    });
    button.addEventListener('click', () => {
        playsound("sounds/button_decide.ogg");
    });    
});

const music_btn = document.getElementById("music_btn")
let music_btn_clicked = true
music_btn.addEventListener("click", () => {
    if (music_btn_clicked == true) {
        music_btn.innerHTML = "Turn off music"
        music_btn_clicked = false
        unpausemusic() 
    }
    else if (music_btn_clicked == false){
        music_btn.innerHTML = "Turn on music"
        music_btn_clicked = true
        pausemusic()
    }
});