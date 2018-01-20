$(document).ready(function() {
  /* Declaramos variables*/
  var $verifyCode = $('#verify-input');
  var $nextVerifyBtn = $('.verify-next-btn');
  var $resendCode = $('.resend-btn');

  /* Añadimos eventos */
  $verifyCode.on('input', function() {
    console.log($(this).val());
    if ($(this).val() === localStorage.code) {
      $nextVerifyBtn.removeAttr('disabled');
      $nextVerifyBtn.css({ 'background': 'linear-gradient(to left, rgb(128,0,128) 35%, rgb(238, 24, 156))',
        'color': '#fff'});
    } else {
      $nextVerifyBtn.attr('disabled', true);
    }
  });

  $resendCode.on('click', function() {
    var $verificationCode = Math.floor(100 + Math.random() * 900);
    localStorage.code = $verificationCode;
    alert('Tu código de verificación es: LAB - ' + $verificationCode);
    $verifyCode.focus();
  });
  
  /* Agregando evento para redireccionar al Boton NEXT */
  $nextVerifyBtn.on('click', function() {
    window.location.href = 'register.html';
  });
});