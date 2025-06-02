// Play audio when button is clicked
const playButton = document.querySelector('.play-button');
const audio = new Audio('song.mp3'); // Replace with your song file

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '❚❚ Pause';
    } else {
        audio.pause();
        playButton.textContent = '▶ Play';
    }
});

// Update progress bar as audio plays
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
});