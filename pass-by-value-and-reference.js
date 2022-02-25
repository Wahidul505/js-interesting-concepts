let a = 12;
// {
//   a = 13;
// }
// console.log(a);
function sum(num1, num2) {
  num1 = 11;
  num2 = 22;
}
const x = 12;
const y = 20;
sum(x, y);
console.log(x, y)
function show(obj) {
  obj.name = 'nothing';
}
const randomObj = { name: 'something' };
show(randomObj);
console.log(randomObj);