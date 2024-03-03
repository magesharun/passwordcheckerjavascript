const inputfield = document.getElementById('password');
const outputfield = document.getElementById('output');

inputfield.addEventListener('input', function () {
    console.log(inputfield.value);
    let password = inputfield.value;
    let missingCriteria = '';

    if (password.length < 8) {
        missingCriteria += 'Password is too short. ';
    }

    if (password.search(/[a-z]/) == -1) {
        missingCriteria += 'Missing a lowercase letter. ';
    }

    if (password.search(/[A-Z]/) == -1) {
        missingCriteria += 'Missing an uppercase letter. ';
    }

    if (password.search(/[0-9]/) == -1) {
        missingCriteria += 'Missing a number. ';
    }

    if (password.search(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/) == -1) {
        missingCriteria += 'Missing a special character. ';
    }

    if (missingCriteria !== '') {
        outputfield.innerText = missingCriteria;
        outputfield.style.color = 'red';
    } else {
        outputfield.innerText = 'Password is strong';
        outputfield.style.color = 'pink';
    }
});
