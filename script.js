const counter = document.getElementById("countLabel");

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const clickSound = document.getElementById("clickSound");
const resetSound = document.getElementById("resetSound");

const soundToggle = document.getElementById("soundToggle");

let soundOn = true;

// Load saved count
let count = Number(localStorage.getItem("count")) || 0;

counter.innerText = count;

// Update counter
function updateCounter() {
  counter.innerText = count;
  localStorage.setItem("count", count);
}

// Play sound
function playSound(sound) {
  if (soundOn) {
    sound.pause();
    sound.currentTime = 0;

    sound.play().catch((error) => {
      console.log("Sound blocked:", error);
    });
  }
}

// Increase
increaseBtn.onclick = () => {
  count++;

  updateCounter();

  playSound(clickSound);
};

// Decrease
decreaseBtn.onclick = () => {
  count--;

  updateCounter();

  playSound(clickSound);
};

// Reset
resetBtn.onclick = () => {
  count = 0;

  updateCounter();

  playSound(resetSound);
};

// Sound toggle
soundToggle.onclick = () => {
  soundOn = !soundOn;

  if (soundOn) {
    soundToggle.classList.remove("bi-volume-mute");
    soundToggle.classList.add("bi-volume-up");
  } else {
    soundToggle.classList.remove("bi-volume-up");
    soundToggle.classList.add("bi-volume-mute");
  }
};
