// LinkedList Value

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

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

linkedListIterator(a)

linkedListRecursive(a)
