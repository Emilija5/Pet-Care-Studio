document.addEventListener("DOMContentLoaded", () => {
    serviceFilters();
    FAQ();
});

function serviceFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".services-cards");

    if (buttons.length > 0) buttons[0].classList.add("active");

    buttons.forEach(button => button.addEventListener("click", (e) => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {
            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        })
    }))
}

function FAQ() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        question.addEventListener("click", (e) => {
            const current = question.parentElement;

            document.querySelectorAll(".faq-button").forEach(button => {
                if (button !== current) {
                    button.classList.remove("active");
                }
            })
            current.classList.toggle("active");
        })
    })
}