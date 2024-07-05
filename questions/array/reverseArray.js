/**
 * Question: How to reverse an array in JavaScript?
 * 
 * Explanation:
 * - Use built-in `.reverse()` (mutates original array)
 * - Or use a for loop to reverse without mutation
 */

// Using built-in
const arr = [1, 2, 3, 4];
console.log('Reversed (built-in):', arr.slice().reverse()); // [4, 3, 2, 1]

// Using loop
function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log('Reversed (manual):', reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
