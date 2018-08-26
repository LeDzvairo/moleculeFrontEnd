log('hi');
const loginForm = document.forms.loginForm;
const usernameIn = loginForm.username;
const passwordIn = loginForm.password;
const userInputValidator = new inputValidator(usernameIn);
const passwordInputValidator = new inputValidator(passwordIn);

log(loginForm);
log(usernameIn);
log(passwordIn);

function log (string) {
    console.log(string);
}

function inputValidator(inputFieldContainer) {
    this.inputFieldContainer = inputFieldContainer;
    this.isEmpty = function () {
        if (this.inputFieldContainer.value === '') {
            return true;
        }
        return false;
};

 this.type = this.inputFieldContainer.type;

 this.isValid = function () {
    if (this.type === 'text' || this.type === 'password') {
        if (this.isEmpty()) {
            return (false);
        } 

        const val = this.inputFieldContainer.value;

         if (!val.startsWith('s')) {
             if(!val.startsWith('w')){
                return (false);
             }
        }

        if (val.length !== 10) {
            return (false);
        }
        
        return (true);
    } else if (this.type !== 'text') {
        log(`${this.inputFieldContainer} is not an appplicable input type`);
    }
 };
}

function usernameError() {
    const isValid = userInputValidator.isValid();


    log(isValid);

    if (!isValid) {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Invalid username',
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        
        } else {
        swal("Nice","You have logged in","Successful");
    }
    return isValid;
}

loginForm.onsubmit = function () {
    log('onsubmit works');
    log(usernameError());
    return usernameError();
};
