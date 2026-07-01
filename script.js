let seconds = 0;
let minutes= 0;
let hours = 0;

Let timer = null;
let isRunning = false;

// Start Stopwatch //
function startStopwatch() {
  if(isRunning) return;

  isRunning = true;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60){
      seconds = 0;
      minutes++;
    }
    if (minutes === 60){
      minutes = 0;
      hours++;
    }
    updateDisplay();
  },1000);
}


// Stop Stopwatch //
function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

// Reset Stopwatch //
function resetStopwatch() {
  clearInterval(timer);

  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;

  updateDisplay();
}

// Update Display //
function updateDisplay() {
  let h = String(hours).padStart(2,"0");
  let m = String(minutes).padStart(2,"0");
  let s = String(seconds).padStart(2,"0");

document.getElementById("stopwatch").innerText = `${h}:${m}:${s}`;
}
