/*
* function to find the smallest item in an array
*/
const findSmallest = (array) => {
  let smallest = array[0];
  let smallest_idx = 0;

  for(let idx = 0; idx < array.length; idx++) {
      if(array[idx] < smallest) {
          smallest = array[idx];
          smallest_idx = idx;
      }
  }

  return smallest_idx;
}

const arrayToSearch = [99, 13, 5, 7, 11];


const selectionSort = (array) => {
  let newArray = [];
  const lenArray = Array.from(Array(array.length));

  for (let item in lenArray) {
    const getSmallest = findSmallest(array);
    // push smallest to new array
    newArray.push(array[getSmallest]);
    // mutating the array for next iteration
    array.splice(getSmallest, 1);
    console.log(` here ${array}`);
  };

  return newArray;

}

console.log(selectionSort(arrayToSearch));
