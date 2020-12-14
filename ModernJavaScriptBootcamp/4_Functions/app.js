// function grumpus() {
//   console.log("Grumpus Running!")
// }
// for (let i = 0; i < 50; i++){
//   grumpus()
// }

//Generating Dice roll
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1
//   console.log(`Rolled ${roll}`)
// }
// // rollDie()

// function greet(name) {
//   console.log(` Hey ${name}`)
// }
// greet('Vidit')

// function square(num) {
//   console.log(num * num)
// }
// function sum(x, y) {
//   console.log(x+y)
// }
// function divide(a, b) {
//   console.log(a / b);
// }
// function add(x, y) {
//   return x + y
// }
// const sum = add(5, 6)
// 
// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   }
//   else {
//     return false
//   }
// }

function isPurple(color) {
 return color.toLowerCase() === 'purple'
}
function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true
    }
  }
  return false
}