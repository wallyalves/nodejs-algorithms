/*
* First loop with V-1, where V is the total number of nodes or vertex
* the operation in it consists of a similar approach taken in dijkstra's algorithm
* lastly, a final loop is required to identify circles with negative weight. If  this is the case,
* an alert is sent. The algorithm fails if any negative cycle is found.
*/

// graph hash table
const graph = {
  a: {          // node
    b: 5,       // inner properties represent the cost to get to its neighbors. i.e to get to b from a costs 5
    c: 2
  },
  b: {
    d: 4,
    e: -1
  },
  c: {
    b: 8,
    e: -2
  },
  d: {
    f: 3,
    e: 6
  },
  e: {
    f: 1
  }
};


// costs hash table. Designed to keep the costs up to date as the algorithm progresses
let costs = {
  b: 5,
  c: 2,
  d: 99999,
  e: 99999,
  f: 99999
};

let queue = [];
/*
* runBellManFord
* @signature runBellManFord :: object -> number
* @description run Bellman-Ford's algorithm
* @returns number :: represents final weight to get to target or error if any negative cycle has been
* identified
*/
const runBellManFord = (sourceGraph, start) => {
  const sourceGraphLength = Object.keys(sourceGraph).length;

  // first loop relaxes edges V times
  for (let i = 0; i < sourceGraphLength; i ++) {
    // adds start neighbors to the queue
    queue = Object.keys(sourceGraph[start]);

    while (queue.length !== 0) {
      let currentNode = queue.splice(0, 1)[0];
      let neighbors = sourceGraph[currentNode];

      for (let z in neighbors) {
        let newCost = costs[currentNode] + neighbors[z];
        if (newCost < costs[z]) {
            costs[z] = newCost;
        }
        // add its neighbors to the queue
        queue.push(z);
      }
    }

    // TODO implement last loop to identify any negative weight cycle

  }

  console.log(`Running Bellman-Ford, the final cost to F is: ${costs['f']}`);
};

runBellManFord(graph, 'a');
