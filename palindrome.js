/*
Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

Requirements
Handles both positive and negative integers.
Returns false for negative numbers (not palindromes).
Constraints
Time Complexity: O(d) where d is the number of digits.
Space Complexity: O(1) — Only a few variables are used.
Examples
Input: 121
Output: true

Input: -121
Output: false

Input: 10
Output: false
Step-by-Step Approach
Handle Negatives: If x < 0, return false.
Store Original: Save the input in xCopy for comparison.
Reverse:
Initialize rev = 0.
While x > 0:
rem = x % 10
rev = rev * 10 + rem
x //= 10
Compare: If rev === xCopy, return true; else false.
*/

function palindrome(num){
    if(num<0) return false
    let numCopy = num;
    let rev = 0;
    while(num>0){
        let rem = num%10;
        rev = 10*rev+rem
        num = Math.floor(num/10);
    }
   return  numCopy === rev
}
let isPalindrome = palindrome(2552)
console.log(isPalindrome)