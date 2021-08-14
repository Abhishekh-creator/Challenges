// Name Swap

// Challenge
// Reverse the provided two strings.

// Examples
// "Abraham Lincoln" ➞ "Lincoln Abraham"
// "Hank Aaron" ➞ "Aaron Hank"

// Approach 1 - // Using Built in Functions

// Tools
// String.prototype.split()
// http://bit.ly/string-split
// Array.prototype.reverse()
// http://bit.ly/array-reverse-method
// Array.prototype.join()
// http://bit.ly/array-join

function nameSwap(str) {

  // step 1 -> split string into an array and assign to var `arrayToString`
  var arrayToString = str.split(' ');
  // step 2 -> reverse array and assign to var `reverseArray`
  var reverseArray = arrayToString.reverse();
  // step 3 -> join array into string and assign to var `reverseString`
  var reverseString = arrayToString.join(' ');
  // step 4 -> return `reverseString`
  return reverseString;
  // alternative -> complete all these steps in one line of code
  // return str.split(' ').reverse().join(' ');
}

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));