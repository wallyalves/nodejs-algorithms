const graphInput = {
  allyson: ['peggy', 'jeny'],
  peggy: ['jeny', 'tony', 'jay'],
  jeny: ['arombos', 'jyiai', 'llol', 'jau']
};

const sellers = {
  allyson: 'no',
  jeny: 'no',
  peggy: 'no',
  jau: 'no'
}

const isPersonSeller = person => sellers[person] == undefined ||
sellers[person] === 'no' ? false : true;


const hasEdge = person => graphInput[person] == undefined ? false : true;


const breadthFirst = (name, graphInput) => {
  let queueArray = graphInput[name];
  const alreadySearched = {};

  // loop queue until empty
  while (queueArray.length !== 0) {
    const nextPerson = queueArray.splice(0, 1)[0];

    if (alreadySearched[nextPerson] === undefined) {
      if (isPersonSeller(nextPerson) == true) {
        console.log(`Found somebody that sells milk. It's ${nextPerson}`);
        return true;
      } else {

        if (hasEdge(nextPerson)) {
            queueArray = queueArray.concat(graphInput[nextPerson]);
        }

        alreadySearched[nextPerson] = true;
      }
    }
  }
};


// trigger breadth first search
breadthFirst('allyson', graphInput);
