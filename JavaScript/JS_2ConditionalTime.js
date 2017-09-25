var hour = 12;
var minutes = 20;
var period = "PM";
var prefix = "It's";
var descriptor = "";
var morneve = "";
var periodplus = "AM";
var hourplus = 0;

// handle the situation that the next hour is 1:00 and not 13:00
if (hour == 12) {
    hourplus = 1;
    periodplus = period;
} else if (hour == 11) {
    if (period == "AM") {
        periodplus = "PM";
    } else {
        periodplus = "AM";
    }
} else {
    hourplus += 1;
    periodplus = period;
}

// handle time within the hour
if (minutes < 10) {
    descriptor = " " + minutes + " after " + hour;
} else if (minutes < 20) {
    descriptor = " about quarter after " + hour;
} else if (minutes < 40) {
    descriptor = " about half past " + hour;
} else if (minutes < 50) {
    descriptor = " about a quarter to " + hourplus;
} else {
    descriptor = " " + (60 - minutes) + " to " + hourplus;
}

// handle descriptor of morning or evening
if (periodplus == "AM") {
    morneve = " in the morning.";
} else if (hour < 7 || hour == 12) {
    morneve = " in the afternoon.";
} else {
    morneve = " in the evening.";
}

console.log(prefix + descriptor + morneve);