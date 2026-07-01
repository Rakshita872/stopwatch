let seconds = 0;
let minutes= 0;
let hours = 0;

let timer = null;
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


// Add Timer Variable //
let countdown = null;
let totalTime = 0;

function startTimer() {
  let min = parseInt(document.getElementById('minutes').value) || 0;
  let sec = parseInt(document.getElementById('seconds').value) || 0;

    totalTime = min * 60 + sec;
    if(totalTime <= 0) {
      alert("Please enter valid time");
      return;
    }
    clearInterval(countdown);

    countdown = setInterval(() => {
      if (totalTime <= 0){
        clearInterval(countdown);

  document.getElementById('timer').innerText ="00.00";
        alert("⏰ Time's Up!");
        return;
      }

      totalTime--;

      let displayMin = Math.floor(totalTime/60);
      let displaySec = totalTime % 60;

  document.getElementById('timer').innerText = `${String(displayMin).padStart(2,"0")}:${String(displaySec).padStart(2,"0")}`;
},1000);

}

// Reset Timer //
function resetTimer() {
  clearInterval(countdown);

document.getElementById("minutes").value = "";
document.getElementById("seconds").value = "";
document.getElementById("timer").innerText = "00:00";
  totalTime = 0;
}
