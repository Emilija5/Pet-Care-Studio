const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const petName = document.getElementById("petName");
    const service = document.getElementById("service");
    const date = document.getElementById("date");
    const consent = document.getElementById("consent");

    let valid = true;

    document.querySelectorAll(".error-message").forEach(e => e.textContent = "");
    document.getElementById("successMessage").textContent = "";

    if (fullName.value.trim() === "") {
        document.getElementById("fullNameError").textContent = "Внесете име и презиме.";
        valid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Внесете е-пошта.";
        valid = false;
    } else if (!email.value.includes("@")) {
        document.getElementById("emailError").textContent = "Внесете валидна е-пошта.";
        valid = false;
    }


    if (phone.value.trim() === "") {
        document.getElementById("phoneError").textContent = "Внесете телефон.";
        valid = false;
    } else if (!/^\+?\d{8,15}$/.test(phone.value.trim())) {
        document.getElementById("phoneError").textContent = "Внесете валиден телефон.";
        valid = false;
    }

    if (petName.value.trim() === "") {
        document.getElementById("petNameError").textContent = "Внесете име на миленичето.";
        valid = false;
    }

    if (!document.querySelector('input[name="petType"]:checked')) {
        document.getElementById("petTypeError").textContent = "Изберете вид на милениче.";
        valid = false;
    }

    if (service.value === "") {
        document.getElementById("serviceError").textContent = "Изберете услуга.";
        valid = false;
    }

    if (date.value === "") {
        document.getElementById("dateError").textContent = "Изберете датум.";
        valid = false;
    } else if (date.value < new Date().toISOString().split("T")[0]) {
        document.getElementById("dateError").textContent = "Изберете денешен или иден датум.";
        valid = false;
    }

    if (!consent.checked) {
        document.getElementById("consentError").textContent = "Потребна е согласност.";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").textContent =
            "Вашето барање е успешно испратено!";
        form.reset();
    }
});