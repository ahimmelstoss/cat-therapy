var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function dateAndTime() {
  var today = new Date(),
      hours = today.getHours(),
      minutes = today.getMinutes(),
      date = today.getDate(),
      rawMonth = today.getMonth(),
      rawDay = today.getDay();

  hours = checkTime(hours);
  minutes = checkTime(minutes);

  $('.date').html(days[rawDay] + ", " + date + " " + months[rawMonth]);
  $('.time').html(hours + ":" + minutes);

  setTimeout(function () {
    dateAndTime();
  }, 500);
}

$(document).ready(function(){
  dateAndTime();
});