var factorialize = function(number) {
  var sum = 1;
  for (var index = number; index > 0; index -= 1) {
    sum *= index;
  }
  return sum;
}

$(document).ready(function() {
  $("form#int-submit").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var output = factorialize(input);
    $("#input-int").text(input);
    $("#factorial").text(output);
    $(".output").show();
  })
})
