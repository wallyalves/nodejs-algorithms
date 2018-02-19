const getRandomIndex = (maxNumber) => {
    return Math.floor(Math.random() * Math.max(maxNumber));
}

const quicksort = (array) => {
  if(array.length < 2) return array;
  
  // get random number as the pivot due to, on average, quicksort is best case
  const pivot = array[getRandomIndex(array.length)];

  // remove pivot from array. sliceArray returns a new sliced array
  array.filter( element => element !== pivot);

  const less = array.filter( x => x < pivot);

  const greater = array.filter( x => x > pivot);

  return quicksort(less).concat([pivot]).concat(quicksort(greater));
}

const arrayInput = [2, 67, 88, 109, 1, 5];


console.log(quicksort(arrayInput));
