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
    const elementToCapture = document.getElementById("dialog_box");

    html2canvas(elementToCapture, {
        backgroundColor: null, // ✅ Keeps transparency
    }).then(function(canvas) {
        const imageDataURL = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.download = "chip_dialog.png";
        link.href = imageDataURL;
        link.click();
    });
}