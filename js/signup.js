$(document).ready(function() {
  /* Activamos el plugin de las banderas y códigos de país del input */
  $('#demo').intlTelInput();

  /* Declarando variables */
  var $nextBtn = $('.signup-next-btn');
  var $validateNumbers = false;
  
  /* Función para el input */
  $('#demo').on('input', function() {
    if ($(this).val().length >= 10) {
      $validateNumbers = true;
      activeNextBtn();
    } else {
      inactiveNextBtn;
    }
  });

  /* Agregando evento para redireccionar al Boton NEXT */
  $nextBtn.on('click', function() {
    var $verificationCode = Math.floor(100 + Math.random() * 900);
    localStorage.code = $verificationCode;
    alert('Tu código de verificación es: LAB - ' + $verificationCode);
    window.location.href = 'verify.html';

    
  });

  /* Funciones para el Boton NEXT */
  function activeNextBtn() {
    if ($validateNumbers) {
      $nextBtn.removeAttr('disabled');
      $nextBtn.css({ 'background': 'linear-gradient(to left, rgb(128,0,128) 35%, rgb(238, 24, 156))',
        'color': '#fff'});
    }
  }
  function inactiveNextBtn() {
    $nextBtn.attr('disabled'); 
  }
});