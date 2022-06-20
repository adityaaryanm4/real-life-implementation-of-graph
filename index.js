class Graph{
  
  constructor(){
    this.obj = {}
    this.noOfNodes = 0
  }
  //add node
  addNode(node){
    this.obj[node] = []
    this.noOfNodes++
  }
  //add edge
  addEdge(node1, node2){
    this.obj[node1].push(node2)
    this.obj[node2].push(node1)
  }
  //show connections TEMPLATE CODE NOT IMP.
  showConnections() { 
    const allNodes = Object.keys(this.obj); 
    for (let node of allNodes) { 
      let nodeConnections = this.obj[node]; 
      let connections = ""; 
      let i;
      for (i of nodeConnections) {
        connections += i + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
}
}

const myGraph = new Graph()

myGraph.addNode("person 0")
myGraph.addNode("person 1")
myGraph.addNode("person 2")
myGraph.addNode("person 3")
myGraph.addNode("person 4")
myGraph.addNode("person 5")
myGraph.addNode("person 6")

myGraph.addEdge("person 0","person 1")
myGraph.addEdge("person 0","person 2")
myGraph.addEdge("person 1","person 3")
myGraph.addEdge("person 1","person 2")
myGraph.addEdge("person 2","person 4")
myGraph.addEdge("person 3","person 4")
myGraph.addEdge("person 4","person 5")
myGraph.addEdge("person 6","person 5")

myGraph.showConnections()

console.log(myGraph)

  
