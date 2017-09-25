function fancyArray(arr, delimiter, boolReverse) {
    if (delimiter === undefined) {delimiter = "->"}
    if (boolReverse == true) {
        for (var i=(arr.length-1); i>=0; i--) {
            console.log(i + " " + delimiter + " " + arr[i]);
        }
    } else {
        for (var i=0; i<arr.length; i++) {
            console.log(i + " " + delimiter + " " + arr[i]);
        }
    }
}

fancyArray(["James", "Jill", "Jane", "Jack"], ":::");