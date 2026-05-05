function checkOddNumber(num) {
    if (num % 2 == 0) {
        return "".concat(num, " is even");
    }
    else {
        return "".concat(num, " is odd");
    }
}
function PrintNumbers(num) {
    for (var i = 0; i < 10; i++) {
        if (i == 5) {
            continue;
        }
        if (i == 8) {
            break;
        }
        console.log(i);
    }
}
function countDown(num) {
    while (num > 0) {
        console.log(num);
        num--;
    }
}
console.log(checkOddNumber(4));
console.log("Numbers from 1 to 10");
PrintNumbers(10);
console.log("Reverse from 5 to 1");
countDown(5);
