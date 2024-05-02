// Fetches from https://hellosalut.stefanbohacek.dev/?lang=fr and
// displays the value of hello from that fetch in the HTML tag DIV#hello
/* global $ */
$.ajax({
  url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    const translation = data.hello;
    $('DIV#hello').text(translation);
  }
});
