const recursiveSum = (array) => {
  if(array.length == 1) return array[0];
  return array.pop() + recursiveSum(array);
}

const arrayInput = [4, 700, 11, 22, 67];

console.log(` recursive Sum :: ${recursiveSum(arrayInput.slice(0))}`);

const recursiveCount = (array) => {
  if(array.length == 1) return 1;
  array.pop();
  return 1 + recursiveCount(array);
}

console.log(` recursive count :: ${recursiveCount(arrayInput.slice(0))}`);


const recursiveMax = (array) => {
  if(array.length == 2) {
    if(array[0] > array[1]) return array[0];
    return array[1];
  }
  const current = array.pop();
  return current > recursiveMax(array) ? current : recursiveMax(array);
}


console.log(` recursive max :: ${recursiveMax(arrayInput.slice(0))}`);
