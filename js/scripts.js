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
  for (var i = 0; i < splitNumbers.length; i++) {
    if (splitNumbers[i] === "0") {
      splitNumbers[i] = "Beep";
    } else if (splitNumbers[i].charAt(0) === "1") {
      splitNumbers[i] = "Boop!"
    } else if (parseInt(splitNumbers[i]) % 3 === 0) {
      splitNumbers[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
    }
  }
  return splitNumbersArray = splitNumbers.slice();
}


$(document).ready(function() {

countsTo(15);
replaces0WithBeep(startingArray);

console.log(splitNumbersArray);
});
