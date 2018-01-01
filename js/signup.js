$(document).ready(function() {
  /* Activamos el plugin de las banderas y códigos de país del input */
  $('#demo').intlTelInput();

  /* Declarando variables */
  var $nextBtn = $('.signup-next-btn');

  $('#demo').on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 10) {
      $nextBtn.removeAttr('disabled');
      $nextBtn.css({ 'background': 'linear-gradient(to left, rgb(128,0,128) 35%, rgb(238, 24, 156))', 'color': '#fff'});
    } 
  });

  /* Agregando evento para redireccionar al Botn NEXT */
  $nextBtn.on('click', function() {
    alert('Tu código de verificación es:');
    window.location.href = 'verify.html';
  });
});
