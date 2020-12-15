// for (var i = 0; i < animals.length; i++){
//   console.log(i,animals[i])
// }
// console.log(i)
// for (let i = 0; i < animals.length; i++){
//   console.log(i,animals[i])
// }
// console.log(i)
// function doubleArr(arr) {
//   const result =[]
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double)
//   }
//   return result
// }

// console.log(doubleArr([1,2,3]))

// function outer() {
//   let movie = 'Amadeus'
//   function inner() {
//     console.log(movie.toUpperCase())
//   }
//   inner()
// }

// const add = function (x, y) {
//   return x + y;
// }
// const subtract = function (x, y) {
//   return x - y;
// }
// const multiply = function (x, y) {
//   return x * y;
// }
// const divide = function (x, y) {
//   return x / y;
// }
// const operations = [add, subtract, multiply, divide]
// for (let func of operations) {
//   let result = func(30, 5);
//   console.log(result);
// } 

// function callTwice(func) {
//   func();
//   func();
// }
// function cry() {
//   console.log("BOO HOO I'M SO SAD");
// }

// function rage() {
//   console.log("I hate everything!")
// }

// // callTwice(cry)
// // callTwice(rage)

// function repeaNTimes(action, num) {
//   for (let i = 0; i < num; i++){
//     action()
//   }
// }

// // repeaNTimes(rage,13)
// // repeaNTimes(cry, 100)

// function pickOne(f1, f2) {
//   let rand= Math.random()
//   if (rand < 0.5) { f1() } else { f2() }
  
// }
// pickOne(cry,rage)