// LinkedList find

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
const linkedListIterator = (head, target) => {
  if (head === null) return null
  let current = head
  while (current != null) {
    if (current.val === target) {
      console.log('find')
      return
    }
    current = current.next
  }
  console.log('not found')
}

// Recursive

// const linkedListRecursive = (head, target) => {
//   if (head === null) null
//   if (head.val === target) true

//   return linkedListIterator(head.next, target)
// }

// LinkList Traversal
linkedListIterator(a, 'k')

// console.log('Find A of LinkedList using Recursive method :')
// linkedListRecursive(a, 'a')
