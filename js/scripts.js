beepBoopArray = [];

function countsTo(stopAt) {
  for (var number = 0; number <= stopAt; number++) {
  beepBoopArray.push(number);
  }
}



$(document).ready(function() {

countsTo(15);
console.log(beepBoopArray);
});
