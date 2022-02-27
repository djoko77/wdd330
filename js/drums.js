
const buttons = document.querySelectorAll('.key');
buttons.forEach(button => button.addEventListener('click', event => {
    const dataKey = event.currentTarget.dataset.key;
    console.log(event.currentTarget.dataset.key);
    selectedAudio = "audio[data-key=\""+dataKey+"\"]"
    console.log(selectedAudio)
    const audio = document.body.querySelector(selectedAudio);
    audio.play();
}))