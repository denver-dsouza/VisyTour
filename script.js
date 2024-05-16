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
const signupPasswordMismatch = document.getElementById('signupPasswordMismatch');
const loginEmailInput = document.getElementById('loginEmail');
const loginPasswordInput = document.getElementById('loginPassword');

// Function to close popups
const closePopups = () => {
    signupPopup.classList.add('hidden');
    loginPopup.classList.add('hidden');
};

// Event listeners for close buttons
signupCloseButton.addEventListener('click', closePopups);
loginCloseButton.addEventListener('click', closePopups);

// Event listener for clicking outside the popups to close them
document.querySelectorAll('.popup-container').forEach(popup => {
    popup.addEventListener('click', event => {
        if (event.target === popup) {
            closePopups();
        }
    });
});

// Event listener for signup button
signupButton.addEventListener('click', () => {
    signupPopup.classList.remove('hidden');
    loginPopup.classList.add('hidden'); // Ensure login popup is hidden when signup button is clicked
});

// Event listener for login button
loginButton.addEventListener('click', () => {
    loginPopup.classList.remove('hidden');
    signupPopup.classList.add('hidden'); // Ensure signup popup is hidden when login button is clicked
});

// Event listener for signup form submission
signupSubmit.addEventListener('click', () => {
    const email = signupEmailInput.value;
    const password1 = signupPassword1Input.value;
    const password2 = signupPassword2Input.value;

    if (password1 !== password2) {
        signupPasswordMismatch.classList.remove('hidden');
        console.log('Password Mismatch');
        return;
    } else {
        signupPasswordMismatch.classList.add('hidden');
    }

    // Here you can perform signup logic with email and password
    console.log('Email:', email);
    console.log('Password1:', password1);
    console.log('Password2:', password2);

    // For demo purposes, just close the popup after submission
    signupPopup.classList.add('hidden');
});

// Event listener for login form submission
loginSubmit.addEventListener('click', () => {
    // Here you can add login logic
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    console.log('Email:', email);
    console.log('Password:', password);
    // For demo purposes, just close the popup after submission
    loginPopup.classList.add('hidden');
});
