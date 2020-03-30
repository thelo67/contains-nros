
const containsNumber = function(numbers, aNumber) {

  if (numbers.indexOf(aNumber) >= 0) {
    return true;
  }

  return false;

}

const displayResult = function() {

  let oneNumber = 11;
  let someNumbers = [1,4,2,5,6,3,5,3,2];

  if (containsNumber(someNumbers, oneNumber)) {
      return `Array contains the number ${oneNumber}`;
  } else {
      return `Array doesn't contain the number ${oneNumber}`;
  }

}