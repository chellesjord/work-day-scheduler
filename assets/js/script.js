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
var timeBlock = document.getElementsByClassName("timeBlock");
var time = moment().format("H");

//append to date to p
var currentDay = moment().format("MMMM Do");
document.getElementById("date").innerHTML = currentDay;

//localStorage
var saveTasks = function () {
    $(".saveBtn").click(function (e) {
        e.preventDefault();
        var eventText = $(this).siblings(".scheduleText").val();
        var eventTime = $(this).parent().attr("id");
        var timeText = [eventTime, eventText];
        console.log(timeText);
        localStorage.setItem(eventTime, eventText);
    });
};

var loadTasks = function () {
    document.getElementById("9").value = localStorage.getItem("9am");
    document.getElementById("10").value = localStorage.getItem("10am");
    document.getElementById("11").value = localStorage.getItem("11am");
    document.getElementById("12").value = localStorage.getItem("12pm");
    document.getElementById("13").value = localStorage.getItem("1pm");
    document.getElementById("14").value = localStorage.getItem("2pm");
    document.getElementById("15").value = localStorage.getItem("3pm");
    document.getElementById("16").value = localStorage.getItem("4pm");
    document.getElementById("17").value = localStorage.getItem("5pm");

    // var local9 = localStorage.getItem("9am");
    // var text9 = document.getElementById("9a");
    // text9.value = local9;
};

//color past, present, future
var timeVerify = function () {
    if (time > 17) {
        five.classList.add("past");
        four.classList.add("past");
        three.classList.add("past");
        two.classList.add("past");
        one.classList.add("past");
        twelve.classList.add("past");
        eleven.classList.add("past");
        ten.classList.add("past");
        nine.classList.add("past");
        console.log(time);
    } else if (time > 16) {
        five.classList.add("present");
        four.classList.add("past");
        three.classList.add("past");
        two.classList.add("past");
        one.classList.add("past");
        twelve.classList.add("past");
        ten.classList.add("past");
        nine.classList.add("past");
    } else if (time > 15) {
        five.classList.add("future");
        four.classList.add("present");
        three.classList.add("past");
        two.classList.add("past");
        one.classList.add("past");
        twelve.classList.add("past");
        ten.classList.add("past");
        nine.classList.add("past");
    } else if (time > 14) {
        five.classList.add("future");
        four.classList.add("future");
        three.classList.add("present");
        two.classList.add("past");
        one.classList.add("past");
        twelve.classList.add("past");
        ten.classList.add("past");
        nine.classList.add("past");
    } else if (time > 13) {
        five.classList.add("future");
        four.classList.add("future");
        three.classList.add("future");
        two.classList.add("present");
        one.classList.add("past");
        twelve.classList.add("past");
        ten.classList.add("past");
        nine.classList.add("past");
    } else if (time > 12) {
        five.classList.add("future");
        four.classList.add("future");
        three.classList.add("future");
        two.classList.add("future");
        one.classList.add("present");
        twelve.classList.add("past");
        ten.classList.add("past");
        nine.classList.add("past");
    } else if (time > 11) {
        five.classList.add("future");
        four.classList.add("future");
        three.classList.add("future");
        two.classList.add("future");
        one.classList.add("future");
        twelve.classList.add("present");
        ten.classList.add("past");
        nine.classList.add("past");
    } else if (time > 10) {
        five.classList.add("future");
        four.classList.add("future");
        three.classList.add("future");
        two.classList.add("future");
        one.classList.add("future");
        twelve.classList.add("future");
        eleven.classList.add("present");
        ten.classList.add("past");
        nine.classList.add("past");
    } else if (time > 9) {
        five.classList.add("future");
        four.classList.add("future");
        three.classList.add("future");
        two.classList.add("future");
        one.classList.add("future");
        twelve.classList.add("future");
        eleven.classList.add("future");
        ten.classList.add("present");
        nine.classList.add("past");
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
        console.log(time);
    };
};

saveTasks()
timeVerify()
loadTasks()