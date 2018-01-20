$(document).ready(function() {
  /* Declaramos  las variables */
  var $userName = $('#insert-name');
  var $userLastName = $('#insert-last-name');
  var $userEmail = $('#insert-email');
  var $checkBox = $('input[type="checkbox"]');
  var $nextRegisterBtn = $('.register-next-btn');

  var $validateName = false;
  var $validateEmail = false;
  var $validateChecked = false;

  /* Funciones para el Boton NEXT */
  function activeNextBtn() {
    if ($validateName && $validateEmail && $validateChecked) {
      $nextRegisterBtn.removeAttr('disabled');
    }
  }
  function inactiveNextBtn() {
    $nextRegisterBtn.attr('disabled', true); 
  }

  /* Agregando evento para redireccionar al Botn NEXT */
  $nextRegisterBtn.on('click', function() {
    window.location.href = 'last.html';
  });

  /* Agregando eventos a los inputs */
  $userName.on('input', function() {
    console.log($(this).val());
    if ($(this).val() && $(this).val().length !== '') {
      $validateName = true;
      activeNextBtn();
    } else {
      inactiveNextBtn();
    }
  }); 

  $userEmail.on('input', function() {
    console.log($(this).val());
    var $regexEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log($regexEmail.test($(this).val()));
    if ($regexEmail.test($(this).val())) {
      $validateEmail = true;
      activeNextBtn();
    } else {
      inactiveNextBtn();
    }
  });

  $checkBox.on('click', function(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      $validateChecked = true;
      activeNextBtn();
    } else {
      inactiveNextBtn();
    }
  });
});
