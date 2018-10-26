var startingArray = [];
var splitNumbersArray = [];

function countsTo(stopAt) {
  if (stopAt < 0) {
    return "I'm sorry, but positive numbers only"
  } else {
    for (var number = 0; number <= stopAt; number++) {
      startingArray.push(number);
    }
  }
  return startingArray;
}

function replacesWithBeepsAndBoops(number) {
  var splitNumbers = number.toString().split(",");
  console.log(splitNumbers);
  for (var i = 0; i < splitNumbers.length; i++) {
    if (splitNumbers[i] === "0") {
      splitNumbers[i] = "Beep";
    } else if (splitNumbers[i].charAt(0) === "1") {
      splitNumbers[i] = "Boop!"
    }
  }
  return splitNumbersArray = splitNumbers.slice();
}


$(document).ready(function() {

countsTo(15);
replacesWithBeepsAndBoops(startingArray);

console.log(splitNumbersArray);


});
