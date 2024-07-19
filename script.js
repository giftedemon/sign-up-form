const passwords = document.querySelectorAll('.pass-form');
const minLength = Array(...passwords)[0].minLength;
let passwordConfirmation;

passwords.forEach((pass) => {
    pass.addEventListener('input', () => {
        passwords.forEach((check) => {
            if (check !== pass) {
                if (check.value === pass.value && pass.value.length >= 5) {
                    passwordConfirmation = `3px solid green`;
                } else {
                    passwordConfirmation = `3px solid red`;
                }
                pass.style['border'] = passwordConfirmation;
                check.style['border'] = passwordConfirmation;
            }
        });
    });
});
