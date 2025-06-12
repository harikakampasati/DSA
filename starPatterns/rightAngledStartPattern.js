/*
| i | stars(i+1) | empty spaces n-(i+1)|
| 0 | 0+1=1      |  5-(0+1)=4          |     - - - - *
| 1 | 1+1=2      |  5-(1+1)=3          |     - - - * *
| 2 | 2+1=3      |  5-(2+1)=2          |     - - * * *
| 3 | 3+1=4      |  5-(3+1)=1          |     - * * * *
| 4 | 4+1=5      |  5-(4+1)=0          |     * * * * *
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