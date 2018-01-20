$(document).ready(function() {
  /* Activamos el plugin de las banderas y códigos de país del input */
  $('#demo').intlTelInput();

  /* Declarando variables */
  var $signupInput = $('.signup-input');
  var $nextBtn = $('.signup-next-btn');
  var $validateNumbers = false;

  /* Funciones para el Boton NEXT */
  function activeNextBtn() {
    if ($validateNumbers) {
      $nextBtn.removeAttr('disabled');
    }
  }

  function inactiveNextBtn() {
    $nextBtn.attr('disabled', true);
  }
  
  /* Función para el input */
  $signupInput.on('input', function() {
    console.log($signupInput.val());
    if ($(this).val().length >= 10) {
      $validateNumbers = true;
      activeNextBtn();
      $(this).val();
    } else {
      inactiveNextBtn();
    }
  });

  /* Agregando evento para redireccionar al Boton NEXT */
  $nextBtn.on('click', function() {
    var $verificationCode = Math.floor(100 + Math.random() * 900);
    localStorage.code = $verificationCode;
    alert('Tu código de verificación es: LAB - ' + $verificationCode);
    window.location.href = 'verify.html';
  });
});