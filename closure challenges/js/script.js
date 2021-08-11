// 1.)  Implement the function divideBy(divisor).
// It should accept a divisor and return a function that takes the number n, divides it by the divisor and returns the the result.

const multiplyBy = (x) => {
  return (y) => {
    return x * y;
  };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy3 = multiplyBy(4);

console.log(multiplyBy2(10));    // 20
console.log(multiplyBy3(10));    // 30

