 function inputFocus(id) {
    let input = document.getElementById(id);
    let Validation = document.getElementById(id + 'Validation');
    if (input.value.length > 0) {
        input.classList.add('is-active');
        input.classList.remove('is-error');
        Validation.classList.remove('is-error');
	} else {
        input.classList.remove('is-active');
	};

 };

 function validateForm() {
    let inputName = document.getElementById('inputName');
    let inputNameValidation = document.getElementById('inputNameValidation');
    let inputEmail = document.getElementById('inputEmail');
    let inputEmailValidation = document.getElementById('inputEmailValidation');

    if (inputName.value.length <= 0) {
        inputName.classList.add('is-error');
        inputNameValidation.classList.add('is-error');
	};

	if (inputEmail.value.length <= 0) {
        inputEmail.classList.add('is-error');
        inputEmailValidation.classList.add('is-error');
	};      
 }