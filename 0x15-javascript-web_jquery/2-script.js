// updates the text color of the <header> element to red (#FF0000)
// when the user clicks on the tag DIV#red_header
/* global $ */
$(document).ready(function () {
  const redHeaderDiv = $('DIV#red_header');
  redHeaderDiv.click(function () {
    const headerElement = $('header');
    if (headerElement) {
      headerElement.css('color', '#FF0000');
    } else {
      console.error('Header elemnet not found');
    }
  });
});
