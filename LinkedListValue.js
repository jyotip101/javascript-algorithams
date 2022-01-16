// LinkedList Value
// Iterator
const linkedListIterator = (head) => {
  const value = []
  let current = head

  while (current !== null) {
    value.push(current.val)
    current = current.next
  }

  console.log('Print LinkedList using Iterator method :')
  console.log(value)
}

// Recursive
const linkedListRecursive = (head) => {
  const value = []

  fillValueOnLinkedList(head, value)

  console.log('Print LinkedList using Recursive method :')
  console.log(value)
}

const fillValueOnLinkedList = (head, value) => {
  if (head === null) return
  value.push(head.val)

  fillValueOnLinkedList(head.next, value)
}

module.exports = {
  linkedListIterator,
  linkedListRecursive,
}
