/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

//Identificamos y guardamos nuestro formulario
var form = document.getElementById('registration-form')

//Identificamos nuestros párrafos donde insertaremos nuestro feedbak
var usernameValidation = document.querySelector('.validation--username')
var passwordValidation = document.querySelector('.validation--user-password')
var confirmPasswordValidation = document.querySelector('.validation--confirm-password')
var taxIdValidation = document.querySelector('.validation--tax-id')
var accountValidation = document.querySelector('.validation--account')
var termsValidation = document.querySelector('.validation--terms-of-service')
var entireFormValidation = document.querySelector('.validation--entire-form')

 // input  de terminos y condiciones
var confirmation = document.querySelector('.checkbox')

//Agregamos nuestro escuchador con event delegation
form.addEventListener("submit", function(e){
  e.preventDefault();
  //Guardamos los inputs en un array
  var inputs = document.querySelectorAll('.form-group__field_input')
  inputs.forEach(function(input){
    console.log(confirmation.checked)
    //Username
    if (input.value === "" &&  input.name === "username") {
        usernameValidation.innerHTML = "Username cannot be in blank"
      } else if (input.name === "username" && input.value.length > 0) {
        usernameValidation.innerHTML = "Success"
      }
    //Password
    if (input.value.length < 8 && input.name === "userpassword") {
        passwordValidation.innerHTML = "Password must have a minimum of 8 characters"
    } else if (input.name === "username" && input.value.length <= 8) {
        passwordValidation.innerHTML = "Success"
    }
    // Confirm password
    if (input.name === 'confirmpassword') {
      if (input.value.length > 7 && inputs[2].value === inputs[1].value) {
        confirmPasswordValidation.innerHTML = 'Success';
      } else {
        confirmPasswordValidation.innerHTML = 'Passwords must match'
      }
    }
    //Tax ID
    if (input.name === 'taxid') {
      if (input.value === "") {
        taxIdValidation.innerHTML = "Must provide Tax ID number"
      } else if (isNaN(input.value) || input.value.length !== 10) {
        taxIdValidation.innerHTML = "Tax ID number is only numbers and is 10 digits"
      } else {
        taxIdValidation.innerHTML = "Success"
      }
    }
    //Account type
    if (input.name === 'account') {
      if(input.selectedIndex === 0){
      accountValidation.innerHTML = 'Must select account type';
      }
      else {
      accountValidation.innerHTML = 'Success';
      }
    }
  }) // Aquí acaba for each

  //Confirmation
  if(confirmation.checked === false){
    termsValidation.innerHTML = 'Must approve terms of service';
  }
  else {
    termsValidation.innerHTML = 'Success';
  }

  //Form complete
  if (usernameValidation.innerHTML === "Success" && passwordValidation.innerHTML === "Success" && confirmPasswordValidation.innerHTML === "Success" && taxIdValidation.innerHTML === "Success" && accountValidation.innerHTML  === "Success" &&
    termsValidation.innerHTML === "Success" ) {
    entireFormValidation.innerHTML = "Form Complete"
  }

})
