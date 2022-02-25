function increase() {
  let count = 10;
  return function () {
    count++;
    return count;
  }
}

const result = increase()
console.log(result());
console.log(result());
console.log(result());
console.log(result());
const result2 = increase();
console.log(result2());
console.log(result2());
const result3 = increase();
console.log(result3());
