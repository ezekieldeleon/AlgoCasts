// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Time complexity is O(n*log(n)) since we are using a sort.
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


/*
//Solution 1: The time complexity here is O(n) since we are only looping once on each word.
function anagrams(stringA, stringB) {
    let word1 = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
    let word2 = stringB.replace(/[^\w]/g, '').toLowerCase().split('');
    const mapA = new Map();
    const mapB = new Map();
    var flag = true;

    if (word1.length !== word2.length) {
        return false
    } else {
        for (var char of word1) {
            if (mapA.has(char)) {
                mapA.set(char, mapA.get(char) + 1);
            } else {
                mapA.set(char, 1);
            }
        }
        for (var char of word2) {
            if (mapB.has(char)) {
                mapB.set(char, mapB.get(char) + 1);
            } else {
                mapB.set(char, 1);
            }
        }
        for (var [key, value] of mapA.entries()) {
            if (!mapB.has(key) && mapB.get(key) !== value) return false;
        }
        return true;
    }
}
*/
module.exports = anagrams;