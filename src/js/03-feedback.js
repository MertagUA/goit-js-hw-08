import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const { form, input, textarea } = refs;

const FORM_FEEDBACK_KEY = 'feedback-form-state';
const formData = {};
formPopulate();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(FORM_FEEDBACK_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  const savedData = JSON.stringify(formData);
  localStorage.setItem(FORM_FEEDBACK_KEY, savedData)
}

function formPopulate() {
  const savedFormData = localStorage.getItem(FORM_FEEDBACK_KEY);
  const parsedFormData = JSON.parse(savedFormData);
  if (parsedFormData) {
    input.value = parsedFormData.email;
    textarea.value = parsedFormData.message;
  }
}

