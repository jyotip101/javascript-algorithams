const reverseString = (str) => {
  // base case
  if (str === '') return ' '

  // smallest amount of work i can don
  return reverseString(str.substring(1)) + str.charAt(0)
}

console.log(reverseString('hello'))
