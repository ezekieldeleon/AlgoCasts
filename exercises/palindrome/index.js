// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
// Solution 1
function palindrome(str) {
  if (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  )
    return true;
  return false;
}
*/

// Solution 2
function palindrome(str) {
  return str.split('').every((char, index) => char === str[str.length - index - 1]);
}
module.exports = palindrome;