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

// function isPurple(color) {
//  return color.toLowerCase() === 'purple'
// }
// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === 'purple' || color === 'magenta') {
//       return true
//     }
//   }
//   return false
// }
// function isValidPassword(password, username) {
//   const len = password.length >= 8
//   const space = password.indexOf(' ') !== -1
//   const containsUsername = password.indexOf(username) !==-1
//   if (len && space && containsUsername) {
//     return true
//   }
//   return false
  
// }


// console.log(isValidPassword('rockstar12345','vidit0210'))

//Average
// function avg(arr) {
//   let total = 0
//   for (num of arr) {
//     total += num
//   }
//   let result = total / arr.length;
//   return result
// }
// console.log(avg([0,50]))

function isPangram(sentence) {
  let sentence = sentence.toLowerCase()
  let str = 'qwertyuioplkjhgfdsamnbvcxz'
  for (let char of str) {
    if (sentence.indexOf('char') === -1) {
      return false
    }
  }
  return true;
  
}