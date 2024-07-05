// Function to flatten an array
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

module.exports = flattenArray;
