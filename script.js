// Testimonial slider
let currentSlide = 0;

function changeSlide(index) {
    currentSlide = index;
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // In a real implementation, you would also update the testimonial content
    console.log('Changed to slide:', index);
}

// Auto-rotate testimonials (optional)
function autoRotateTestimonials() {
    const dots = document.querySelectorAll('.dot');
    currentSlide = (currentSlide + 1) % dots.length;
    changeSlide(currentSlide);
}

// Uncomment to enable auto-rotation every 5 seconds
// setInterval(autoRotateTestimonials, 5000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading class removal after page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
