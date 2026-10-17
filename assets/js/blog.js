const showMoreButton = document.getElementById("showMoreBtn");
const extraPosts = document.querySelectorAll(".extra-post");

if (showMoreButton && extraPosts.length > 0) {
    showMoreButton.addEventListener("click", function () {
        const shouldShowPosts =
            !extraPosts[0].classList.contains("visible");

        extraPosts.forEach(function (post) {
            post.classList.toggle("visible", shouldShowPosts);
        });

        const pageIsEnglish =
            document.documentElement.lang === "en";

        showMoreButton.textContent = pageIsEnglish
            ? (shouldShowPosts ? "Show Less" : "Show More")
            : (shouldShowPosts ? "Прикажи помалку" : "Прикажи повеќе");
    });
}