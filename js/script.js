let hr = 0,
  min = 0,
  sec = 0;
let count = 0;
let running = false;

function start() {
  running = true;
  stopWatch();
}

function stop() {
  running = false;
}

function reset() {
  running = false;
  count = 0;
  hr = 0;
  min = 0;
  sec = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopWatch() {
  if (running === true) {
    count++;
    if (count === 100) {
      sec++;
      count = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    document.getElementById("hr").innerHTML = `${hr <= 9 ? `0${hr}` : hr}`;
    document.getElementById("min").innerHTML = `${min <= 9 ? `0${min}` : min}`;
    document.getElementById("sec").innerHTML = `${sec <= 9 ? `0${sec}` : sec}`;
    document.getElementById("count").innerHTML = count;
    setTimeout(stopWatch, 10);
  }
}
