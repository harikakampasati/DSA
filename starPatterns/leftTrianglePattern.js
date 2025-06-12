/*

* 
* * 
* * * 
* * * *

*/
// let n=10;
// for(let i = 0; i< n; i++){
//     let row = "";
//     for(let j= 0; j<=i; j++){
//         row = row + "* "
//     }
//     console.log(row)
// }

let n=10;
for(let i = 0; i< n; i++){
    let row = "";
    for(let j= 0; j<i+1; j++){
        row = row + "* "
    }
    console.log(row)
}