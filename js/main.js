// ===================================
// GreenNookGarden - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initHomeSearch();
    initPagination();
    initSmoothScroll();
    initAnimations();
});

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('active');
        });
    }
}

// ===================================
// Home Search - Redirect to Search Page
// ===================================
function initHomeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // Listen for Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }
}

// Perform search and redirect to search page
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        // Redirect to search page with query parameter
        window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
    } else {
        // If empty, just go to search page
        window.location.href = 'search.html';
    }
}

// ===================================
// Category Cards - Redirect to Search Page
// ===================================
// Category cards now redirect to search page with category parameter
// No filtering needed on home page

// ===================================
// Pagination
// ===================================
function initPagination() {
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    const articlesPerPage = 6;
    
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            
            // Update active state
            paginationBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to top of articles
            document.querySelector('.articles').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // In a real application, you would load different articles here
            // For now, we'll just show an animation
            animatePageChange();
        });
    });
}

function animatePageChange() {
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach((article, index) => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            article.style.transition = 'all 0.5s ease';
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ===================================
// Smooth Scroll
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// Scroll Animations
// ===================================
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all article cards
    document.querySelectorAll('.article-card, .category-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}


// ===================================
// Contact Form Submission
// ===================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show success message
            showMessage('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            form.reset();
        });
    }
}

function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = text;
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#74b9ff' : '#ff7675'};
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => messageDiv.remove(), 500);
    }, 3000);
}

// ===================================
// Header Scroll Effect
// ===================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Initialize contact form if on contact page
if (document.getElementById('contactForm')) {
    initContactForm();
}


