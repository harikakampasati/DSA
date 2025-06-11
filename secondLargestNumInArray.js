function secondLargestNum(arr) {
    if (arr.length < 2) {
        return "Array should contain at least 2 elements.";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num < largest && num > secondLargest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) {
        return "No second largest element (all elements may be equal).";
    }

    console.log("Largest:", largest);
    console.log("Second Largest:", secondLargest);
    return secondLargest;
}
let arr = [10,20,20]; // Try with other test arrays too
let secondLargestElement = secondLargestNum(arr);
console.log("Second Largest Element:", secondLargestElement);
