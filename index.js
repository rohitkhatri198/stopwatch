window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendsTens = document.getElementById("hundreds");
  var appendsSeconds = document.getElementById("seconds");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var reset = document.getElementById("buttonReset");
  var Interval;

  start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 20);
  };

  stop.onclick = function () {
    clearInterval(Interval);
  };

  reset.onclick = function () {
    clearInterval(Interval);
    console.log("hello");
    tens = "00";
    seconds = "00";
    appendsTens.innerHTML = tens;
    appendsSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendsTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendsTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendsSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendsTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendsSeconds.innerHTML = seconds;
    }
  }
};
