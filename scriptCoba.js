var petname = localStorage.getItem("nama");
document.getElementById("nama").textContent = petname;


function playGame() {
  window.location.href = "game.html";
}

// Update time every second
var timeElement = document.querySelector(".greetings > #time");
var greetingElement = document.querySelector(".greetings > #greeting");
var hours = 6;
var minutes = 0;
var intervalId;

function updateClock() {
  minutes += 1;
  if (minutes >= 60) {
    hours++;
    minutes -= 60;
  }
  var timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  timeElement.textContent = timeString;

  // Update greeting based on time
  var time = parseInt(hours.toString() + minutes.toString());
  if (time >= 1900 || time < 400) {
    greetingElement.textContent = "Good Night, ";
    document.body.style.backgroundImage = "url('./images/malam1.jpg')";
  } else if (time >= 400 && time < 1100) {
    greetingElement.textContent = "Good Morning, ";
    document.body.style.backgroundImage = "url('./images/pagi1.jpg')";
  } else if (time >= 1100 && time < 1500) {
    greetingElement.textContent = "Good Afternoon, ";
    document.body.style.backgroundImage = "url('./images/siang1.jpg')";
  } else {
    greetingElement.textContent = "Good Evening, ";
    document.body.style.backgroundImage = "url('./images/sore1.jpg')";
  }
}

intervalId = setInterval(updateClock, 1000);




// Tidur button click event handler
var btnTidur = document.querySelector(".btnTdr");
btnTidur.addEventListener("click", function () {
  var sleepMeter = document.getElementById("sleep");
  sleepMeter.value = 100; // fill up the sleep meter
  hours += 8; // pass 8 hours
  if (hours >= 24) {
    hours -= 24;
  }
  updateClock();
});

// Main button click event handler
// Main button click event handler
var btnMain = document.getElementById("btnMain");
btnMain.addEventListener("click", function () {
  hours += 6; // progress the time by 6 hours
  if (hours >= 24) {
    hours -= 24;
  }
  var timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  timeElement.textContent = timeString;
});


// Play button click event handler
var btnPlay = document.querySelector(".btnMai");
btnPlay.addEventListener("click", function () {
  minutes += 10; // progress the time by 10 minutes
  if (minutes >= 60) {
    hours++;
    minutes -= 60;
  }
  updateClock();
});

// Obat button click event handler
// Makan button click event handler
var btnMakan = document.querySelector(".btnMkn");
btnMakan.addEventListener("click", function () {
  var foodMeter = document.getElementById("food");
  var healthMeter = document.getElementById("health");
  var sleepMeter = document.getElementById("sleep");
  foodMeter.value += 20; // increase food meter by 20
  if (foodMeter.value > 100) {
    foodMeter.value = 100;
  }
  minutes += 30; // progress the time by 30 minutes
  if (minutes >= 60) {
    hours++;
    minutes -= 60;
  }
  updateClock();
  sleepMeter.value -= 5; // decrease sleep meter by 5
});

// Obat button click event handler
var btnObat = document.querySelector(".btnObt");
btnObat.addEventListener("click", function () {
  var foodMeter = document.getElementById("food");
  var healthMeter = document.getElementById("health");
  var sleepMeter = document.getElementById("sleep");
  healthMeter.value += 20; // increase health meter by 20
  if (healthMeter.value > 100) {
    healthMeter.value = 100;
  }
  minutes += 10; // progress the time by 10 minutes
  if (minutes >= 60) {
    hours++;
    minutes -= 60;
  }
  updateClock();
  sleepMeter.value -= 5; // decrease sleep meter by 5
});


// Decrement health, food, and sleep meters by 10 every minute
setInterval(function () {
  var healthMeter = document.getElementById("health");
  var foodMeter = document.getElementById("food");
  var sleepMeter = document.getElementById("sleep");
  healthMeter.value -= 1;
  foodMeter.value -= 1;
  sleepMeter.value -= 1;
  if (healthMeter.value < 0) {
    healthMeter.value = 0;
  }
  if (foodMeter.value < 0) {
    foodMeter.value = 0;
  }
  if (sleepMeter.value < 0) {
    sleepMeter.value = 0;
  }
  // Check if game is over
  if (healthMeter.value == 0 || foodMeter.value == 0 || sleepMeter.value == 0) {
    // Game over
    alert("Game Over! piaraanmu sudah tidak memiliki tenaga lagi");
    // Stop the decrementing of meters
    clearInterval(intervalId);
  }
}, 60000); // 1 minute = 60,000 milliseconds


var btnMain = document.getElementById("btnMain");
btnMain.addEventListener("click", function () {
  var foodMeter = document.getElementById("food");
  var healthMeter = document.getElementById("health");
  var sleepMeter = document.getElementById("sleep");
  var expMeter = document.getElementById("exp");
  foodMeter.value -= 30; // decrease food meter by 30
  healthMeter.value -= 30; // decrease health meter by 30
  sleepMeter.value -= 30; // decrease sleep meter by 30
  if (foodMeter.value < 0) {
    foodMeter.value = 0;
  }
  if (healthMeter.value < 0) {
    healthMeter.value = 0;
  }
  if (sleepMeter.value < 0) {
    sleepMeter.value = 0;
  }
  expMeter.value += 50; // increase exp meter by 50
  if (expMeter.value > 100) {
    expMeter.value = 100;
  }
  hours += 6; // progress the time by 6 hours
  if (hours >= 24) {
    hours -= 24;
  }
  var timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  timeElement.textContent = timeString;
});