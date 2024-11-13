// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers 
// in the array, but it will always be sorted.

// Time Complexity: O(N) - We are iterating through the array only once using a while loop.
// Space Complexity: O(1) - We are not using any extra space that grows with the input, 
// we only use a fixed amount of variables.

function countUniqueValues(arr) {
    // Edge case: If the array is empty, return 0
    if (arr.length === 0) {
        console.log(0);
        return;
    }

    let first = 0;        // Pointer to track the position of the first unique value
    let second = 1;       // Pointer to iterate through the array
    let uniqueCount = 1;  // Start counting unique values from the first element

    // Loop through the array using the second pointer
    while (second < arr.length) {
        // If the elements at the two pointers are the same, move the second pointer forward
        if (arr[first] === arr[second]) {
            second++;
        } else {
            // If the elements are different, increment the first pointer to the next unique position
            first++;
            // Place the new unique value at the position of the first pointer
            arr[first] = arr[second];
            // Increment the unique value count
            uniqueCount++;
            // Move the second pointer forward to check the next element
            second++;
        }
    }

    // Output the number of unique values
    console.log(uniqueCount);
}

// Example usage:
countUniqueValues([1, 1, 2, 3, 4, 4, 5, 5, 6]);
// Output: 6
