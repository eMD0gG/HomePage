const playlist = [new Audio('Assets/Music/MassDestructionReload.mp3'),
    new Audio('Assets/Music/ItsGoingDownNow.mp3'),
    new Audio('Assets/Music/FullMoonFullLife.mp3')];
playlist[0].volume = 0.1;
playlist[2].volume = 0.1;
let currentTrack = 0;
const audio = playlist[currentTrack];
const playPauseButton = document.querySelector(".pause_button");
let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (!isPlaying) {
        playPauseButton.style.backgroundImage = "url(Assets/Sprites/pause.svg)";
        audio.play();
        audio.addEventListener('ended', () => {
            currentTrack++;
            if (currentTrack === playlist.length) {
                currentTrack = 0;
            }
            audio.src = playlist[currentTrack];
            audio.play();
        });
        isPlaying = true;
    } else {
        playPauseButton.style.backgroundImage = "url(Assets/Sprites/play.svg)";
        audio.pause();
        isPlaying = false;
    }
});
