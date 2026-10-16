const menuButton = document.getElementById("menu-button");
const mainNavigation = document.getElementById("main-navigation");

if (menuButton && mainNavigation) {
    menuButton.addEventListener("click", function () {
        const menuIsOpen = mainNavigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", menuIsOpen);

        if (menuIsOpen) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });
}