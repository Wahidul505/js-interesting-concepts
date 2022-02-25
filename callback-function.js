// callback function without return 
function morningGreet(greet, name) {
  console.log(greet);
  greet(name);
}
function afterNoonGreet(personName) {
  console.log('Good Afternoon', personName);
}
function eveningGreet(personName) {
  console.log('Good Evening', personName);
}
morningGreet(afterNoonGreet, 'Wahidul');
morningGreet(eveningGreet, 'Simra');
// callback function with return
function say(type) {
  const result = type()
  console.log(result);
}
function sayHello() {
  return 'Hello !';
}
function sayHi() {
  return 'Hi !';
}
