/*
Write a fun that searches for an element in an array and return the index, if the ele is not present then just return -1
 */
function searchElement(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;

}
let arr = [2, 6, 4, 8, 1, 9];
let target = 8;
let resultIndex = searchElement(arr, target)
console.log(resultIndex)
