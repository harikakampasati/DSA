/*
write a function that returns the smallest number in an array 
*/
function smallestNumInArray(arr){
    let smallEle=arr[0];
    for(let i = 1; i<arr.length; i++){
        if(smallEle > arr[i]){
            smallEle = arr[i]
        }
    }
    return smallEle

}
let arr =  [200, 9, 170 , 100, 1, 10, 5, 0]
let smallElement = smallestNumInArray(arr)
console.log(smallElement)