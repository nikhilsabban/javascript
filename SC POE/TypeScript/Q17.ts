// 17. Write a TypeScript program to calculate the sum of all elements in an 
// array.


let arr:number[]=[10,20,30,40,50];

let sum=0;

for(let i=0;i<arr.length;i++)
{
    sum = sum + arr[i]
}

alert("Sum: "+sum)