// const updateDate = ()=>{
//     const now =  new Date()
//     const options = {weekday:"long", year:"numeric", month:"long", day:"numeric"}
//     const dateString = now.toLocaleDateString(undefined, options)
//     console.log("dateString", dateString);
//     document.querySelector('.date').textContent=dateString
// }

// function updateTime(){
//     const now = new Date()
//     const hours = now.getHours()
//     const minutes = now.getMinutes()
//     const seconds = now.getSeconds()

//     const timeString = `${formatTime(hours)}:${formatTime(minutes )}:${formatTime(seconds)}`;
//     document.querySelector('.time').textContent=timeString;

// }

// const formatTime=(time)=>{
// return time < 10 ? `0${time}`:time

// }

// updateDate()
// setInterval(updateTime, 1000)

const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const updateTime = () => {
  const now = new Date();

  document.querySelector(".time").innerText =
    zeroPadding(now.getHours(), 2) +
    ":" +
    zeroPadding(now.getMinutes(), 2) +
    ":" +
    zeroPadding(now.getSeconds(), 2);

  document.querySelector(".date").innerText =
    now.getFullYear() +
    "-" +
    zeroPadding(now.getMonth() + 1, 2) +
    "-" +
    zeroPadding(now.getDate(), 2) +
    " " +
    WEEK[now.getDay()];
};

updateTime()
setInterval(updateTime, 1000)
function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
}
