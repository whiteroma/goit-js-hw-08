import {throttle} from 'lodash';

const STORAGE_KEY = 'feedback-form-state';


const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = savedMessage ?? {};

const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value,
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}), 500);


function saveMessage() {
    if (savedMessage) {
        refs.form.elements.email.value = savedMessage.email || '';
        refs.form.elements.message.value = savedMessage.message || '';
    }
}


saveMessage();

function onFormSubmit (e) {
    e.preventDefault();
    if (e.currentTarget.email.value === '' || e.currentTarget.message.value === '') 
    return
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(formData);
    formData = {}
}

