// Getting Undefined Cases
// 1.
let first;
console.log(first);
// 2.
function second(a, b) {
  const sum = a + b;
  // didn't return anything 
}
const result = second(12, 16);
console.log(result);

// 3.
function third(a, b) {
  const mult = a * b;
  return;
}
const result2 = third(2, 4);
console.log(result2);
// 4.
function fourth(a, b) {
  console.log(b);
}
fourth(11);
// 5.
const fifth = { name: 'wahidul', age: 23, height: 5.6 };
console.log(fifth.profession);
// 6.
const sixth = [12, 42, 51, 35];
console.log(sixth[-1]);
// 7.
const seventh = ['hablu', 'kablu', 'tablu'];
delete seventh[1];
// console.log(seventh);
console.log(seventh[1]);
// 8.
const eight = undefined;
console.log(eight);

// Getting null cases 
const abc = null;
console.log(abc);