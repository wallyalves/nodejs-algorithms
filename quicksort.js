const getRandomIndex = (maxNumber) => {
    return Math.floor(Math.random() * Math.max(maxNumber));
}

const quicksort = (array) => {
  if(array.length < 2) return array;
  //console.log(`array :: ${array}`)
  // get random number as the pivot due to, on average, quicksort is best case
  const pivot = array[getRandomIndex(array.length)];
  //console.log(pivot)

  // remove pivot from array. sliceArray returns a new sliced array
  array.filter( element => element !== pivot);

  const less = array.filter( x => x < pivot);
  //console.log(less)

  const greater = array.filter( x => x > pivot);
  //console.log(greater)

  return quicksort(less).concat([pivot]).concat(quicksort(greater));
}

const arrayInput = [2, 67, 88, 109, 1, 5];

//console.log(quicksort(arrayInput));




// exporting
module.exports = Object.freeze({quicksort});
