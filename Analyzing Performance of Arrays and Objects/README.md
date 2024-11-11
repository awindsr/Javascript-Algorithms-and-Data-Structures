# Array Methods and Time Complexity

## Overview

This lecture covers various built-in array methods in JavaScript, their time complexities, and provides insights into how the size of an array affects the performance of operations. We focus on explaining how the time complexity grows as the number of elements in an array increases and explore key array operations such as `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, and others.

## Key Array Methods

### 1. **Push & Pop**

- **Time Complexity**: O(1) (Constant time)
- **Description**:  
  - `push`: Adds one or more elements to the end of an array.
  - `pop`: Removes the last element from an array.
  
  Both operations are constant time, meaning the time it takes to add or remove elements is not affected by the size of the array.

### 2. **Shift & Unshift**

- **Time Complexity**: O(n) (Linear time)
- **Description**:  
  - `shift`: Removes the first element from an array.
  - `unshift`: Adds one or more elements to the beginning of an array.
  
  These operations are slower because they require re-indexing all elements after the change. As the number of elements grows, the time required increases proportionally.

### 3. **Slice & Splice**

- **Time Complexity**: O(n) (Linear time)
- **Description**:  
  - `slice`: Creates a shallow copy of a portion of an array without modifying the original array.
  - `splice`: Adds/removes elements from an array at a specific index and can modify the original array.
  
  Both `slice` and `splice` operate in linear time because they involve copying or moving elements based on the number of items in the array.

### 4. **Array Sorting**

- **Time Complexity**: O(n log n)  
- **Description**:  
  Sorting an array is generally slower than simple operations like `push` or `pop`. The time complexity varies based on the sorting algorithm, but most algorithms have a time complexity of O(n log n), where `n` is the number of elements to sort.

### 5. **Map, Filter, Reduce, ForEach**

- **Time Complexity**: O(n) (Linear time)
- **Description**:  
  These methods loop over every element in the array and perform a specific operation (e.g., transforming values, filtering elements, accumulating results). The time taken grows linearly with the size of the array.
  - `map`: Creates a new array with the results of calling a function on every element.
  - `filter`: Creates a new array with all elements that pass a test.
  - `reduce`: Applies a function against an accumulator and each element in the array to reduce it to a single value.
  - `forEach`: Executes a provided function once for each array element.

### 6. **Sorting Arrays**

- **Time Complexity**: O(n log n)
- **Description**:  
  Sorting an array requires comparing and rearranging elements, which is more time-consuming than simpler operations. The time complexity of sorting varies, but many common algorithms use O(n log n) time.

## Summary

- **Push/Pop**: O(1) — Fast for adding/removing elements at the end.
- **Shift/Unshift**: O(n) — Slower for adding/removing elements at the beginning due to re-indexing.
- **Slice/Splice**: O(n) — Linear time, affected by the size of the array.
- **Sort**: O(n log n) — Slower due to sorting algorithms.
- **Map/Filter/Reduce/ForEach**: O(n) — Operations that loop through each element.

## Final Notes

- Arrays are efficient when order matters but can be slow for operations that modify the beginning of the array or require sorting.
- Understanding the time complexity of array methods helps optimize performance, especially when working with large datasets.
- You don't need to memorize all of this information, but understanding how it affects performance can guide you in choosing the right operations for different use cases.
