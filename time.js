const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;

startBtn.addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(setTime, 1000);
    startBtn.disabled = true;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = "00:00:00";
  startBtn.disabled = false;
});

function setTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  timer.textContent = `${h}:${m}:${s}`;
}
