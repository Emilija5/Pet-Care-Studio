const choice = localStorage.getItem("cookieChoice");
const english = window.location.pathname.includes("/en/");

if (!choice) {
    const banner = document.createElement("div");

    banner.className = "cookie-banner";

    banner.innerHTML = english ? `
        <p>This page uses cookies for a better user experience.</p>
        <button id="acceptCookies">Accept</button>
        <button id="rejectCookies">Reject</button>
    ` : `
        <p>Оваа страница користи колачиња за подобро корисничко искуство.</p>
        <button id="acceptCookies">Прифати</button>
        <button id="rejectCookies">Одбиј</button>
    `;

    document.body.appendChild(banner);

    document.getElementById("acceptCookies").onclick = function () {
        localStorage.setItem("cookieChoice", "accepted");
        banner.remove();
    };

    document.getElementById("rejectCookies").onclick = function () {
        localStorage.setItem("cookieChoice", "rejected");
        banner.remove();
    };
}

const cookieSettings = document.getElementById("cookieSettings");

if (cookieSettings) {
    cookieSettings.onclick = function () {
        localStorage.removeItem("cookieChoice");
        location.reload();
    };
}