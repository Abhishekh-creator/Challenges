// Name Swap

// Challenge
// Reverse the order of two provided strings.

// Examples
// "Abraham Lincoln" ➞ "Lincoln Abraham"
// "Hank Aaron" ➞ "Aaron Hank"

/// Approach 1 - Add array indices/indexes

// Tools
/// String.prototype.split()
// http://bit.ly/string-split
// Accessing array elements
// http://bit.ly/arrays-bracket-notation


function nameSwap(str) {

  // step 1 -> turn string into an array of words and assign to variable `array`
  var arr = str.split(' ');
  // step 2 -> return the array at index 1 followed by a space then the array at index 0
  return arr[1] + ' ' + arr[0];
}

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));