function randomChance(coins) {
    var randcoins = Math.floor(Math.random() * 50) + 50;
    var coinswon = 0;
    var rand1 = 0;
    var rand2 = 0;
    var countgame = 0;

    for (coins; coins>0; coins--) {
        countgame++;
        rand1 = Math.floor(Math.random() * 100);
        rand2 = Math.floor(Math.random() * 100);
        if (rand1 == rand2) {
            coinswon = coins + randcoins;
            console.log("You won on the " + countgame + " game! You won " + (coins + randcoins) + " coins! CONGRATULATIONS!");
            return coinswon;
        }
    }
    console.log("Sorry, you did not win ... returned " + coinswon + " coins.");
    return coinswon;
}

randomChance(2000);