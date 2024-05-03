// Fetches and prints how to say “Hello” depending on the language
/* global $ */
$(document).ready(function () {
  function fetchTranslation () {
    const languageCode = $('INPUT#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;
    $.get(apiUrl, function (data) {
      $('DIV#hello').text(data.hello);
    });
  }
  $('INPUT#btn_translate').click(function () {
    fetchTranslation();
  });
  $('INPUT#language_code').keypress(function (event) {
    if (event.which === 13) {
      fetchTranslation();
    }
  });
});
