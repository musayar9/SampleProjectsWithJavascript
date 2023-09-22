


let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let timer;

function startTimer(){
    timer = setInterval(updateTimer, 10)
}

function stopTimer(){
    //stop the timer by clearing the interval
    
    clearInterval(timer)
}

function resetTimer(){
    minutes=0;
    seconds=0;
    miliseconds=0;
    
      document.getElementById("minutes").textContent = padTime(minutes);
      document.getElementById("seconds").textContent = padTime(seconds);
      document.getElementById("miliseconds").textContent = padTime(miliseconds);
}

function updateTimer() {
  //ıncrement the seconds
  miliseconds++;

  // Check if seconds reach 60, if so, reset seconds and increment minutes

  if (miliseconds === 100) {
    miliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  document.getElementById("minutes").textContent= padTime(minutes)
  document.getElementById("seconds").textContent= padTime(seconds)
  document.getElementById("miliseconds").textContent= padTime(miliseconds)
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}
