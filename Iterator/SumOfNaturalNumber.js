// Sum of Natural numbers
//  0, 1, 2, 3, 4, 5...

const sumOfNaturalName = (num, result = 0) => {
  while (num >= 1) {
    result += num
    num = num - 1
  }
  return result
}

console.log(sumOfNaturalName(5))
