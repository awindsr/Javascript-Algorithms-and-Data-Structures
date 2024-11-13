// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// first array has its corresponding value squared in the second array.
// The frequency of values must be the same.

// Explanation of Big O for this method:
// This method has a time complexity of O(n^2), which is less efficient than the frequency counter method.
// Here’s why:
// 1. The function first checks if the lengths of the arrays are the same, which is O(1).
// 2. The main for loop iterates over each element in arr1, so it runs O(n) times.
// 3. Inside the loop, we use `indexOf` to find the square of the element from arr1 in arr2.
//    The `indexOf` method has a time complexity of O(n), so in the worst case, this operation is O(n) for each element in arr1.
// 4. The `splice` operation, which removes the found element from arr2, is also O(n) in the worst case.
// Combining these, we get O(n) * O(n) for `indexOf` and `splice` operations, resulting in an overall time complexity of O(n^2).

// This approach is inefficient for large arrays, as each nested operation increases the time complexity.

function same(arr1, arr2) {
    // Check if arrays have the same length; if not, they can't match
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
        // Find the index of the squared element in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        
        // If no corresponding squared value is found, return false
        if (correctIndex === -1) {
            return false;
        }
        
        // Remove the found element from arr2 to avoid duplicates
        arr2.splice(correctIndex, 1);
    }
    
    // If all checks pass, return true
    return true;
}

// Example:
// Input: [1, 2, 3, 2], [9, 1, 4, 4]
// Output: true
