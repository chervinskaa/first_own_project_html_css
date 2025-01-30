document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".offer_items");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    const scrollAmount = 1200;

    nextButton.addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevButton.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});
