// LinkList Traversal

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

linkedListIterator(a)

console.log('Print LinkedList using Recursive method :')
linkedListRecursive(a)
