$(document).ready(function() {
  /* Declaramos variables*/
  var $verifyCode = $('input');
  var $nextVerifyBtn = $('.verify-next-btn');

  /* Añadimos eventos */
  $verifyCode.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length === 3) {
      $nextVerifyBtn.removeAttr('disabled');
      $nextVerifyBtn.css({ 'background': 'linear-gradient(to left, rgb(128,0,128) 35%, rgb(238, 24, 156))',
        'color': '#fff'});
    }
  });
  
  /* Agregando evento para redireccionar al Botn NEXT */
  $nextVerifyBtn.on('click', function() {
    window.location.href = 'register.html';
  });
});