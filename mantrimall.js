var peri = 11000;
var randam;

window.onload = function () {
  var minute = 3;
  var sec = 60;
  var rand = 3;

  setInterval(function () {
    // countdown
    if (sec < 10) {
      document.getElementById("timer").innerHTML =
        "0" + minute + " : " + "0" + sec;
    } else {
      document.getElementById("timer").innerHTML = "0" + minute + " : " + sec;
    }

    // period
    document.getElementById("period").innerHTML = peri;

    //check rand number is odd or even(if number is even show red otherwise blue).

    if (rand % 2 == 0) {
      randam = "red";
    } else {
      randam = "blue";
    }

    //code of countdown
    sec--;
    if (sec == 00) {
      minute--;
      sec = 60;
      if (minute == -1) {
        minute = 3;
        peri++;
        rand = Math.floor(Math.random() * 101);
        addrow();
        box3_hide();
      }
    }
  }, 1000);
};

//print period and color
function addrow() {
  var period = peri;
  var re = randam;
  var table = document.getElementsByTagName("table")[0];

  var newrow = table.insertRow(1);

  var cel1 = newrow.insertCell(0);
  var cel2 = newrow.insertCell(1);
  cel1.innerHTML = period;
  cel2.innerHTML = randam;
}

function box3_hide() {
  document.getElementById("box3").style.display = "none";
}
function reload() {
  document.getElementById("box3").style.display = "block";
}
