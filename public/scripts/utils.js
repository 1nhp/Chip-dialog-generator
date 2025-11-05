function playsound(audio) {
  const snd = new Audio(audio);

  snd.play();

  snd.addEventListener('ended', () => {
    snd.pause();
    snd.removeAttribute('src');
    snd.load();
  });
}

// Select the element you want to capture
function saveimage(){
    const elementToCapture = document.getElementById("dialog_box");

    html2canvas(elementToCapture).then(function(canvas) {
        // Append the canvas to the body or another element

        // You can also convert the canvas to an image data URL
        const imageDataURL = canvas.toDataURL("image/png");

        // Create a link to download the image
        const link = document.createElement("a");
        link.download = "chip_dialog.png";
        link.href = imageDataURL;
        link.click();
    });
}