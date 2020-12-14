// function grumpus() {
//   console.log("Grumpus Running!")
// }
// for (let i = 0; i < 50; i++){
//   grumpus()
// }

//Generating Dice roll
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1
  console.log(`Rolled ${roll}`)
}
// rollDie()

function greet(name) {
  console.log(` Hey ${name}`)
}
greet('Vidit')