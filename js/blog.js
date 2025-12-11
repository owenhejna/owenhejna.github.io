// BLOG POST TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const blogItems = document.querySelectorAll(".blog-item h3");

    blogItems.forEach(item => {
        item.addEventListener("click", () => {
            const post = item.nextElementSibling.nextElementSibling; // targets .post-content
            post.classList.toggle("show");
        });
    });

    // Linocut Carousel Functionality
    const slides = document.querySelectorAll('.lino-slide');
    const prevBtn = document.querySelector('.lino-prev');
    const nextBtn = document.querySelector('.lino-next');
    
    let currentSlide = 0;
    
    // Show the first slide initially
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }
    
    // Initialize - show first slide
    if (slides.length > 0) {
        showSlide(0);
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }
});
