class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  let nodeA = new Node("A");
  let nodeB = new Node("B");
  let nodeC = new Node("C");
  
  nodeA.next = nodeB;
  nodeB.next = nodeC;
  And here's an example of how to represent this linked list in HTML:
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
  