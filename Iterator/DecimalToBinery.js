// decimal base 10
// binary base 2
// eg:- 23
// 23 / 2 = 11 reminder - 1
// 11 / 2 = 5  reminder - 1
// 5 / 2  = 2  reminder - 1
// 2 / 2  = 1  reminder - 0
// 1 / 2  = 0  reminder - 1
// result = 1 0 1 1 1

const decimalToBinary = (decimal, result) => {
  while (decimal != 0) {
    result = (decimal % 2) + result
    decimal = Math.floor(decimal / 2)
  }
  return result
}

console.log(decimalToBinary(23, ''))
