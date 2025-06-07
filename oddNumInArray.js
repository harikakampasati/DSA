/*
Write a program to print all odd numbers from an array.

Example array: [10, 3, 5, 2, 7, 6, 9]

Expected Output: 10 2 6

Approach
Iterate through each element in the array.
Check if the element is divisible by 2 is 1.
If yes, print the element (it’s odd).
Example

Input: [10, 3, 5, 2, 7, 6, 9]
Output: 3 5 7 9
*/
let arr = [10, 3, 5, 2, 7, 6, 9];
function displayOddNums(arr){
    for(let i =0; i<arr.length; i++){
    if(arr[i]%2 === 1){
        console.log(arr[i])
    }
}
}
displayOddNums(arr)
