const findValue = (list, value) => {
  let init = 0;
  let last = list.length - 1;

  while(init <= last) {
    let mid = init + last;
    let guess = list[mid];
    if (guess === value) {
      console.log(`found value ${guess}`);
      return guess;
    } else if (guess > value) {
      if(init == last) console.log('Not Found');
      last--;
    } else if (guess < value){
      init++;
    }
  }
}


const arrayToSearch = [1, 3, 5, 7];

// findValue(arrayToSearch, 5);


module.exports = Object.freeze({binarySearch: findValue});
