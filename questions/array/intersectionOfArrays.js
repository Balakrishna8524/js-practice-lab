

function intersection(arr1, arr2){
	const set2 = new Set(arr2);
	return arr1.filter(item => set2.has(item));
}

/*
Explanation:

- const set2 = new Set(arr2);:

	A new Set called set2 is created from the elements of the second array, arr2.
	As we discussed before, a Set only stores unique values. This step efficiently allows for quick checking of whether an element from arr1 exists in arr2.


- return arr1.filter(item => set2.has(item));:

	This line uses the filter() method on the first array, arr1.
	The filter() method creates a new array containing only the elements that pass a certain condition (implemented by the callback function).
	The callback function here is item => set2.has(item).
	For each item in arr1, this function checks if that item exists in set2 using the set2.has(item) method.
	The has() method of a Set returns true if the value is present in the set, and false otherwise.
	Therefore, the filter() method will keep only those items from arr1 for which set2.has(item) returns true (meaning the item is also present in arr2).

	
*/


// Example
console.log(intersection([1, 2, 3], [2, 3, 4]));