// Parallax background on scroll
const ambientBg = document.querySelector('.ambient-bg');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (ambientBg) {
        ambientBg.style.transform = `translateY(${scrolled * 0.12}px)`;
    }
});

// Technical details toggle
document.querySelectorAll('.btn-tech-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const details = btn.parentElement.nextElementSibling;
        btn.setAttribute('aria-expanded', !isExpanded);
        details.hidden = isExpanded;
        const icon = btn.querySelector('.icon');
        if (icon) icon.textContent = isExpanded ? '+' : '−';
    });
});

// Intersection observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.article-card, .project-file').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                submitBtn.textContent = 'Sent!';
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitBtn.textContent = 'Error';
            submitBtn.disabled = false;
            setTimeout(() => {
                submitBtn.textContent = originalText;
            }, 3000);
        }
    });
}

console.log('%c The Haptic Journal v3.2 ', 'background: #00E5FF; color: #0B0D12; font-weight: bold; padding: 8px;');
