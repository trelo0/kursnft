const submit = document.getElementById('submit');
const password = document.getElementById('password');
const form = document.forms.form;


getAllEvent();

function getAllEvent() {
    password.addEventListener('keypress', controlToInput);
    submit.addEventListener('click', controlToInput2);
}


function controlToInput2() {
    if (password.value == '')
        return
    else
        form.submit();
}

function moveToNextInput(input, nextIndex) {
    var maxLength = parseInt(input.getAttribute('maxlength'));
    var inputValue = input.value;
    
    if (inputValue.length === maxLength) {
        var nextInput = document.getElementsByName('form')[0].getElementsByTagName('input')[nextIndex];
        nextInput.disabled = false;
        nextInput.focus();
    }
}


