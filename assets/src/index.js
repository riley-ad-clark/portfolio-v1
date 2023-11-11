'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const contactButtons = document.querySelectorAll('.c-button');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.popup-form .close-btn');
    const submitBtn = document.querySelector('.popup-form button[type="button"]');
    const form = document.querySelector('.popup-form form');

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    contactButtons.forEach(button => {
        button.addEventListener('click', openPopup);
    });

    closeBtn.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', closePopup);
    submitBtn.addEventListener('click', submitForm);

    nameInput.addEventListener('input', () => validateInput(nameInput));
    emailInput.addEventListener('input', () => validateInput(emailInput));
    messageInput.addEventListener('input', () => validateInput(messageInput));

    function openPopup() {
        popupOverlay.style.display = 'block';
        popupForm.style.display = 'block';
    }

    function closePopup() {
        popupOverlay.style.display = 'none';
        popupForm.style.display = 'none';
    }

    function submitForm() {
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Name and Email are required!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address!');
            return;
        }
        closePopup();
    }

    function validateInput(input) {
        const isValid = input.value.trim() !== '';
        const feedbackIcon = input.parentElement.querySelector('.feedback-icon');
        
        if (isValid) {
            feedbackIcon.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
            feedbackIcon.classList.add('valid');
            feedbackIcon.classList.remove('invalid');
        } else {
            feedbackIcon.innerHTML = '<i class="fa-solid fa-times-circle"></i>';
            feedbackIcon.classList.add('invalid');
            feedbackIcon.classList.remove('valid');
        }
    } 
});

