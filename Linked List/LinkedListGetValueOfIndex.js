// LinkedList Get Value Of Index
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
const linkedListIterator = (head, index) => {
  let current = head
  let count = 0

  while (current != null) {
    if (count === index) {
      console.log(`${current.val} is at index ${count}`)
      return
    }
    count += 1
    current = current.next
  }
  console.log(`${index} index is not present`)
  return
}

// Recursive
const linkedListRecursive = (head, index) => {
  if (head === null) return null
  if (index === 0) return head.val

  return linkedListRecursive(head.next, index + 1)
}

console.log('Sum of LinkedList using Iterator method :')
linkedListIterator(a, 0)

console.log('Sum of LinkedList using Recursive method :')
console.log(linkedListRecursive(a, 0))
