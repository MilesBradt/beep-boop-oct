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


  function replaces0WithBeep(number) {
    var splitNumbers = number.toString().split(",");
    console.log(splitNumbers);
    for (var i = 0; i <= splitNumbers.length; i++) {
      if (splitNumbers[i] === "0") {
        splitNumbers[i] = "Beep";
      }
    }
    return splitNumbersArray = splitNumbers.slice();
  }


$(document).ready(function() {

countsTo(15);
replaces0WithBeep(startingArray);
console.log(splitNumbersArray);


});
