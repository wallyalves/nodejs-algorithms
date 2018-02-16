// graph hash table
const graph = {
  a: {          // node
    b: 5,       // inner properties represent the cost to get to its neighbors. i.e to get to b from a costs 5
    c: 2
  },
  b: {
    d: 4,
    e: 2
  },
  c: {
    b: 8,
    e: 7
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

// array for keeping track of processed nodes
let processedNodes = [];

/*
* findLowestCost
* @signature findLowestCost :: object -> string
* @description finds lowest cost in the hash table that has not been yet processed
* @returns string :: represents the node with lowest cost available (not processed)
*/
const findLowestCost = (costsObject) => {
  let lowestCostNode = "None";
  let lowestCost = 9999999;
  // loop on keys
  for(let node in costsObject) {
      // if key is not in array for processed nodes, continue with step
      if(processedNodes.find(item => item === node) == undefined) {
          let cost = costsObject[node];
          if(cost < lowestCost) {
            lowestCost = cost;
            lowestCostNode = node;
          }
      }
  }
  // returns node after loop
  return lowestCostNode;
}

/*
* runDijkstra
* @signature runDijkstra :: object -> number
* @description run Dijkstra's algorithm for a given graph
* @returns number :: represents final weight to get to target
*/
const runDijkstra = (sourceGraph) => {
  let initialNode = findLowestCost(costs);
  // start loop and runs until all first level properties in the hash table have not been added
  // to the array
  while (initialNode !== "None") {
    let currentCost = costs[initialNode];
    let neighbors = graph[initialNode];

    // check whether there is a cheaper path to current node's neighbors
    for (let n in neighbors) {
      let newCost = currentCost + neighbors[n];
      if (newCost < costs[n]) {
        costs[n] = newCost;
      }
    }
    // after performing the needed steps, mark current node as processed by pushing to processed nodes array
    processedNodes.push(initialNode);
    // update node after marking previous node as processed (and after checking its neighbors)
    initialNode = findLowestCost(costs);
  }


  // prints cost for F node. Finish node.
  console.log(`Running Dijkstra's algorithm, the weight to target F is: ${costs['f']}`);
};

runDijkstra(graph);
