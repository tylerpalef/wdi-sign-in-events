document.addEventListener("DOMContentLoaded", function() {
  var sign = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var userField = document.getElementById('user');
  var passField = document.getElementById('pass');


  sign.addEventListener('click', function() {
      modal.style.display = 'block';
    });

  close.addEventListener('click', function(){
    modal.style.display = 'none';
    });

  submit.addEventListener('click', function() {
    userField.classList.add('error');
    passField.classList.add('error');
    });
// When the user presses the .submit button, add an .error class to both input elements


  userField.addEventListener('click', function() {
    userField.classList.remove('error');
    });
// When the user puts their cursor in one of the input fields, remove the .error class
  passField.addEventListener('click', function() {
    passField.classList.remove('error');
    });
// When the user puts their cursor in one of the input fields, remove the .error class



  });
