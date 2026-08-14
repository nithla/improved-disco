
const contactButton = $('.contact__input__button span');
const nameInput = $('#contactName');
const emailInput = $('#contactEmail');
const messageInput = $('#contactQuery');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactButton.on('click', function (e) {
    let formDetails = formValidate();

    if (formDetails) {
        const formData = JSON.stringify({
            name: formDetails.nameValue,
            email: formDetails.emailValue,
            message: formDetails.messageValue,
        });

        $.ajax({
            url: 'https://j6c6jbp3r8.execute-api.ap-southeast-2.amazonaws.com/prod/emailSend',
            type: 'POST',
            data: formData,
            contentType: 'application/json',
            success: function (response) {
                alert('Your message has been sent!');
            },
            error: function (xhr, status, error) {
                console.log(status, error);
            }
        });
    }
});

[nameInput, emailInput, messageInput].forEach(($input) => {
    $input.on('input', function () {
        if (isFieldValid($input)) {
            clearError($input);
        }
    });
});

function formValidate() {
    let isValid = true;

    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);

    // Name validation
    if (nameInput.val().trim() === '') {
        isValid = false;
        showError(nameInput, 'Name is required');
    }

    // Email validation
    if (emailInput.val().trim() === '') {
        isValid = false;
        showError(emailInput, 'Email is required');
    } else if (!emailRegex.test(emailInput.val().trim())) {
        isValid = false;
        showError(emailInput, 'Please enter a valid email address.');
    }

    // Message validation
    if (messageInput.val().trim() === '') {
        isValid = false;
        showError(messageInput, 'Message is required.');
    }

    if (isValid) {
        let nameValue = nameInput.val();
        let emailValue = emailInput.val();
        let messageValue = messageInput.val();
        let contactDetails = {nameValue, emailValue, messageValue};
        resetForm();
        return contactDetails;
    }
}

function isFieldValid($input) {
    const value = $input.val().trim();

    if ($input.is(emailInput)) {
        return value !== '' && emailRegex.test(value);
    }

    return value !== '';
}

function showError(input, message) {
    const errorElement = $('<span class="error"></span>').text(message);
    errorElement.insertAfter(input);
}

function clearError($input) {
    $input.next('.error').remove();
}

function resetForm() {
    nameInput.val('');
    emailInput.val('');
    messageInput.val('');
}