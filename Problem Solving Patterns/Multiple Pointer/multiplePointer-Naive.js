// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is zero. Return an array that includes both
// values that sum to zero or undefined if no pair exists.

// Big O Complexity Explanation:
// - The function uses two nested loops to compare every pair of integers in the array.
// - The outer loop runs `n` times (where `n` is the length of the array).
// - The inner loop also runs `n` times for each iteration of the outer loop.
// - Therefore, the time complexity of this approach is O(n^2), where `n` is the length of the array.
// - Space complexity is O(1) because we are using only a constant amount of extra space.

function sumZero(arr) {
    // Outer loop iterates over each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Inner loop iterates over each element in the array to find a pair
        for (let j = 0; j < arr.length; j++) {
            // Check if the sum of the current pair is zero
            if (arr[i] + arr[j] === 0) {
                // If a pair with a sum of zero is found, return it
                return [arr[i], arr[j]];
            }
        }
    }
}

// Example usage:
console.log(sumZero([3, 2, 1, 0, -1, -2, -3])); // Output: [3, -3]
