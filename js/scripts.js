$(document).ready(function() {
  $("#formOne").submit(function(e) {
    $(".person1").text($("input#person1").val());
    $(".person2").text($("input#person").val());
    $(".animal").text($("input#animal").val());
    $(".exclamation").text($("input#exclamation").val());
    $(".verb").text($("input#verb").val());
    $(".noun").text($("input#noun").val());

    $("#story").show();
    e.preventDefault();
    // $("#formOne .btn").hide();
  });
});
