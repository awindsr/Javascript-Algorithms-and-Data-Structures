// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// first array has its corresponding value squared in the second array.
// The frequency of values must be the same.

// This solution uses the frequency counter pattern to achieve an O(n) time complexity.
// Explanation of O(n):
// 1. The function first checks if the lengths of the arrays are the same, which is O(1).
// 2. Then, it iterates over each element in arr1 to build frequencyCounter1, which takes O(n) time.
// 3. It does the same for arr2 to build frequencyCounter2, which is another O(n).
// 4. Finally, it iterates over the keys in frequencyCounter1 to compare the frequencies, which is O(n) as well.
// Since each major operation (array traversal and frequency comparison) is linear, the overall time complexity is O(n).

function same(arr1, arr2) {
    // Check if the arrays have the same length. If not, they can't be "same".
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Create objects to count the frequency of each value in both arrays.
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
  
    // Populate frequencyCounter1 with counts of each value in arr1.
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
  
    // Populate frequencyCounter2 with counts of each value in arr2.
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
  
    // Loop through each key in frequencyCounter1 to validate conditions.
    for (let key in frequencyCounter1) {
      // Check if the square of the current key exists in frequencyCounter2.
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }
      // Check if the frequency of the squared value matches in both counters.
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    }
  
    // If all checks pass, return true.
    return true;
  }
  