// LinkedList Reverse List
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
  let prev = null
  let current = head

  while (current != null) {
    const Next = current.next
    current.next = prev
    prev = current
    current = Next
  }

  printList(prev)
}

const printList = (head) => {
  const list = []
  let current = head

  while (current != null) {
    list.push(current.val)
    current = current.next
  }
  console.log(list)
}
// Recursive
const linkedListRecursive = (head, prev = null) => {
  if (head === null) return prev

  const Next = head.next
  head.next = prev
  prev = head
  return linkedListRecursive(Next, head)
}

// console.log('Reverse of LinkedList using Iterator method :')
console.log('LinkedList before')
printList(a)
// console.log('LinkedList after')
// linkedListIterator(a)

console.log('Reverse of LinkedList using Recursive method :')
console.log('LinkedList after')
printList(linkedListRecursive(a))
