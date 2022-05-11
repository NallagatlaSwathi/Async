// var a = 10;

// const add = function add(a, b) {
//   return a + b;
// };

// console.log(add(1, 3));

{
  console.log(a);
  console.log(b);
  var a = 0;

  // You can't access let variable before declaration
  // Above part is TDZ(Temporal dead zone)
  let b = 0;
}
