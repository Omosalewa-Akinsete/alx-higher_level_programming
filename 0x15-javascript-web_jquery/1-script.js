// Updates the text color of the <header> element to red (#FF0000)
/* global $ */
$(document).ready(function () {
  const element = $('header');
  if (element) {
    element.css('color', '#FF0000');
  } else {
    console.error('Header element not found');
  }
});
