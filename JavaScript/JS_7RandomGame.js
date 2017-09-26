function randomChance(coins, walkAwayAmount) {
    var randCoinsWon = Math.floor(Math.random() * 51) + 50;
    var coinsWonTotal = 0;
    var rand1 = 0;
    var rand2 = 0;
    var countGame = 0;

    for (coins; coins>0; coins--) {
        countGame++;
        rand1 = Math.floor(Math.random() * 100);
        rand2 = Math.floor(Math.random() * 100);
        if (rand1 === rand2) {
            coinsWonTotal = coinsWonTotal + coins + randCoinsWon;
            var ordinand = writeOrdinand(countGame);
            console.log("You won on the " + countGame + ordinand + " game! You won " + (coins + randCoinsWon) + " coins! CONGRATULATIONS!");
            if (coinsWonTotal > walkAwayAmount) {
                console.log("You won and met your walk away amount goal!! You won " + coinsWonTotal + " coins!");
                return coinsWonTotal;
            }
            coinsWonTotal -= coins;
        }
    }
    console.log("Sorry, you did not win ... returned " + coinsWonTotal + " coins.");
    return coinsWonTotal;
}

function writeOrdinand(number) {
    var ordinand = "";
    if (number % 100 === 11) {
        ordinand = "th";
    }
    else if (number % 10 === 1) {
        ordinand = "st";
    }
    else if (number % 100 === 12) {
        ordinand = "th";
    }
    else if (number % 10 === 2) {
        ordinand = "nd";
    }
    else if (number % 100 === 13) {
        ordinand = "th";
    }
    else if (number % 10 === 3) {
        ordinand = "rd";
    }
    else {
        ordinand = "th";
    }
    return ordinand;
}


randomChance(2000, 1000);