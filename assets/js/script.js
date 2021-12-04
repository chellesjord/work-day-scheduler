//if document ready. Won't start until it's loaded
$(document).ready(function () {
    //append to date to p
    var currentDay = moment().format("MMMM Do");
    document.getElementById("date").innerHTML = currentDay;
})

