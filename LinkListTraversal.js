// LinkList Traversal

// iterator menthod
const linkedListIterator = (head) => {
  console.log('Print LinkedList using Iterator method :')
  let current = head
  while (current !== null) {
    console.log(current.val)
    current = current.next
  }
}

// recursive menthod
const linkedListRecursive = (head) => {
  if (head === null) return

  console.log(head.val)
  linkedListRecursive(head.next)
}

module.exports = {
  linkedListIterator,
  linkedListRecursive,
}
