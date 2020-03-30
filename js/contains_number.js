
const containsNumber = function(numbers, aNumber) {

  if (numbers.indexOf(aNumber) >= 0) {
    return true;
  }

  return false;

}

const displayResult = function() {

  let aNumber = 6;
  let numbers = [1,4,2,5,6,3,5,3,2];

  if (containsNumber(numbers, aNumber)) {
      return `Array contains the number ${aNumber}`;
  } else {
      return `Array doesn't contain the number ${aNumber}`;
  }

}