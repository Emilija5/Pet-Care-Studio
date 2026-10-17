const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const pageIsEnglish = document.documentElement.lang === "en";

    const messages = pageIsEnglish
        ? {
            fullNameRequired: "Enter your full name.",
            emailRequired: "Enter your email address.",
            emailInvalid: "Enter a valid email address.",
            phoneRequired: "Enter your phone number.",
            phoneInvalid: "Enter a valid phone number.",
            petNameRequired: "Enter your pet's name.",
            petTypeRequired: "Choose a pet type.",
            serviceRequired: "Choose a service.",
            dateRequired: "Choose a date.",
            dateInvalid: "Choose today or a future date.",
            consentRequired: "Your consent is required.",
            success: "Your request has been submitted successfully!"
        }
        : {
            fullNameRequired: "Внесете име и презиме.",
            emailRequired: "Внесете е-пошта.",
            emailInvalid: "Внесете валидна е-пошта.",
            phoneRequired: "Внесете телефон.",
            phoneInvalid: "Внесете валиден телефон.",
            petNameRequired: "Внесете име на миленичето.",
            petTypeRequired: "Изберете вид на милениче.",
            serviceRequired: "Изберете услуга.",
            dateRequired: "Изберете датум.",
            dateInvalid: "Изберете денешен или иден датум.",
            consentRequired: "Потребна е согласност.",
            success: "Вашето барање е успешно испратено!"
        };

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const petName = document.getElementById("petName");
    const service = document.getElementById("service");
    const date = document.getElementById("date");
    const consent = document.getElementById("consent");
    const successMessage = document.getElementById("successMessage");

    const currentDate = new Date();
    const localDate = new Date(
        currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    date.min = localDate;

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let formIsValid = true;

        document.querySelectorAll(".error-message").forEach(function (element) {
            element.textContent = "";
        });

        successMessage.textContent = "";

        if (fullName.value.trim() === "") {
            showError("fullNameError", messages.fullNameRequired);
            formIsValid = false;
        }

        if (email.value.trim() === "") {
            showError("emailError", messages.emailRequired);
            formIsValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            showError("emailError", messages.emailInvalid);
            formIsValid = false;
        }

        if (phone.value.trim() === "") {
            showError("phoneError", messages.phoneRequired);
            formIsValid = false;
        } else if (!/^\+?[0-9\s-]{8,20}$/.test(phone.value.trim())) {
            showError("phoneError", messages.phoneInvalid);
            formIsValid = false;
        }

        if (petName.value.trim() === "") {
            showError("petNameError", messages.petNameRequired);
            formIsValid = false;
        }

        const selectedPetType =
            document.querySelector('input[name="petType"]:checked');

        if (!selectedPetType) {
            showError("petTypeError", messages.petTypeRequired);
            formIsValid = false;
        }

        if (service.value === "") {
            showError("serviceError", messages.serviceRequired);
            formIsValid = false;
        }

        if (date.value === "") {
            showError("dateError", messages.dateRequired);
            formIsValid = false;
        } else if (date.value < localDate) {
            showError("dateError", messages.dateInvalid);
            formIsValid = false;
        }

        if (!consent.checked) {
            showError("consentError", messages.consentRequired);
            formIsValid = false;
        }

        if (formIsValid) {
            successMessage.textContent = messages.success;
            contactForm.reset();
        }
    });
}
