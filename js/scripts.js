$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputBox").val();
    var inputArray = userInput.split(" ");

    var outputResult = eachNum(inputArray);

    $(".output").text(outputResult);
  })
})
