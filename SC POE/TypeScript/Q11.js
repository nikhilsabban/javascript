"use strict";
// 11.  Create a TypeScript class that checks whether numbers from 1 to 20 
// are even or odd using a loop and if-else statement. Display the result 
// using an object of the class. 
class NumberCheck {
    checknumber() {
        let result = "";
        for (let i = 0; i <= 20; i++) {
            if (i % 2 == 0) {
                result += i + "is Even\n";
            }
            else {
                result += i + "is Odd\n";
            }
        }
        alert(result);
    }
}
let obj = new NumberCheck();
obj.checknumber();
