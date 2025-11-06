const buttons = document.querySelectorAll('button, textarea, input');

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

function credits(){
    alert("Background - Sonic Unleashed, Sonic Team\nSound Effects - Sonic Unleashed, Sonic Team\nDialog box - Sonic Unleashed, Sonic Team\nMusic - Sonic Unleashed, Sonic Team\nNiklas von Hertzen - Html2canvas https://github.com/niklasvh/html2canvas for saving image\nVercel - For deploying tool\nUnleashed Recompiled - For screenshoting dialog box \n\nThis tool is not endorsored or is affliated with Sega, Sonic Team this is a non-profit project")
}