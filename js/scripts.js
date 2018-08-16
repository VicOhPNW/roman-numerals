// function convertToRoman(num){
//   var romans = {
//     I = 1
//     V = 5
//     X = 10
//     L = 50
//     C = 100
//     D = 500
//     M = 1,000
//   };
// }

//Check if string has a number
// function hasNum(string) {
//   var regex = /\d/g;
//   return regex.test(string);
// }

function numGreater(string){
  if (string > 3999){
    return false;
  } else {
    return true;
  }

}



















$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputBox").val();
    var inputArray = userInput.split(" ");
    // alert(hasNum(userInput));
    alert(numGreater(userInput));
    // var outputResult = eachNum(inputArray);

    // $(".output").text(outputResult);

  });
});
