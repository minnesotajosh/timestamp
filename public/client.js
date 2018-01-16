// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    var dateString = $('input').val();
    $.get('/api/formattedTime/' + dateString, function(data) {
      console.log(data);
      $('.result').html(JSON.stringify(data));
      $('input').val('');
      $('input').focus();
    });
  });

});
