var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function dateAndTime() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();

  hours = checkTime(hours);
  minutes = checkTime(minutes);

  var date = today.getDate();
  var rawMonth = today.getMonth();
  var rawDay = today.getDay();

  $('.date').html(days[rawDay] + ", " + date + " " + months[rawMonth]);
  $('.time').html(hours + ":" + minutes);

  setTimeout(function () {
    dateAndTime();
  }, 500);
}

$(document).ready(function(){
  dateAndTime();
});