let button_play = document.querySelector(".music_button")
let music_list = [
    new Audio("Assets/Music/01. It's Going Down Now.mp3"),
    new Audio("Assets/Music/Atsushi Kitajoh - Full Moon Full Life.mp3"),
    new Audio("Assets/Music/Atsushi Kitajoh - Mass Destruction -Reload.mp3")
]
let curr_audio = 0
music_list.forEach((audio) => audio.volume = .1)
is_playing = false

button_play.addEventListener("click", () => {
    if (is_playing) {
        music_list[curr_audio].pause()
    } else {
        music_list[curr_audio].play()
    }
})
curr_audio === music_list.length-1 ? curr_audio=0 : curr_audio++

