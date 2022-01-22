// Sum of Natural numbers
//  0, 1, 2, 3, 4, 5...

const sumOfNaturalName = (num) => {
  if (num <= 1) return num

  return num + sumOfNaturalName(num - 1)
}

console.log(sumOfNaturalName(5))
