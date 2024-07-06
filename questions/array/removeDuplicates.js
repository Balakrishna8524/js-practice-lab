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
  
  // Example Usage
  console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // [1, 2, 3, 4]
  