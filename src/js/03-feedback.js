// import throttle from 'lodash-throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('input[type="email"]')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value,
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}), 500);


function onFormSubmit (e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log({ email: email.value, message: message.value });
}


function saveMessage() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        
        refs.input.value = savedMessage.email || '';
        refs.textarea.value = savedMessage.message || '';
    }
}


saveMessage();