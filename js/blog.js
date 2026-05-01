// BLOG POST TOGGLE ONLY
document.addEventListener("DOMContentLoaded", () => {
    const blogItems = document.querySelectorAll(".blog-item h3");

    blogItems.forEach(item => {
        item.addEventListener("click", () => {
            const postContent = item.parentElement.querySelector(".post-content");
            postContent.classList.toggle("show");
        });
    });
});

// Slideshow logic (supports multiple slideshows on the page)
function changeSlide(btn, dir) {
    const container = btn.closest('.slideshow-container');
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    let current = [...slides].findIndex(s => s.classList.contains('active'));
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (current + dir + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
}
function goToSlide(dot, n) {
    const container = dot.closest('.slideshow-container');
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}
