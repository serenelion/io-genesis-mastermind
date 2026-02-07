// Genesis Event — Main JavaScript

// Smooth Scroll
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

// Genesis Form Submission Handler
const form = document.getElementById('genesis-form');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        try {
            // TODO: Replace with actual form submission endpoint
            // Options: Netlify Forms, Airtable, or email to genesis@terralux.org
            console.log('Genesis Event interest submitted:', data);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            alert('Thank you for your interest in the Genesis Event! We\'ll review your submission and reach out within 1 week if there\'s alignment.');
            
            // Reset form
            form.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your interest. Please email us directly at genesis@terralux.org');
        } finally {
            // Restore button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Add scroll-based header shadow
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(250, 250, 250, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
        nav.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
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

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Make sure hero is always visible
document.querySelector('.hero').style.opacity = '1';
document.querySelector('.hero').style.transform = 'translateY(0)';

// Schedule item hover effects
const scheduleItems = document.querySelectorAll('.schedule-item');
scheduleItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Ecosystem card hover effects
const ecosystemCards = document.querySelectorAll('.ecosystem-card');
ecosystemCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = '0 8px 20px rgba(216, 182, 112, 0.3)';
        this.style.transition = 'all 0.2s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});
