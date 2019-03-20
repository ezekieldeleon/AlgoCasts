// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
// Solution 1
function reverse(str) {
    const arr = str.split(''); // turns string into an array
    arr.reverse();
    return arr.join(''); // joins the characters back into a string.
}
*/
/*
// Solution 2
function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}
*/

// Solution 3
function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;