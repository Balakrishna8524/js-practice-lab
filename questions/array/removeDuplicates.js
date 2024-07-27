

// Using built-in

function removeDuplicatesUsingInbuilt(arr){
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if(!result.includes(arr[i])){
      result.push(arr[i])
    }
  }
  return result;
}

// Using total loops
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}


// using another built in method:
/*
Explanation:

new Set(arr):
Set is a built-in JavaScript object that lets you store unique values of any type, whether primitive values or object references.
When you pass an array (arr) to the Set constructor (new Set(arr)), it iterates through the elements of the array and automatically adds only the unique values to the new Set object. Any duplicate values encountered are ignored.
[...new Set(arr)]:

The spread syntax (...) is used here.
It expands the iterable new Set(arr) (which contains only the unique elements from the original array) into individual elements.
These individual elements are then enclosed within square brackets [], effectively creating a new array containing only the unique elements.
*/
function removeDuplicatesUsingSet(arr) {
  return [...new Set(arr)];
}

  
// Example Usage
console.log(removeDuplicates([1, 2, 3, 2, 4, 2, 1, 2])); // [1, 2, 3, 4]
  