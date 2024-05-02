// Fetches and prints how to say “Hello” depending on the language
/* global $ */
$(document).ready(function () {
  $('INPUT#btn_translate').click(function () {
    const languageCode = $('INPUT#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;
    $.get(apiUrl, function (data) {
      $('DIV#hello').text(data.hello);
    });
  });
});
