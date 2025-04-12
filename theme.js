// Theme functionality
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const icon = themeToggle.querySelector('i');

// Theme colors and styles
const themes = {
    light: {
        background: '#F5F5F5',
        text: '#333333',
        cardBg: '#ffffff',
        navBg: '#000000',
        navText: '#ffffff',
        heroOverlay: 'linear-gradient(135deg, rgba(138, 43, 226, 0.9), rgba(147, 112, 219, 0.9))',
        featureBg: '#ffffff',
        benefitBg: '#333333',
        benefitCard: 'rgba(255, 255, 255, 0.1)',
        statsBg: 'linear-gradient(135deg, #8A2BE2, #9370DB)',
        ctaBg: '#ffffff',
        cardShadow: 'rgba(0, 0, 0, 0.1)',
        inputBg: '#ffffff',
        inputText: '#333333',
        inputBorder: '#F5F5F5',
        pricingCardBg: '#F5F5F5',
        testimonialCardBg: 'rgba(255, 255, 255, 0.1)',
        blogCardBg: '#F5F5F5',
        faqCardBg: '#ffffff'
    },
    dark: {
        background: '#1a1a1a',
        text: '#ffffff',
        cardBg: '#2d2d2d',
        navBg: '#000000',
        navText: '#ffffff',
        heroOverlay: 'linear-gradient(135deg, rgba(138, 43, 226, 0.95), rgba(147, 112, 219, 0.95))',
        featureBg: '#2d2d2d',
        benefitBg: '#1a1a1a',
        benefitCard: 'rgba(255, 255, 255, 0.05)',
        statsBg: 'linear-gradient(135deg, #6a1eb9, #7a5bb8)',
        ctaBg: '#2d2d2d',
        cardShadow: 'rgba(0, 0, 0, 0.3)',
        inputBg: '#2d2d2d',
        inputText: '#ffffff',
        inputBorder: '#333333',
        pricingCardBg: '#2d2d2d',
        testimonialCardBg: 'rgba(255, 255, 255, 0.05)',
        blogCardBg: '#2d2d2d',
        faqCardBg: '#2d2d2d'
    }
};

// Function to apply theme
function applyTheme(theme) {
    const colors = themes[theme];
    
    // Set CSS variables
    Object.entries(colors).forEach(([key, value]) => {
        const cssVar = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(cssVar, value);
    });

    // Update specific elements based on page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'features.html':
            updateFeatures(theme);
            break;
        case 'benefits.html':
            updateBenefits(theme);
            break;
        case 'pricing.html':
            updatePricing(theme);
            break;
        case 'testimonials.html':
            updateTestimonials(theme);
            break;
        case 'blog.html':
            updateBlog(theme);
            break;
        case 'help-center.html':
            updateHelpCenter(theme);
            break;
        case 'contact.html':
            updateContact(theme);
            break;
    }
}

// Page-specific updates
function updateFeatures(theme) {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.style.backgroundColor = themes[theme].cardBg;
    });
}

function updateBenefits(theme) {
    const cards = document.querySelectorAll('.benefit-item');
    cards.forEach(card => {
        card.style.backgroundColor = themes[theme].benefitCard;
    });
}

function updatePricing(theme) {
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        card.style.backgroundColor = themes[theme].pricingCardBg;
    });
}

function updateTestimonials(theme) {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => {
        card.style.backgroundColor = themes[theme].testimonialCardBg;
    });
}

function updateBlog(theme) {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
        card.style.backgroundColor = themes[theme].blogCardBg;
    });
}

function updateHelpCenter(theme) {
    const cards = document.querySelectorAll('.faq-item');
    cards.forEach(card => {
        card.style.backgroundColor = themes[theme].faqCardBg;
    });
}

function updateContact(theme) {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.backgroundColor = themes[theme].inputBg;
        input.style.color = themes[theme].inputText;
        input.style.borderColor = themes[theme].inputBorder;
    });
}

// Function to update theme icon
function updateThemeIcon(isDark) {
    icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');
}

// Toggle theme on button click
themeToggle.addEventListener('click', function() {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme === 'dark');
});

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.setAttribute('data-theme', 
                body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
            );
        });
    }

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if (hamburger && navLinks && menuOverlay) {
        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        }
        
        hamburger.addEventListener('click', toggleMenu);
        
        // Close menu when clicking on a link or outside the menu
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(item => {
            item.addEventListener('click', toggleMenu);
        });
        
        menuOverlay.addEventListener('click', toggleMenu);
    }
}); 