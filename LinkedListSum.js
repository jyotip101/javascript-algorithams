// LinkedList sum
// Iterator
const linkedListIterator = (head) => {
  let sum = 0
  let current = head

  while (current != null) {
    sum += current.val
    current = current.next
  }

  console.log('Sum of LinkedList using Iterator method :')
  console.log(sum)
}

// Recursive
const linkedListRecursive = (head) => {
  if (head === null) return `\n`

  return head.val + linkedListRecursive(head.next)
}

module.exports = {
  linkedListIterator,
  linkedListRecursive,
}
