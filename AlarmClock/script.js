const alarmForm = document.querySelector(".alarm-form");
const alarmTimeInput = document.getElementById("alarmTime");
const alarmMessageInput = document.getElementById("alarmMessage");
const setAlarmButton = document.getElementById("setAlarmBtn");
const alarmStatus = document.getElementById("alarmStatus");
const stopBtn = document.getElementById("stopBtn");

setAlarmButton.addEventListener("click", () => {
  const alarmTime = alarmTimeInput.value;
  const alarmMessage = alarmMessageInput.value;
  setAlarm(alarmTime, alarmMessage);
});

function setAlarm(time, message) {
  const [hours, minutes] = time.split(":");
  const now = new Date();
  const alarm = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes
  );
  console.log(alarm);
  console.log(now);
  if (alarm > now) {
    const timeDiff = alarm - now;
    console.log("timeDiff: ", timeDiff);

    setTimeout(() => {
      playAlarm(message);
    }, timeDiff);
    alarmStatus.textContent = `Alarm set for ${time}`;
  } else {
    alarmStatus.textContent = "Invalid time. Please chose a future time";
  }
}

function playAlarm(message) {
  audio.play();
  //   alert(message);
  console.log(message);
  alarmStatus.textContent = "Alarm Triggered";

  stopBtn.classList.remove("stopBtn");
  stopBtn.classList.add("showStopBtn");
  setAlarmButton.classList.remove("showSetAlarm");
  setAlarmButton.classList.add("setAlarm");
}

stopBtn.addEventListener("click", () => {
  audio.pause();
  alarmTimeInput.value = "";
  alarmMessageInput.value = "";
  stopBtn.classList.add("stopBtn");
  stopBtn.classList.remove("showStopBtn");
  setAlarmButton.classList.remove("setAlarm");
  setAlarmButton.classList.add("showSetAlarm");
});
