const audio = new Audio('music/music.ogg');
let clicked = false
audio.volume = 0

addEventListener("click", () => {
  if (clicked == false){
    audio.play();
    clicked = false
  }
})

audio.addEventListener('ended', () => {
  audio.currentTime = 11;
  audio.play();
});

function pausemusic(){
    audio.volume = 0
}

function unpausemusic(){
    audio.volume = 1
}

