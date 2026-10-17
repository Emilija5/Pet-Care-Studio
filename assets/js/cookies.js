document.addEventListener("DOMContentLoaded", function () {
    const storageKey = "petCareCookieChoice";
    const pageIsEnglish = document.documentElement.lang === "en";

    const text = pageIsEnglish
        ? {
            message: "We use cookies to remember your preferences and improve your experience.",
            accept: "Accept",
            reject: "Reject",
            settings: "Cookie settings"
        }
        : {
            message: "Користиме колачиња за да ги запомниме вашите поставки и да го подобриме вашето искуство.",
            accept: "Прифати",
            reject: "Одбиј",
            settings: "Поставки за колачиња"
        };

    function getSavedChoice() {
        try {
            return localStorage.getItem(storageKey);
        } catch (error) {
            return null;
        }
    }

    function saveChoice(choice) {
        try {
            localStorage.setItem(storageKey, choice);
        } catch (error) {
            console.log("Cookie preference could not be saved.");
        }
    }

    function removeSavedChoice() {
        try {
            localStorage.removeItem(storageKey);
        } catch (error) {
            console.log("Cookie preference could not be removed.");
        }
    }

    function closeBanner() {
        const banner = document.getElementById("cookieBanner");

        if (banner) {
            banner.remove();
        }
    }

    function showBanner() {
        if (document.getElementById("cookieBanner")) {
            return;
        }

        const banner = document.createElement("aside");
        banner.id = "cookieBanner";
        banner.className = "cookie-banner";
        banner.setAttribute("role", "dialog");
        banner.setAttribute("aria-live", "polite");
        banner.setAttribute("aria-label", text.settings);

        banner.innerHTML = `
            <p>${text.message}</p>
            <div class="cookie-buttons">
                <button type="button" class="cookie-accept">
                    ${text.accept}
                </button>
                <button type="button" class="cookie-reject">
                    ${text.reject}
                </button>
            </div>
        `;

        document.body.appendChild(banner);

        banner.querySelector(".cookie-accept").addEventListener("click", function () {
            saveChoice("accepted");
            closeBanner();
        });

        banner.querySelector(".cookie-reject").addEventListener("click", function () {
            saveChoice("rejected");
            closeBanner();
        });
    }

    const footerContainer = document.querySelector(".footer-container");
    let settingsButton = document.getElementById("cookieSettings");

    if (!settingsButton && footerContainer) {
        settingsButton = document.createElement("button");
        settingsButton.id = "cookieSettings";
        settingsButton.type = "button";
        settingsButton.textContent = text.settings;
        footerContainer.appendChild(settingsButton);
    }

    if (settingsButton) {
        settingsButton.classList.add("cookie-settings-button");
        settingsButton.textContent = text.settings;

        settingsButton.addEventListener("click", function () {
            removeSavedChoice();
            showBanner();
        });
    }

    if (!getSavedChoice()) {
        showBanner();
    }
});
