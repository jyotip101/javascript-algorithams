// if we read frantword and backward both are same
// eg:- racecar

// we check for first char and last char and compare

const palindrome = (str) => {
  // base case / stopping condintion
  if (str.length === 0 || str.length == 1) return true

  // Do some work to shrink the problem space
  if (str.charAt(0) == str.charAt(str.length - 1))
    return palindrome(str.substring(1, str.length - 1))

  return false
}

console.log(palindrome('racecar'))

console.log(palindrome('hello'))
