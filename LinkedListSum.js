// LinkedList sum

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
  let sum = ''
  let current = head

  while (current != null) {
    sum += current.val
    current = current.next
  }

  console.log(sum)
}

// Recursive
const linkedListRecursive = (head) => {
  if (head === null) return ''

  return head.val + linkedListRecursive(head.next)
}

console.log('Sum of LinkedList using Iterator method :')
linkedListIterator(a)

console.log('Sum of LinkedList using Recursive method :')
console.log(linkedListRecursive(a))
