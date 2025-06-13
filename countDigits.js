/*
Write a function countDigits(n) that takes an integer n and returns how many digits it contains.

Requirements
Handles both positive and negative integers.
Return 1 if n is 0 (since 0 is a single-digit number).
Constraints
Time Complexity: O(log₁₀(n)) — Each division reduces one digit.
Space Complexity: O(1) — Only a few variables are used.
Examples
Input: 259
Output: 3

Input: -1035
Output: 4

Input: 0
Output: 1
Step-by-Step Approach
Handle Zero: If n == 0, return 1 directly.
Convert to Positive: Use abs(n) to ignore sign.
Initialize a counter: Set count = 0.
Loop: While n > 0:
Divide n by 10 using integer division.
Increment count.
Return: The count after the loop finishes. 
*/
function countDigit(num){
    let count = 0;
    if(num === 0){
        return 1
    }
    num = Math.abs(num)
    while(num>0){
        num = Math.floor(num/10)
        count++
    }
    return count
}
let number = 259
const totalDigits = countDigit(number)
console.log(totalDigits)

//general way
// let n = 258544646679;
// n = n.toString()
// let len = n.length;
// console.log(len);
