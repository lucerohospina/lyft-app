$(document).ready(function() {
  /* Animación splash de intro */
  $(function() {
    setTimeout(function() {
      $('#intro').fadeOut();
    }, 10000);
    $(location).attr('href', 'views/home.html');
  });
});
