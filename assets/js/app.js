
var onReadyEvents = function(){
  $('#check_number').click(function() {
    var number = $('#insert_number').val();
    var text = fizzBuzzChallenge(number);
    $('#display_outcome').html(text);
  });
}
