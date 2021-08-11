const multiplyBy = (x) => {
  return (y) => {
    return x * y;
  };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy3 = multiplyBy(4);

console.log(multiplyBy2(10));    // 20
console.log(multiplyBy3(10));    // 30

