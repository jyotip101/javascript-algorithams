// LinkedList find
// Iterator
const linkedListIterator = (head, target) => {
  let current = head
  while (current != null) {
    if (current.val === target) {
      console.log(true)
    }
    current = current.next
  }
  console.log(false)
}

// Recursive
const linkedListRecursive = (head, target) => {
  if (head === null) false
  if (head.val === target) true

  return linkedListIterator(head.next, target)
}

module.exports = {
  linkedListIterator,
  linkedListRecursive,
}
