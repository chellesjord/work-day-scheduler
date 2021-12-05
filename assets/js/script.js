var nine = document.getElementById("9");
var ten = document.getElementById("10");
var eleven = document.getElementById("11");
var twelve = document.getElementById("12");
var one = document.getElementById("13");
var two = document.getElementById("14");
var three = document.getElementById("15");
var four = document.getElementById("16");
var five = document.getElementById("17");
var pastTime = document.getElementsByClassName("past");
var presentTime = document.getElementsByClassName("present");
var futureTime = document.getElementsByClassName("future");
var time = moment().format("H");

//append to date to p
var currentDay = moment().format("MMMM Do");
document.getElementById("date").innerHTML = currentDay;

//color past, present, future
if (time > 17) {
    five.classList.add("past");
} else if (time > 16) {
    five.classList.add("present");
} else if (time > 15) {
    five.classList.add("future");
    four.classList.add("present");
} else if (time > 14) {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("present");
} else if (time > 13) {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("future");
    two.classList.add("present");
} else if (time > 12) {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("future");
    two.classList.add("future");
    one.classList.add("present");
} else if (time > 11) {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("future");
    two.classList.add("future");
    one.classList.add("future");
    twelve.classList.add("present");
} else if (time > 10) {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("future");
    two.classList.add("future");
    one.classList.add("future");
    twelve.classList.add("future");
    eleven.classList.add("present");
} else if (time > 9) {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("future");
    two.classList.add("future");
    one.classList.add("future");
    twelve.classList.add("future");
    eleven.classList.add("future");
    ten.classList.add("present");
} else if (time > 8) {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("future");
    two.classList.add("future");
    one.classList.add("future");
    twelve.classList.add("future");
    eleven.classList.add("future");
    ten.classList.add("future");
    nine.classList.add("present");
} else {
    five.classList.add("future");
    four.classList.add("future");
    three.classList.add("future");
    two.classList.add("future");
    one.classList.add("future");
    twelve.classList.add("future");
    eleven.classList.add("future");
    ten.classList.add("future");
    nine.classList.add("future");
};