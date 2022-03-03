let count = 0;

window.addEventListener('keydown', function(e) {
    let code = `audio[data-key="${e.keyCode}"]`;

    const audio = document.querySelector(code);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    count += 10;
    key.style.marginTop = count + "px";

    if (count == 100) {
        count = 0;
        key.style.marginTop = count + "px";
    }

    setTimeout(() => {
        key.classList.remove("playing");
    }, 1000);

})

