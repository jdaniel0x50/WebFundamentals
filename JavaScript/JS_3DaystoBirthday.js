var daysUntilBirthday = 60;
while (daysUntilBirthday >= 0) {
    if (daysUntilBirthday >= 30) {
        console.log(daysUntilBirthday + " days until my birthday. Such a very, very long time ...... :-/");        
    }
    else if (daysUntilBirthday >= 5) {
        console.log(daysUntilBirthday + " days until my birthday!!! ...... :)");
    }
    else if (daysUntilBirthday > 0) {
        console.log(daysUntilBirthday + " DAYS UNTIL MY BIRTHDAY!!!!!!!!! Almost here!!! :) :)");
    }
    else {
        console.log("IT'S MY BIRTHDAY TODAY!!!!!");
    }
    daysUntilBirthday--;
}