const KEY_STORAGE = 'feedback-form-state';

const form = document.querySelector('.form');
const btn = document.querySelector('.button');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
  evt.preventDefault();
  const message = form.elements.message.value;
  const email = form.elements.email.value;
  if (message && email) {
    const formData = JSON.stringify({ email, message });
    localStorage.setItem(KEY_STORAGE, formData);
    form.reset();
  } else {
    console.log('Fill please all fields');
  }
}

try {
  const data = JSON.parse(localStorage.getItem(KEY_STORAGE) ?? '');
  form.elements.message.value = data.message;
  form.elements.email.value = data.email;
} catch {
  console.log('No saved data!');
}
