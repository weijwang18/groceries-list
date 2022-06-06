$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const thingsNeededInput = $("input#thingsNeeded").val();
    $("#things").text(thingsNeededInput);

    const thingsNeeded = thingsNeededInput.trim().split(/\s*,\s*/);
    const alphabeticalOrder = thingsNeeded.sort();

    alphabeticalOrder.forEach(function(thing) { 
      $("#groceriesList").append("<li>" + thing.toUpperCase() + "</li>");
    });
    $("#formOne").hide();
    $("#result").show();
  });
})