$(document).ready(function() {
  /* Animación splash de intro */
  $(function() {
    setTimeout(function() {
      $('#intro').fadeOut(1000);
    }, 2000);
    $(location).attr('href', 'views/home.html');
  });
  
});
