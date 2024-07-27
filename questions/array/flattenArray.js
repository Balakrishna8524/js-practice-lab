


// using built in function =====================================================================
/*
Explanation:

arr.flat(Infinity):
 - arr refers to the input array.
 - .flat() is a built-in JavaScript array method. It's used to create a new array with all sub-array elements 
    concatenated into it recursively up to a specified depth.
 - The argument passed to .flat() determines how deep the flattening will go.
 - Infinity is a numeric value representing positive infinity. When you pass Infinity to .flat(), it ensures that all 
    nested arrays, no matter how deep, are flattened into a single-level array.
*/
function flattenArr(arr) {
  return arr.flat(Infinity);
}



// Function to flatten an array  =====================================================================
function flattenArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten the nested array
      result.push(...flattenArray(arr[i]));
    } else {
      // Add the element to the result array
      result.push(arr[i]);
    }
  }

  return result;
}



// Example
console.log(flattenArr([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
