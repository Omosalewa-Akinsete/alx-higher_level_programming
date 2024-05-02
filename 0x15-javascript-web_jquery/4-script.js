// Toggles the class of the <header> element when the user clicks on the tag DIV#toggle_header
/* global $ */
$(document).ready(function () {
  const toggleDiv = $('DIV#toggle_header');
  const headerElement = $('header');
  toggleDiv.click(function () {
    headerElement.toggleClass('red green');
  });
});
