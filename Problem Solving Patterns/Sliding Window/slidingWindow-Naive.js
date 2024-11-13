// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive
// elements in the array.

// Time Complexity: O(N * num) where N is the length of the array
// Space Complexity: O(1), since we're using a constant amount of extra space

function maxSubArraySum(arr, num) {
    // Edge case: if the number of consecutive elements (num) is greater than the array length,
    // it's impossible to find a valid subarray, so return null.
    if (num > arr.length) {
        return null;
    }

    // Initialize the max variable to hold the maximum sum found.
    // We use -Infinity to ensure that any sum will be greater than this initial value.
    let max = -Infinity;

    // Outer loop iterates through the array to examine each possible subarray of length 'num'.
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;  // Temporary variable to hold the sum of the current subarray of length 'num'

        // Inner loop sums the elements of the current subarray.
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];  // Add each element in the subarray to temp.
        }

        // After summing the current subarray, check if its sum is greater than the current max sum.
        if (temp > max) {
            max = temp;  // Update the max sum if the current sum is larger.
        }
    }

    // Output the maximum sum found for any subarray of length 'num'.
    console.log(max);
}

// Example usage:
maxSubArraySum([1, 2, 5, 8, 1], 3);  // Expected output: 14
