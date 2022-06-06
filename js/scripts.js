$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const thingsNeededInput = $("input#thingsNeeded").val();
    $("#things").text(thingsNeededInput);
    console.log(thingsNeededInput);

    const thingsNeededArray = thingsNeededInput.split(",");
    console.log(thingsNeededArray);
  });
});