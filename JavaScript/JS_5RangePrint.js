function printRange(startNum, endNum, skipVal) {
    if ((startNum > endNum && skipVal > 0) || (startNum < endNum && skipVal < 0)) {
        console.log("Error! The skip value will not proceed from the start value to the end value!");
        return "ERROR!";
    }
    if (endNum === undefined) {     //determine whether an endvalue has been set; if not define step from 0 to number
        endNum = startNum;
        startNum = 0;
        if (endNum >= 0) {skipVal = 1} else {skipVal = -1}
    }
    if (skipVal) {                  //determine whether skipVal was defined; if not define as either +1 or -1 (else below)
        if (startNum < endNum) {    //if going up, use <
            for (var i=startNum; i<endNum; i = i + skipVal) {
                console.log(i);
            }
        } else {                    //if going down, use >
            for (var i=startNum; i>endNum; i = i + skipVal) {
                console.log(i);
            }    
        }
    }
    else {                          //skipVal was not defined; set as +1 or -1
        for (var i=startNum; i<endNum; i++) {
            console.log(i);
        }
    }
}

printRange(-15, 25, 3);