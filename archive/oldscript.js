const signupButton = document.getElementById('signupButton');
const loginButton = document.getElementById('loginButton');
const signupPopup = document.getElementById('signupPopup');
const loginPopup = document.getElementById('loginPopup');
const signupCloseButton = document.getElementById('signupCloseButton');
const loginCloseButton = document.getElementById('loginCloseButton');
const signupSubmit = document.getElementById('signupSubmit');
const loginSubmit = document.getElementById('loginSubmit');
const signupEmailInput = document.getElementById('signupEmail');
const signupPassword1Input = document.getElementById('signupPassword1');
const signupPassword2Input = document.getElementById('signupPassword2');
const signupPasswordMismatchMessage = document.getElementById('signupPasswordMismatch');
const loginEmailInput = document.getElementById('loginEmail');
const loginPasswordInput = document.getElementById('loginPassword');

signupButton.addEventListener('click', () => {
    signupPopup.classList.remove('hidden');
});

loginButton.addEventListener('click', () => {
    loginPopup.classList.remove('hidden');
});

signupCloseButton.addEventListener('click', () => {
    signupPopup.classList.add('hidden');
});

loginCloseButton.addEventListener('click', () => {
    loginPopup.classList.add('hidden');
});

signupSubmit.addEventListener('click', () => {
    const email = signupEmailInput.value;
    const password1 = signupPassword1Input.value;
    const password2 = signupPassword2Input.value;

    if (password1 !== password2) {
        signupPasswordMismatchMessage.classList.remove('hidden');
        return;
    }

    signupPasswordMismatchMessage.classList.add('hidden');

    // Here you can perform signup logic with email and password
    console.log('Email:', email);
    console.log('Password:', password1);

    // For demo purposes, just close the popup after submission
    signupPopup.classList.add('hidden');
});

loginSubmit.addEventListener('click', () => {
    // Here you can add login logic
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    console.log('Email:', email);
    console.log('Password:', password);
    // For demo purposes, just close the popup after submission
    loginPopup.classList.add('hidden');
});

// Apply purple theme to buttons
signupButton.classList.add('text-white', 'bg-purple-primary', 'hover:bg-purple-hover', 'focus:ring-4', 'focus:outline-none', 'font-medium', 'text-sm', 'px-5', 'py-2.5', 'transition-colors');
loginButton.classList.add('text-white', 'bg-purple-primary', 'hover:bg-purple-hover', 'focus:ring-4', 'focus:outline-none', 'font-medium', 'text-sm', 'px-5', 'py-2.5', 'transition-colors');
