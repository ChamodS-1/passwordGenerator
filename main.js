const button = document.querySelector('.but1');
const label = document.querySelector('h1');
const range = document.querySelector('.range');
const rangCount = document.getElementById('range-number');
const capitalChecked = document.getElementById('capitalLetters');
const allCheckedBoxes = document.querySelectorAll('.input');

button.addEventListener('click', generatePass);
range.addEventListener('input', getRangeCount);

capitalChecked.checked = true;

function generatePass() {

    let charactorSet = {

        capitalLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        specialCharactors: '!@#$%^&*()',
        simpleLetters: 'abcdefghijklmnopqrstuvwxyz',
        numbersOnly: '0123456789'

    }

    let newPassword = '';

    allCheckedBoxes.forEach(function (item) {

        if (item.checked) {
            newPassword += charactorSet[item.id];

        }

    });

    createPassword(newPassword);

}

function createPassword(newPassword) {

    let passwordLength = range.value;

    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * newPassword.length);
        password += newPassword.substring(randomNumber, randomNumber + 1);
    }

    label.textContent = password;

}

function getRangeCount() {

    rangCount.textContent = +range.value + 1;

}





