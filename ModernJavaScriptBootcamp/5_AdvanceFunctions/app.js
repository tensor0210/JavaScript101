let animals = ['grizzly bear', 'panda bear', 'spectacled bear']
// for (var i = 0; i < animals.length; i++){
//   console.log(i,animals[i])
// }
// console.log(i)
// for (let i = 0; i < animals.length; i++){
//   console.log(i,animals[i])
// }
// console.log(i)
function doubleArr(arr) {
  const result =[]
  for (let num of arr) {
    let double = num * 2;
    result.push(double)
  }
  return result
}

console.log(doubleArr([1,2,3]))