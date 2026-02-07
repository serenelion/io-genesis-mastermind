// Genesis Event — Dream Manifestation Portal

// Smooth scroll
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

// Dream Portal Form
const form = document.getElementById('dream-portal-form');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Manifesting...';
        submitBtn.disabled = true;
        
        try {
            // TODO: Replace with your form endpoint (Netlify Forms, Airtable, email service)
            console.log('Dream portal submission:', data);
            
            // Simulate submission
            await new Promise(resolve => setTimeout(resolve, 1200));
            
            // Success
            alert('Your dream has been received. 🌟\n\nWe\'ll reach out within one week if there\'s alignment.\n\nThank you for stepping forward.');
            
            form.reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (error) {
            console.error('Portal error:', error);
            alert('There was an error. Please email us directly at genesis@terralux.org');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Scroll-based nav
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(250, 248, 245, 0.98)';
        nav.style.boxShadow = '0 2px 12px rgba(45, 49, 66, 0.06)';
        nav.style.backdropFilter = 'blur(12px)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
        nav.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// Fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Hero always visible
document.querySelector('.hero').style.opacity = '1';
document.querySelector('.hero').style.transform = 'translateY(0)';

// Schedule item hover
document.querySelectorAll('.schedule-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(4px)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});
