// 8. Develop a calculator using TypeScript that performs addition, 
// subtraction, multiplication, and division based on user input.


let num1= Number(prompt("Enter first number :"));
let num2=Number(prompt("Enter second number"));

let choice=prompt(
    "calculator Menu\n"+
    "1.addition\n"+
    "2.subtraction\n"+
    "3.multiplication\n"+
    "4.division\n"+
    "Enter your choice"
);

let result;

switch(choice){

    case "1":
        result = num1+num2;
        alert("Addition: "+result);
        break;

    
    case "2":
        result = num1-num2;
        alert("Substraction: "+result);
        break;

    
    case "3":
        result = num1*num2;
        alert("Multiplication: "+result);
        break;

    
    case "4":
        result = num1/num2;
        alert("Division: "+result);
        break;
}