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

function replacesWithBeepBoopAndSorry(number) {
  var splitNumbers = number.toString().split(",");
  for (var i = 0; i < splitNumbers.length; i++) {
    if (parseInt(splitNumbers[i]) % 3 === 0 && splitNumbers[i] > 0) {
      splitNumbers[i] = "I'm sorry, Dave. I'm afraid I can't do that";
    }
    // **Spent about an hour trying to run another for loop to scroll through every character and check for a "1" with no success
    else if (splitNumbers[i].charAt(0) === "1" || splitNumbers[i].charAt(1) === "1" || splitNumbers[i].charAt(2) === "1") {
      splitNumbers[i] = "Boop!";
    } else if (splitNumbers[i].charAt(0) === "0" || splitNumbers[i].charAt(1) === "0" || splitNumbers[i].charAt(2) === "0") {
        splitNumbers[i] = "Beep!"
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
    replacesWithBeepBoopAndSorry(startingArray);
    $("input#userNumber").val("");
    $("body").addClass("fadeInColor");
    $(".header").addClass("fadeInColor");
    $("#okay").hide();
    $("input#userNumber").hide();
    $("label").hide();
    // Fade from http://api.jquery.com/fadeout/
    $("#again").fadeIn(800, "linear");
    $("#output").fadeIn(800, "linear");
    $("#hal").fadeIn(800, "linear");
    $(".beepboop").text(splitNumbersArray.join(', '));
    console.log(startingArray);
    console.log(splitNumbersArray);
  });
  $("#again").click(function(event) {
    event.preventDefault();
    $("body").removeClass("fadeInColor");
    $("#output").hide();
    $("#again").hide();
    $("#hal").hide();
    $("label").fadeIn(1500, "linear");
    $("#okay").fadeIn(1500, "linear");
    $("input#userNumber").fadeIn(1500, "linear");
    startingArray = [];
    splitNumbersArray = [];
  });
});
