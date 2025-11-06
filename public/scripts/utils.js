function playsound(audio) {
  const snd = new Audio(audio);

  snd.play();

  snd.addEventListener('ended', () => {
    snd.pause();
    snd.removeAttribute('src');
    snd.load();
  });
}

function saveimage() {
    playsound("sounds/screenshot.ogg")
    const elementToCapture = document.getElementById("dialog_box");
    
    // Temporarily fix font size
    const characterText = document.getElementById("dialog_charactertext");  
    const originalpos = characterText.style.top;
    characterText.style.top = "-5px";
    html2canvas(elementToCapture, {
        backgroundColor: null,
        scale: 2 // optional, improves quality
    }).then(function(canvas) {
        const imageDataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "chip_dialog.png";
        link.href = imageDataURL;
        link.click();

        // Restore original font size
        characterText.style.top = originalpos;     
    });
}
