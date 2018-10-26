var startingArray = [];
var splitNumbersArray = [];


// Does not reject characters that aren't numbers
function countsTo(stopAt) {
  if (stopAt < 0) {
    startingArray.push("I'm sorry but positive numbers only")
  } else if (stopAt > 999) {
    // Couldn't get a for loop in the function below to scan through every character to check for a "1", asked user to not go above 1,000 instead**
    startingArray.push("I'm sorry no higer than 1000 please")
  } else {
    for (var number = 0; number <= stopAt; number++) {
      startingArray.push(number);
    }
  }
  return startingArray;
}

function replaces0WithBeep(number) {
  var splitNumbers = number.toString().split(",");
  for (var i = 0; i < splitNumbers.length; i++) {
    if (splitNumbers[i] === "0") {
      splitNumbers[i] = "Beep";
    } else if (splitNumbers[i].charAt(0) === "1" || splitNumbers[i].charAt(1) === "1" || splitNumbers[i].charAt(2) === "1") {
        // **Spent about an hour trying to run another for loop to scroll through every character and check for a "1" with no success
        splitNumbers[i] = "Boop!"
    } else if (parseInt(splitNumbers[i]) % 3 === 0) {
      splitNumbers[i] = "I'm sorry, Dave. I'm afraid I can't do that";
    }
  }
  return splitNumbersArray = splitNumbers.slice();
}


$(document).ready(function() {
  $("#okay").click(function(event) {
    event.preventDefault();
    countsTo($("input#userNumber").val());
    replaces0WithBeep(startingArray);
    // $("#okay").hide();
    // $("#again").show();
    $("#output").show();
    $("#output").text(splitNumbersArray.join(', '));
  });
  // $("#again").click(function(event) {
  //   event.preventDefault();
  //   countsTo($("input#userNumber").val());
  //   replaces0WithBeep(startingArray);
  //   $("#output").show();
  //   $("#output").text(splitNumbersArray.join(', '));
  // });
});
