# Coding Questions

## Frequency Counter Method

1. **Find the First Non-Repeating Character**
   - **Question:** Given a string, find the first character that appears only once.
   - **Input:** `"swiss"`
   - **Output:** `"w"`

2. **Check for Anagrams**
   - **Question:** Given two strings, check if they are anagrams of each other.
   - **Input:** `"listen", "silent"`
   - **Output:** `true`

3. **Most Frequent Character**
   - **Question:** Find the character that appears the most in a given string.
   - **Input:** `"banana"`
   - **Output:** `"a"`

4. **Character Frequency Comparison**
   - **Question:** Given two strings, determine if both strings have the same character frequencies.
   - **Input:** `"abca", "bcaa"`
   - **Output:** `true`

5. **Find All Duplicates in an Array**
   - **Question:** Given an array of integers, find all elements that appear more than once.
   - **Input:** `[4, 3, 2, 7, 8, 2, 3, 1]`
   - **Output:** `[2, 3]`

6. **Count Elements with Greater Frequency**
   - **Question:** Given an array of integers, return the count of numbers with frequency greater than `k`.
   - **Input:** `[1, 1, 1, 2, 2, 3, 3, 3, 3]`, `k=2`
   - **Output:** `2` (for numbers `1` and `3`)

7. **Find Missing Letters**
   - **Question:** Given two strings, find the letter missing from the second string that was in the first.
   - **Input:** `"abcde", "abde"`
   - **Output:** `"c"`

8. **Longest Substring Without Repeating Characters**
   - **Question:** Find the length of the longest substring without repeating characters.
   - **Input:** `"pwwkew"`
   - **Output:** `3` (for substring `"wke"`)

9. **Element Count Greater Than n/k**
   - **Question:** Given an array of integers, return elements that appear more than `n/k` times.
   - **Input:** `[3, 1, 2, 2, 1, 2, 3, 3]`, `k=4`
   - **Output:** `[2, 3]`

10. **Majority Element**
    - **Question:** Find the element that appears more than `n/2` times in an array.
    - **Input:** `[3, 2, 3]`
    - **Output:** `3`

---

## Sliding Window Method

1. **Maximum Sum Subarray of Length K**
   - **Question:** Find the maximum sum of a subarray with length `k`.
   - **Input:** `[2, 1, 5, 1, 3, 2]`, `k=3`
   - **Output:** `9` (for subarray `[5, 1, 3]`)

2. **Longest Substring with K Distinct Characters**
   - **Question:** Find the length of the longest substring with at most `k` distinct characters.
   - **Input:** `"araaci"`, `k=2`
   - **Output:** `4` (for substring `"araa"`)

3. **Minimum Size Subarray Sum**
   - **Question:** Find the minimal length of a contiguous subarray for which the sum is at least `S`.
   - **Input:** `[2, 1, 5, 2, 3, 2]`, `S=7`
   - **Output:** `2` (for subarray `[5, 2]`)

4. **Count of Anagrams in a String**
   - **Question:** Count occurrences of an anagram of `pattern` within `text`.
   - **Input:** `text="cbaebabacd"`, `pattern="abc"`
   - **Output:** `2`

5. **Longest Subarray with Ones after Replacement**
   - **Question:** Find the length of the longest subarray with ones, where you can replace up to `k` zeros.
   - **Input:** `[1,1,0,0,1,1,1,0,1,1,1]`, `k=2`
   - **Output:** `8`

6. **Max Consecutive Ones III**
   - **Question:** Given a binary array and an integer `k`, find the maximum number of consecutive `1`s you can have by flipping at most `k` `0`s.
   - **Input:** `[1,1,0,0,1,1,1,0,1,1,1]`, `k=2`
   - **Output:** `8`

7. **Subarray Product Less Than K**
   - **Question:** Count subarrays with products less than `k`.
   - **Input:** `[10, 5, 2, 6]`, `k=100`
   - **Output:** `8`

8. **Longest Substring with At Most K Unique Characters**
   - **Question:** Find the length of the longest substring with at most `k` unique characters.
   - **Input:** `"aabacbebebe"`, `k=3`
   - **Output:** `7`

9. **Fixed Window Average**
   - **Question:** Find the average of each subarray of length `k`.
   - **Input:** `[1, 2, 3, 4, 5, 6]`, `k=3`
   - **Output:** `[2.0, 3.0, 4.0, 5.0]`

10. **Find Subarrays with Sum K**
    - **Question:** Find the number of subarrays that sum to `k`.
    - **Input:** `[1, 1, 1]`, `k=2`
    - **Output:** `2`

---

## Multiple Pointer Method

1. **Two Sum**
   - **Question:** Given an array and a target, find two numbers that sum to the target.
   - **Input:** `[2, 7, 11, 15]`, `target=9`
   - **Output:** `[2, 7]`

2. **Reverse a String**
   - **Question:** Reverse the input string.
   - **Input:** `"hello"`
   - **Output:** `"olleh"`

3. **Remove Duplicates from Sorted Array**
   - **Question:** Remove duplicates from a sorted array, returning the new length.
   - **Input:** `[0,0,1,1,1,2,2,3,3,4]`
   - **Output:** `5`

4. **Move Zeroes to End**
   - **Question:** Move all zeroes in an array to the end, maintaining the order of non-zero elements.
   - **Input:** `[0,1,0,3,12]`
   - **Output:** `[1,3,12,0,0]`

5. **Squares of a Sorted Array**
   - **Question:** Given a sorted array, return an array of squares of each number, sorted.
   - **Input:** `[-4,-1,0,3,10]`
   - **Output:** `[0,1,9,16,100]`

6. **Valid Palindrome**
   - **Question:** Check if a string is a palindrome, considering only alphanumeric characters and ignoring cases.
   - **Input:** `"A man, a plan, a canal: Panama"`
   - **Output:** `true`

7. **Three Sum**
   - **Question:** Find all unique triplets in an array that sum to zero.
   - **Input:** `[-1,0,1,2,-1,-4]`
   - **Output:** `[[-1, -1, 2], [-1, 0, 1]]`

8. **Container With Most Water**
   - **Question:** Given heights, find two lines that together with the x-axis form a container that holds the most water.
   - **Input:** `[1,8,6,2,5,4,8,3,7]`
   - **Output:** `49`

9. **Sort Colors (Dutch National Flag Problem)**
   - **Question:** Sort an array with 0s, 1s, and 2s without using any sorting algorithms.
   - **Input:** `[2,0,2,1,1,0]`
   - **Output:** `[0,0,1,1,2,2]`

10. **Find Pair with Minimum Difference**
    - **Question:** Given two arrays, find a pair of elements (one from each array) with the minimum difference.
    - **Input:** `[1, 3, 15, 11, 2]`, `[23, 127, 235, 19, 8]`
    - **Output:** `[11, 8]`

---

Each question is designed to illustrate the application of a specific problem-solving technique, providing a hands-on approach to mastering these methods.
