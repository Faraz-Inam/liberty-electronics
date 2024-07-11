document.getElementById('contact-form').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const nameValue = nameInput.value;
    const phoneValue = phoneInput.value;

    const namePattern = /^[a-zA-Z\s]*$/;
    const phonePattern = /^\d+$/;

    if (!namePattern.test(nameValue)) {
        nameError.textContent = "Name must contain only letters and spaces.";
        nameError.style.display = "block";
        window.alert("Name must contain only letters and spaces.");
        event.preventDefault();
    } else {
        nameError.style.display = "none";
    }

    if (!phonePattern.test(phoneValue)) {
        phoneError.textContent = "Phone number must contain only digits.";
        phoneError.style.display = "block";
        window.alert("Phone number must contain only digits.");
        event.preventDefault();
    } else {
        phoneError.style.display = "none";
    }

    if (namePattern.test(nameValue) && phonePattern.test(phoneValue)) {
        window.alert("Your order has been placed successfully!");
    }
});



