/*
| i | stars(i+1) | empty spaces n-(i+1)|
| 0 | 0+1=1      |  5-(0+1)=4          |     - - - - *
| 1 | 1+1=2      |  5-(1+1)=3          |     - - - * *
| 2 | 2+1=3      |  5-(2+1)=2          |     - - * * *
| 3 | 3+1=4      |  5-(3+1)=1          |     - * * * *
| 4 | 4+1=5      |  5-(4+1)=0          |     * * * * *

Pattern 6 - Print a Right-Aligned Right-Angled Triangle of Stars
Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

Example Output (n = 4)

   *
  **
 ***
****
  
Approach
Outer Loop (Rows): Loop i from 0 to n - 1. Each iteration is a new row.
Inner Loop 1 (Spaces): For each row, add n - i - 1 spaces before the stars to right-align the triangle.
Inner Loop 2 (Stars): Add i + 1 stars after the spaces.
Print Row: Combine the spaces and stars, then print the row.
Time and Space Complexity
Time Complexity: O(n²)
Space Complexity: O(n) for the row string
*/
let n =5
for(let i =0; i<n; i++){
    let row = "";
    //for spaces
    for(let j = 0; j< n-(i+1); j++){
        row = row + "  "
    }
    // for stars
    for(let k =0; k< (i+1); k++){
        row = row + "* "
    }
    console.log(row)
}