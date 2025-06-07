/*
write a function that returns the largest number in an array 
*/
function largestNumInArray(arr){
    let largeEle=arr[0];
    for(let i = 1; i<arr.length; i++){
        if(largeEle < arr[i]){
            largeEle = arr[i]
        }
    }
    return largeEle

}
let arr =  [-20, -9, -17 , -100, -1, -10, -4, 0]
let largeElement = largestNumInArray(arr)
console.log(largeElement)