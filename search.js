
$(document).on("keypress", "input", function(e){
  if (e.which == 13) {
    let search = $(this).val();
    if (!(search.slice(0, 8) == "https://" || search.slice(0, 7) == "http://")) {
      for (i in search) {
        if (i == "." && i == search.length - 4) {
          search = "https://" + search;
          window.open(search, "_blank");
        } else {
          alert("Website not found at: 'https://" + search + "'");
        }
      }
    } else {
      window.open(search, "_blank");
    }
    }
});
