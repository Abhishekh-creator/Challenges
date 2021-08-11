//2.) It should take a string and return true if the string meets both of the following conditions:
// 1. The length of the string is less than 10 characters.
// 2. The string consists of a single word (doesn't have spaces in                                                           it)
// 3. Otherwise, it should return false

const words = ['good', 'things', 'happen', 'if', 'you', 'do', 'something good', 'for_a_long_time'];

const isShortWord = (s) => {
  return s.length < 10
}
const shortWords = words.filter(isShortWord);
console.log(shortWords);