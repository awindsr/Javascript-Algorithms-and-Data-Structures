// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is zero. Return an array that includes both
// values that sum to zero or undefined if no pair exists.

// Time Complexity: O(N)
// - The function uses a while loop that runs at most `N` times where `N` is the length of the array.
// - We are moving either the `left` pointer or the `right` pointer on each iteration, so the loop only runs once for each element, making it O(N).

// Space Complexity: O(1)
// - We are using only a constant amount of extra space (two pointers and a variable for the sum), so the space complexity is O(1).

function sumZero(arr) {
  // Initialize two pointers: one at the beginning (left) and one at the end (right) of the array
  let left = 0;
  let right = arr.length - 1;

  // Loop until the two pointers meet
  while (left < right) {
    // Calculate the sum of the values at the two pointers
    let sum = arr[left] + arr[right];

    // If the sum is zero, return the pair of values
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // If the sum is greater than zero, move the right pointer to the left to decrease the sum
    else if (sum > 0) {
      right--;
    }
    // If the sum is less than zero, move the left pointer to the right to increase the sum
    else {
      left++;
    }
  }

  // If no pair is found, return undefined
  return undefined;
}

// Example usage:
console.log(sumZero([3, 2, 1, 0, -1, -2, -3])); // Output: [3, -3]
