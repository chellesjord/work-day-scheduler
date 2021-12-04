var currentDay = moment().format("MMMM Do");

console.log(currentDay);

//append to p
document.getElementById("date").innerHTML = currentDay;