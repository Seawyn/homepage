var search_input = document.getElementById("search");

search_input.addEventListener("keyup", function(event) {
  console.log(event.keycode);
  if (event.keyCode === 13) {
    event.preventDefault();
    const search_prefix = 'https://www.ecosia.org/search?q=';
    const query = search_input.value
    window.open(search_prefix + query.split(' ').join('+'), '_self');
  }
});

document.getElementById("greeting").onload = selectGreeting();
document.getElementById("datetime").onload = updateDatetime();


function selectGreeting() {
  var greeting_msg = document.getElementById("greeting");
  var date = new Date();
  var hour = date.getHours();
  var day = date.getDate();
  var msg;
  // TODO: Change to switch statement
  if (hour < 5) {
    msg = "It's getting late...";
  }
  else if (hour < 12) {
    msg = "Good morning";
  }
  else if (hour < 15) {
    msg = "Good afternoon";
  }
  else if (hour < 20) {
    msg = "Good evening";
  }
  else {
    msg = "Good night";
  }
  greeting_msg.innerHTML = msg;
}

function updateDatetime(){
  var time_slot = document.getElementById('datetime');
  var date = new Date();
  // Time variables
  var hour = date.getHours();
  var minute = date.getMinutes();
  // Date variables
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  // Format times and dates
  if (month < 10)
    month = "0" + month
  if (day < 10)
    day = "0" + day
  if (hour < 10)
    hour = "0" + hour;
  if (minute < 10)
    minute = "0" + minute;

  time_slot.innerHTML = day + '/' + month + '/' + year + '  ' + hour + ':' + minute;
  var t = setTimeout(updateDatetime, 500);
}
