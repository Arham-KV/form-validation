var nameError = document.getElementById('name-error'),
    phoneError = document.getElementById('phone-error'),
    emailError = document.getElementById('email-error'),
    messageError = document.getElementById('message-error'),
    submitError = document.getElementById('subit-error'),
    popup = document.getElementById("popup");
function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is requried';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'phone no is requried';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'phone no should be 11 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is requried';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var requried = 30;
    var left = requried - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'more characters requried';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateform() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to subit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
}
function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}