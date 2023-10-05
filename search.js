var results = document.getElementById("result");
var display = document.getElementById("display-result");
$(document).on("keypress", "input", function(e){
  if (e.which == 13) {
    window.open($(this).val(), "_blank");
  }
});
