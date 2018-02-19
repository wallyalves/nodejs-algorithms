/*
* Knapsack problem
* problem description: Steal as many items and make as much money as possible give the limitations of
* the Knapsack. For this problem, the Knapsack can carry up to 4 lb.
*/

// keep track of max value as we go through each available item
let newMax = 0;

// array to be used to track each item iteration. Each element represents a weight value in the
// knapsack. i.e [0, 1, 2, 3] == knapsack of 4 lbs
let knapsack = Array.from(Array(4)).map( x => x = new Object({item: '', value: 0}));

// input of items and values
const input = [
  {
    item: 'stereo',
    value: 3000,
    weight: 4
  },
  {
    item: 'laptop',
    value: 2000,
    weight: 3
  },
  {
    item: 'guitar',
    value: 1500,
    weight: 1
  }
];

const runAlgorithm = (source) => {

  for(let item = 0; item < source.length; item++) {

    for (let element in knapsack) {
      let currentWeight = parseInt(element) + 1;

      if (source[item].weight <= currentWeight) {

        if (source[item].value > knapsack[element].value) {

          knapsack[element] = source[item];

        } else if (source[item].item !== knapsack[element - 1].item &&
                   source[item].value + knapsack[element - 1].value > knapsack[element].value) {

            knapsack[element].value = source[item].value + knapsack[element - 1].value;
            knapsack[element].item = source[item].item + ' - ' + knapsack[element - 1].item;

          }
        } // knapsack array

      } // source array
    }
    console.log(`Max optimal value that can be carried in the knapsack is: ${knapsack[3].value}
    \nand the chosen items were: ${knapsack[3].item}`);
  };

  runAlgorithm(input);
