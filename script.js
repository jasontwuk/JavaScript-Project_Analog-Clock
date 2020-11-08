// ! set const
const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

const body = document.body;
const clock = document.getElementById("clock");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

// ! set function
setInterval(setClock, 1000);

function setClock() {
  const date = new Date();
  // date.setHours(5);
  // console.log(date);
  const hours = date.getHours();
  // *** get 'true', when the hour is between 6:00 and 18:00
  const isDayTime = hours > 5 && hours < 17;

  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (date.getMinutes() + secondRatio) / 60;
  const hourRatio = (date.getHours() + minuteRatio) / 12;
  secondHand.style.transform = "rotate(" + secondRatio * 360 + "deg)";
  minuteHand.style.transform = "rotate(" + minuteRatio * 360 + "deg)";
  hourHand.style.transform = "rotate(" + hourRatio * 360 + "deg)";

  displaySunOrMoon(isDayTime);
}

function displaySunOrMoon(condition) {
  if (condition) {
    body.classList.remove("night-mode");
  } else {
    body.classList.add("night-mode");
  }
}

setClock();
