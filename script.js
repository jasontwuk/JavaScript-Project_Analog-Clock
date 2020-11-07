// ! set const
const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

// ! set function
setInterval(setClock, 1000);

function setClock() {
  let date = new Date();
  // console.log(date);
  let secondRatio = date.getSeconds() / 60;
  let minuteRatio = (date.getMinutes() + secondRatio) / 60;
  let hourRatio = (date.getHours() + minuteRatio) / 12;
  secondHand.style.transform = "rotate(" + secondRatio * 360 + "deg)";
  minuteHand.style.transform = "rotate(" + minuteRatio * 360 + "deg)";
  hourHand.style.transform = "rotate(" + hourRatio * 360 + "deg)";
}

setClock();
