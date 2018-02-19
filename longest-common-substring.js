/*
* This problem describes a misspelling issue with the input
* The solution compares with a certain database of words to provide the approximate value or values
* and suggest the correct word back to the consumer of the function/algorithm.
* This current solution version, accounts only for strings of the same length.
*/

let answer = [
  [0,0],
  [0,0],
  [0,0],
  [0,0]
];

const verifyOrGetSuggestion = (input, toCompare) => {

  const lowerInput = input.toLowerCase();
  // first checks if the word spell is correct by matching with current database
  if (input === toCompare) {
    console.log(`spell is correct.`)
    return;
  }

  // not the best option, but for now is ok. Looping current list of words to match letters and find
  // longest common subsequence
  for (let i = 0; i < toCompare.length; i++) {

    for(let j = 0; j < input.length; j++) {
      let previous = i - 1 < 0 ? 0 : i - 1;
      let previous2 = j - 1 < 0 ? 0 : j - 1;
      if(toCompare[i] === input[j]) {
          answer[i][j] = answer[previous][previous2] + 1;
      } else {
        answer[i][j] = answer[previous][previous2];
      }

    }
  }

  console.log(`longest common subsequence found between the two strings is: ${answer[3][3]}`);
}

verifyOrGetSuggestion('fosh', 'fish');
