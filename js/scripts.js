beepBoopArray = [];

function countsTo(stopAt) {
  if (stopAt <= 0) {
    return "I'm sorry, but positive numbers only"
  } else {
    for (var number = 0; number <= stopAt; number++) {
      beepBoopArray.push(number);
    }
  }
}



$(document).ready(function() {

console.log(countsTo(35));
console.log(beepBoopArray);
});
