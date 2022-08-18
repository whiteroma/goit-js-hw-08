// import throttle from 'lodash-throttle';

const STORAGE_KEY = 'feedback-form-state';


const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = savedMessage ?? {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('input[type="email"]')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value,
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
});

saveMessage();

function onFormSubmit (e) {
    e.preventDefault();
    if (e.currentTarget.email.value === '' || e.currentTarget.message.value === '') 
    {return}
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(formData);
    formData = {}
}


function saveMessage() {
    if (savedMessage) {
        refs.input.value = savedMessage.email || '';
        refs.textarea.value = savedMessage.message || '';
    }
}

