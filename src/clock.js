const jsClock = document.getElementById("jsClock");

function displayClock() {
  const clock = new Date();
  let hour = clock.getHours();
  let minute = clock.getMinutes();
  let second = clock.getSeconds();

  jsClock.innerHTML = `${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }:${second < 10 ? `0${second}` : `${second}`}`;
}

function init() {
  setInterval(displayClock, 1000);
}

init();
