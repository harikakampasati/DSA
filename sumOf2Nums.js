/*
Write a program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.

Explanation
sum(a, b) is a function that takes two arguments.
It adds them and stores the result in a variable named add.
It then prints the result.
sum(x, y) calls the function with x = 10 and y = 20, so it prints 30.
Dry Run
Input: a = 10, b = 20

Step 1: add = 10 + 20 = 30

Step 2: Print 30
*/
function sumOf2Num(a, b){
    let sum = a + b;
    return sum;
}
let x = 70;
let y = 40;
let result = sumOf2Num(x,y) 
console.log(result)