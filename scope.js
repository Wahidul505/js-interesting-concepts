const favNum = 12;
console.log(favNum);
console.log(x);
{
  console.log(favNum);
  const notFavNum = 5;
  console.log(notFavNum);
  var x = 75;
}
// console.log(notFavNum);
function add(num1, num2) {
  const sum = num1 + num2;
  if (sum > 4) {
    const show = 'sum is bigger';
    console.log(show);
    console.log('num1', num1);
    var y = 20;
  }
  var z = 30;
  // console.log(show);
  return sum;

}
console.log(add(3, 5));
// console.log(num2);
// console.log(sum);
console.log(x);
// console.log(y);
console.log(z);