var reward = 0.01;
var rewardTotal = 0.01;
var daysTo10kCumulative = 0;
var daysTo10kSingleDay = 0;
var daysTo1B = 0;
var daysToInfinity = 0;

for (var i=2; i <=30; i++) {
    reward *= 2;
    rewardTotal += reward;
    if (daysTo10kCumulative === 0 && rewardTotal >= 10000) {
        daysTo10kCumulative = i;
    }
    if (daysTo10kSingleDay === 0 && reward >= 10000) {
        daysTo10kSingleDay = i;
    }
    if (daysTo1B === 0 && rewardTotal >= 1000000000) {
        daysTo1B = i;
    }
}

daysTo1B = 2;
reward = 0.01;                 //reset reward value for new calculation
while (reward < 1000000000) {
    reward *= 2;
    daysTo1B++
}

daysToInfinity = 2;
reward = 0.01;                 //reset reward value for new calculation
while (reward < Infinity) {
    reward *= 2;
    daysToInfinity++
}

console.log("On the 30th day, the servant will receive $" + reward + "!");
console.log("The cumulative value of the servant's reward (given each day) would be $" + rewardTotal + "!!");
console.log("It took " + daysTo10kCumulative + " days for the servant to receive a cumulative total of $10,000; and the servant earned over $10,000 on a single day on the " + daysTo10kSingleDay + " day.");
console.log("It took " + daysTo1B + " days for the servant to receive a single day reward of $1,000,000,000.");
console.log("It took " + daysToInfinity + " days for the servant to receive a single day reward of Infinity.");
