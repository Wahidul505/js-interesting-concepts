// example of changing value primitive data types 
let a = 'hello';
let b = a;
console.log(a, b);
a = 'gello';
console.log(a, b);
// example of changing value of non primitive data types 
let x = { say: 'How are you?' };
let y = x;
console.log(x, y);
x.say = 'How dare you?';
console.log(x, y);
y.say = 'How far you?'
console.log(x, y);