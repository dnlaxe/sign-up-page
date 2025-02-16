const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('confirm');
const message = document.getElementById('password-check');
const phone = document.getElementById('phone-number')

function checkPasswordsMatch() {
    if (password.value === confirmPassword.value && password.value != "") {
        confirmPassword.classList.remove('error');
        confirmPassword.classList.add('match');
        message.style.color = 'green'
        message.textContent = "Passwords match";
    } else {
        confirmPassword.classList.remove('match');
        confirmPassword.classList.add('error');
        message.style.color = 'red'
        message.textContent = "Passwords do not match";
    }
}

function resetBorder() {
    if (message.style.color === 'green') {
        confirmPassword.classList.remove('match');
    }
}

function formatPhoneNumber(number) {
    let input = number.target.value.replace(/\D/g, "");
    let output = "";

    if (input.length <=3) {
        output = input;
    } else if (input.length <= 7) {
        output = input.slice(0, 3) + "-" + input.slice(3);
    } else {
        output = input.slice(0, 3) + "-" + input.slice(3, 7) + "-" + input.slice(7, 12);
    }
    number.target.value = output;
}

confirmPassword.addEventListener('input', checkPasswordsMatch);
confirmPassword.addEventListener('blur', resetBorder);
phone.addEventListener('input', formatPhoneNumber);