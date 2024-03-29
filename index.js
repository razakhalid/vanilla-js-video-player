(function() {
    const video = document.querySelector('video');
    const progressRange = document.querySelector('.progress-range');
    const progressBar = document.querySelector('.progress-bar');
    const playBtn = document.getElementById('play-btn');
    const volumeIcon = document.getElementById('volume-icon');
    const currentTime = document.querySelector('.time-elapsed');
    const duration = document.querySelector('.time-duration');
    const fullScreenBtn = document.querySelector('.fullscreen');

    // Play / Pause
    function showPlayIcon() {
        playBtn.classList.replace('fa-pause', 'fa-play');
        playBtn.setAttribute('title', 'Play');
    }
    function togglePlay() {
        if (video.paused) {
            video.play();
            playBtn.classList.replace('fa-play', 'fa-pause');
            playBtn.setAttribute('title', 'Pause');
        } else {
            video.pause();
            showPlayIcon();
        }
    }

    video.addEventListener('ended', showPlayIcon);

    // Progress
    function updateProgress() {
        progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`
    }

    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('canplay', updateProgress);
})();