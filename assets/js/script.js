const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [
    {
        name: '2 Of Us',
        displayName: '2 Of Us',
        artist: 'Nostalgia Tape',
    },
    {
        name: 'Lost Love',
        displayName: 'Lost Love',
        artist: 'Nostalgia Tape',
    }
    {
        name: 'Neon Raceway',
        displayName: 'Neon Raceway',
        artist: 'Nostalgia Tape',
    },
];


//Check if playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'Pause')
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'Play')
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));