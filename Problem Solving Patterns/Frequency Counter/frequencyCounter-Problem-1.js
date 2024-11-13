// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as "cinema" formed from "iceman".

function validAnagram(string1, string2) {
  // Convert both strings to lowercase to ensure the comparison is case-insensitive.
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  // First, check if the strings are of the same length.
  // If not, they cannot be anagrams, so return false.
  if (string1.length !== string2.length) {
    console.log("Not an anagram");
    return false;
  }

  // Create frequency counters for each string to track the occurrence of each character.
  let charFrequency1 = {};
  let charFrequency2 = {};

  // Loop through each character in string1 and build the frequency counter for string1.
  for (let char of string1) {
    // Increase the count of the character in charFrequency1.
    charFrequency1[char] = (charFrequency1[char] || 0) + 1;
  }

  // Loop through each character in string2 and build the frequency counter for string2.
  for (let char of string2) {
    // Increase the count of the character in charFrequency2.
    charFrequency2[char] = (charFrequency2[char] || 0) + 1;
  }

  // Loop through the frequency counter of string1 to compare it with string2.
  for (let key in charFrequency1) {
    // Check if the current character exists in charFrequency2.
    if (!(key in charFrequency2)) {
      console.log("Not an anagram");
      return false; // If not, the strings are not anagrams.
    }
    // Check if the frequency of the current character in both strings is the same.
    if (charFrequency2[key] !== charFrequency1[key]) {
      console.log("Not an anagram");
      return false; // If the frequencies do not match, the strings are not anagrams.
    }
  }

  // If all checks pass, the strings are anagrams, so return true.
  console.log("It is an anagram");
  return true;
}

// Example:
// Input: "cinema", "iceman"
// Output: true
validAnagram("cinema", "iceman");  // Output: "It is an anagram"
validAnagram("hello", "world");    // Output: "Not an anagram"
