const playlist = [new Audio('Assets/Music/01. It\'s Going Down Now.mp3'),
    new Audio('Assets/Music/Atsushi Kitajoh - Full Moon Full Life.mp3'),
    new Audio('Assets/Music/Atsushi Kitajoh - Mass Destruction -Reload.mp3')];
playlist[1].volume = 0.2;
playlist[2].volume = 0.2;
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
