/*
 Write a function that takes an integer and returns its square. Call this function and print the result.

square(x) is a function that computes the square of a number.

It returns the result instead of printing it.

square(3) returns 9, which is then printed.

Examples
Input: 3 – Output: 9
Input: 5 – Output: 25
Input: 10 – Output: 100
Approach
To calculate the square of a number, follow these steps:

Accept the input integer x.
Multiply x by itself to get the square.
Return the result from the function.
Call the function with the desired number and print the returned value. 
 */

function square(num){
    let square = num*num;
    return square;
}
let x =  99
let squareOfNum = square(x);
console.log(squareOfNum)