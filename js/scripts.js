beepBoopArray = [];

function countsTo(stopAt) {
  if (stopAt < 0) {
    return "I'm sorry, but positive numbers only"
  } else {
    for (var number = 0; number <= stopAt; number++) {
      beepBoopArray.push(number);
    }
  }
  return replaces0WithBeep(beepBoopArray);
}

function replaces0WithBeep(number) {
  var splitNumbers = number.toString().split(",");
  console.log(splitNumbers);
  for (var i = 0; i <= splitNumbers.length; i++) {
    if (splitNumbers[i] === "0") {
      splitNumbers[i] = "Beep!"
    }
  }
  return splitNumbers;
}



$(document).ready(function() {

console.log(countsTo(15));
console.log(beepBoopArray);
});
