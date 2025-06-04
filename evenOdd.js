/*
Question
Write a function that accepts a number and checks whether it is even or odd.

If the number is divisible by 2 (i.e., remainder is 0), it’s an Even number.

Otherwise, it’s an Odd number.

Test the function with inputs 18 and 5.

Approach
Accept the input number in the function.
Check if the number modulo 2 equals 0.
If yes, print or return “Even”.
Otherwise, print or return “Odd”.
Test the function with different numbers to verify correctness.
Example
Input: 18
Output: Even

Input: 5
Output: Odd
 */
function evenOrOdd(num){
    let remainder = num % 2
    if(remainder == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
console.log(evenOrOdd(801));
console.log(evenOrOdd(18));