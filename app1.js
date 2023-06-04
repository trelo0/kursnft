const submit = document.getElementById('submit');
const password = document.getElementById('password');
const form = document.forms.form;


getAllEvent();

function getAllEvent() {
    password.addEventListener('keypress', controlToInput);
    submit.addEventListener('click', controlToInput2);
}

function controlToInput(e) {
    if (e.key == 'Enter') {
        if (password.value == '')
            return
        else
            form.submit();
    }
}

function controlToInput2() {
    if (password.value == '')
        return
    else
        form.submit();
}


