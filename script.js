// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.glass-card, .section-title, .section-subtitle, .about-text, .skill-category, .social-link');
animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===================================
// SKILL BAR ANIMATIONS
// ===================================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.style.width;
            skillBar.style.width = '0%';

            setTimeout(() => {
                skillBar.style.width = width;
            }, 200);

            skillObserver.unobserve(skillBar);
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===================================
// CONTACT FORM HANDLING (Web3Forms)
// ===================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();

            if (response.ok) {
                // Success!
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';

                // Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.style.display = 'flex';
                    formSuccess.style.display = 'none';
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 5000);
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            alert('Oops! Something went wrong. Please try again or email me directly.');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}


// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// ===================================
// PROJECT CARD INTERACTIONS
// ===================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===================================
// PARALLAX EFFECT FOR GRADIENT ORBS
// ===================================
const gradientOrbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    gradientOrbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL)
// ===================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     setTimeout(() => {
//         typeWriter(heroSubtitle, originalText, 50);
//     }, 1000);
// }

// ===================================
// CURSOR TRAIL EFFECT (OPTIONAL PREMIUM FEATURE)
// ===================================
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });

    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    highlightNavLink();
}, 10));

// ===================================
// PRELOADER (OPTIONAL)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay-1, .animate-fade-in-delay-2, .animate-fade-in-delay-3');
        heroElements.forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
});

// ===================================
// CONSOLE MESSAGE (EASTER EGG)
// ===================================
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in how this portfolio was built?', 'font-size: 14px; color: #8b5cf6;');
console.log('%cFeel free to reach out! Let\'s connect and talk tech.', 'font-size: 14px; color: #06b6d4;');

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus visible styles for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===================================
// FORM VALIDATION ENHANCEMENTS
// ===================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    });

    input.addEventListener('focus', function () {
        this.style.borderColor = '#6366f1';
    });
});

// Email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.value) && this.value.trim() !== '') {
            this.style.borderColor = '#ef4444';
        }
    });
}

// ===================================
// STATS COUNTER ANIMATION
// ===================================
const statNumbers = document.querySelectorAll('.stat-number');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));

            if (!isNaN(numericValue)) {
                animateCounter(target, 0, numericValue, 2000, finalValue.includes('+'));
                statsObserver.unobserve(target);
            }
        }
    });
}, observerOptions);

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

function animateCounter(element, start, end, duration, hasPlus = false) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = hasPlus ? `${end}+` : end;
            clearInterval(timer);
        } else {
            element.textContent = hasPlus ? `${Math.floor(current)}+` : Math.floor(current);
        }
    }, 16);
}

// ===================================
// INITIALIZE
// ===================================
console.log('Portfolio initialized successfully! 🚀');
