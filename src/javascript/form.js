
const contactButton = $('.contact__input__button span');

contactButton.on('click', function (e) {
    let formDetails = formValidate();

    if (formDetails) {
        const formData = JSON.stringify({
            name: formDetails.nameValue,
            email: formDetails.emailValue,
            phone: formDetails.phoneValue,
            message: formDetails.messageValue,
        });

        $.ajax({
            url: 'https://j6c6jbp3r8.execute-api.ap-southeast-2.amazonaws.com/prod/portfolio',
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

function formValidate() {
    const name = $('#contactName');
    const email = $('#contactEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone = $('#contactPhone');
    const phoneRegex = /^[0-9]{10}$/;
    const message = $('#contactQuery');
    let isValid = true;

    // Remove all errors and check again
    $('.error').remove();

    // Name validation
    if (name.val().trim() === '') {
        isValid = false;
        showError(name, 'Name is required');
    }

    // Email validation
    if (email.val().trim() === '') {
        isValid = false;
        showError(email, 'Email is required');
    } else if (!emailRegex.test(email.val().trim())) {
        isValid = false;
        showError(email, 'Please enter a valid email address.');
    }

    // Phone validation
    if (phone.val().trim() === '') {
        isValid = false;
        showError(phone, 'Phone number is required');
    } else if (!phoneRegex.test(phone.val().trim())) {
        isValid = false;
        showError(phone, 'Please enter a valid 10-digit phone number.');
    }

    // Message validation
    if (message.val().trim() === '') {
        isValid = false;
        showError(message, 'Message is required.');
    }

    if (isValid) {
        let nameValue = name.val();
        let emailValue = email.val();
        let phoneValue = phone.val();
        let messageValue = message.val();
        let contactDetails = {nameValue, emailValue, phoneValue, messageValue};
        resetForm();
        return contactDetails;
    }
}

function showError(input, message) {
    const errorElement = $('<span class="error"></span>').text(message);
    errorElement.insertAfter(input);
}

function resetForm() {
    $('#contactName').val('');
    $('#contactEmail').val('');
    $('#contactPhone').val('');
    $('#contactQuery').val('');
}