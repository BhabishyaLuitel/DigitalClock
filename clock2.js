setInterval(showTime, 1000);

function showTime() {
    let time = new Date(); // get current time and store it in time variable
    let hours = time.getHours(); // get hours and store it in hours variable
    let minutes = time.getMinutes(); // get minutes and store it in minutes variable
    let seconds = time.getSeconds(); // get seconds and store it in seconds variable
    am_pm = "AM"; // initialize am_pm variable to AM

    // 12 hour clock
    if (hours > 12) {
        hours = hours - 12; // if hours is greater than 12, subtract 12 from hours
        am_pm = "PM"; // set am_pm to PM
    }

    // if the hour in 0 then it is 12 AM
    if (hours == 0) {
        hours = 12; // if hours is 0, set hours to 12
        am_pm = "AM"; // set am_pm to AM
    }

    // add 0 if less than 10
    hours = hours < 10 ? "0" + hours : hours; // if hours is less than 10, add 0 to the front of hours
    minutes = minutes < 10 ? "0" + minutes : minutes; // if minutes is less than 10, add 0 to the front of minutes
    seconds = seconds < 10 ? "0" + seconds : seconds; // if seconds is less than 10, add 0 to the front of seconds

    // display the time
    let currentTime = hours + ":" + minutes + ":" + seconds + am_pm; // create currentTime variable and store the time in it

    document.getElementById("clock").innerHTML = currentTime; // display the time in the clock div
}
showTime();