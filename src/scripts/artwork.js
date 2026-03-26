const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.querySelector(".lightbox-close");
const imageButtons = document.querySelectorAll(".art-image-trigger");
const backdrop = document.querySelector(".lightbox-backdrop");

function openLightbox(src, altText) {
    lightboxImage.src = src;
    lightboxImage.alt = altText;
    lightboxCaption.textContent = altText;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
}

imageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const image = button.querySelector("img");
        if (!image) {
            return;
        }
        openLightbox(image.src, image.alt || "Artwork image");
    });
});

closeButton.addEventListener("click", closeLightbox);
backdrop.addEventListener("click", closeLightbox);

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
    }
});
