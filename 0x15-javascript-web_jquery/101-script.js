// Adds, removes and clears LI elements from a list when the user clicks
/* global $ */
$(document).ready(function () {
  $('DIV#add_item').click(function () {
    $('<li>Item</li>').appendTo('UL.my_list');
  });
  $('DIV#remove_item').click(function () {
    $('UL.my_list li:last-child').remove();
  });
  $('DIV#clear_list').click(function () {
    $('UL.my_list').empty();
  });
});
