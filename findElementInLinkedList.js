class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(head, elem) {
  if (head == null || elem == null) {
    return -1
  }

  let idx = 0
  let currentNode = head
  while (currentNode != null) {
    if (currentNode.value == elem) {
      return idx
    }
    idx += 1
    currentNode = currentNode.next
  }

  return -1
}

// let n5 = new Node(5)
// let n4 = new Node(4, n5)
// let n3 = new Node(3, n4)
// let n2 = new Node(2, n3)
// let n1 = new Node(1, n2)

// console.log(solution(n1, 4))