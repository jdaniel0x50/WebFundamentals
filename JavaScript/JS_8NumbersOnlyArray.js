function numbersOnly(arr) {
    var newarr = [];
    for (var i=0; i<arr.length; i++) {
        if (typeof arr[i] === "number") {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

function overwriteArray(arr) {
    for (var i=0; i<arr.length; i++) {
        if (typeof arr[i] === "number") {
            for (var j=i; j<arr.length; j++) {
                arr[j] = arr[j+1];
            }
            arr.pop();
            i--;
        }
    }
    return;
}



var arr = [1, "apple", -3, "orange", 0.5, 99.99, "coding", -100, "dojo", -0.5, "hello"];
console.log(numbersOnly(arr));
overwriteArray(arr);
console.log(arr);