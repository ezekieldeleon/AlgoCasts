// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var sign = Math.sign(n);
    var stringArray = n.toString().split('');
    return parseInt(stringArray.reverse().join('')) * sign;
}

module.exports = reverseInt;