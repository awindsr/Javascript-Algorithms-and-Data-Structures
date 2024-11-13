// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive
// elements in the array.

// Time Complexity: O(N), where N is the length of the array
// Space Complexity: O(1), since we're only using a fixed amount of extra space

function maxSubArraySum(arr, num) {
    // If the length of the array is less than the subarray size `num`,
    // it's impossible to find a subarray of that size, so return null.
    if (arr.length < num) {
        return null;
    }

    // Initialize `maxSum` to 0 and `tempSum` to store the sum of the current subarray
    let maxSum = 0;
    let tempSum = 0;

    // Calculate the sum of the first 'num' elements
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];  // Sum the first `num` elements
    }

    // Set `tempSum` to `maxSum` to use it in the sliding window calculation
    tempSum = maxSum;

    // Start the sliding window: from the index `num` onwards
    for (let i = num; i < arr.length; i++) {
        // Slide the window by subtracting the element that is left behind
        // and adding the new element that is coming into the window.
        tempSum = tempSum - arr[i - num] + arr[i];

        // Update `maxSum` to store the largest sum found
        maxSum = Math.max(tempSum, maxSum);
    }

    // Return the maximum sum found
    return maxSum;
}

// Example usage:
console.log(maxSubArraySum([1, 2, 5, 8, 1], 3));  // Expected output: 14
