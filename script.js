const targetDate = new Date('April 28, 2023 21:00:00 EST');
const countdownElement = document.getElementById('countdown');
const imageElements = document.querySelectorAll('.image');

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();
  
  // calculate time remaining
  let daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  // format the time remaining as a string
  let countdownString = `${daysRemaining} Days ${hoursRemaining} Hours ${minutesRemaining} Minutes ${secondsRemaining} Seconds`;
  
  // update the countdown element with the time remaining
  countdownElement.textContent = countdownString;
}

setInterval(updateCountdown, 1000);

const nightModeButton = document.getElementById('night-mode-button');

function toggleNightMode() {
  // Toggle body class for night mode
  document.body.classList.toggle('night-mode');

  // Toggle night mode button text
  const nightModeButtonIcon = document.querySelector('#night-mode-button .material-symbols-outlined');
  const currentMode = nightModeButtonIcon.textContent.trim();
  const newMode = currentMode === 'light_mode' ? 'dark_mode' : 'light_mode';
  nightModeButtonIcon.textContent = newMode;

  // Toggle images
  imageElements.forEach(image => {
    const currentImageUrl = image.style.backgroundImage;
    const isDay = currentImageUrl.includes('day');
    const newImageUrl = isDay ? currentImageUrl.replace('day', 'night') : currentImageUrl.replace('night', 'day');
    image.style.backgroundImage = newImageUrl;
  });
}

nightModeButton.addEventListener('click', toggleNightMode);