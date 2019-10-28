$(document).ready(function() {
  $("#formOne").submit(function(e) {
    var names = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    names.forEach(function(name) {
      $("." + name).text($("input#" + name).val());
    });

    $("#story").show();
    e.preventDefault();
    // $("#formOne .btn").hide();
  });
});
