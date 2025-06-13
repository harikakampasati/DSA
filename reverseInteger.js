/*
Question: Reverse Integer with Overflow Check
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

Requirements
Reverse the digits of a 32-bit signed integer.
Return 0 if the result overflows.
Constraints
Time Complexity: O(d) where d is the number of digits.
Space Complexity: O(1) — constant space.
Example
Input: 123
Output: 321

Input: -123
Output: -321

Input: 1534236469
Output: 0 (overflow)
Step-by-Step Approach
Preserve the Original: Save x in xCopy.
Work with Absolute Value: Use Math.abs(x) or abs(x) to simplify reversal.
Reverse Digits:
Initialize rev = 0.
While x != 0:
last = x % 10
rev = rev * 10 + last
x //= 10
Check for Overflow: Return 0 if reversed number is outside 32-bit int range.
Restore Sign: Return -rev if xCopy < 0, else rev.
*/

function reverseInterger(num){
    let numCopy = num;
    let rev = 0;
    let limit = 2**31;
    num = Math.abs(num)
    while(num > 0){
        let rem = num % 10;
        rev = 10 * rev + rem;
        num = Math.floor(num / 10);
    }
    rev = numCopy < 0 ? -rev : rev
    if(rev > (limit-1) || rev < -limit) return 0
    return rev

}
let revNum = reverseInterger(-123)
console.log(revNum)