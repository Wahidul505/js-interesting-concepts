// checking if equal in primitive data types 
const a = 0;
const b = false;
if (a == b) {
  console.log('both values are equal');
}
else {
  console.log('they are not equal');
}
// checking if equal in non primitive data types 
const c = { name: 'wahidul', age: 23 };
const d = { name: 'wahidul', age: 23 };
if (c === d) {
  console.log('both are same');
}
else {
  console.log('they are not same');
}
let x = { name: 'wahid', age: 23 };
let y = x;
console.log(y);
if (x === y) {
  console.log('matched');
}
else {
  console.log('unmatched');
}