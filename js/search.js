// ===================================
// GreenNookGarden - Search Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all search page features
    initSearchPage();
    initMobileMenu();
    initSmoothScroll();
});

// ===================================
// Main Search Page Initialization
// ===================================
function initSearchPage() {
    const searchInput = document.getElementById('mainSearchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const filterChips = document.querySelectorAll('.filter-chip');
    const sortDropdown = document.getElementById('sortDropdown');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    
    let currentFilter = 'all';
    let currentSearchTerm = '';
    
    // Get URL parameters if any
    const urlParams = new URLSearchParams(window.location.search);
    const urlSearch = urlParams.get('q');
    const urlCategory = urlParams.get('category');
    
    // Apply URL parameters if present
    if (urlSearch) {
        searchInput.value = urlSearch;
        currentSearchTerm = urlSearch;
        clearSearchBtn.classList.add('active');
    }
    
    if (urlCategory) {
        currentFilter = urlCategory;
        filterChips.forEach(chip => {
            if (chip.getAttribute('data-filter') === urlCategory) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });
    }
    
    // Initial filter
    filterAndSearchArticles(currentSearchTerm, currentFilter);
    
    // Search input event
    searchInput.addEventListener('input', function(e) {
        currentSearchTerm = e.target.value.trim();
        
        // Show/hide clear button
        if (currentSearchTerm) {
            clearSearchBtn.classList.add('active');
        } else {
            clearSearchBtn.classList.remove('active');
        }
        
        filterAndSearchArticles(currentSearchTerm, currentFilter);
    });
    
    // Clear search button
    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        currentSearchTerm = '';
        clearSearchBtn.classList.remove('active');
        searchInput.focus();
        filterAndSearchArticles('', currentFilter);
    });
    
    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Update active state
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter value
            currentFilter = this.getAttribute('data-filter');
            
            // Apply filter
            filterAndSearchArticles(currentSearchTerm, currentFilter);
        });
    });
    
    // Sort dropdown
    sortDropdown.addEventListener('change', function() {
        sortArticles(this.value);
    });
    
    // Suggestion chips
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const suggestion = this.getAttribute('data-suggestion');
            searchInput.value = suggestion;
            currentSearchTerm = suggestion;
            clearSearchBtn.classList.add('active');
            searchInput.focus();
            filterAndSearchArticles(suggestion, currentFilter);
            
            // Scroll to results
            document.getElementById('searchResultsGrid').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ===================================
// Filter and Search Articles
// ===================================
function filterAndSearchArticles(searchTerm, category) {
    const articles = document.querySelectorAll('.article-card');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const noResultsMessage = document.getElementById('noResultsMessage');
    let visibleCount = 0;
    
    searchTerm = searchTerm.toLowerCase();
    
    articles.forEach(article => {
        const title = article.querySelector('.article-title').textContent.toLowerCase();
        const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();
        const articleCategory = article.getAttribute('data-category');
        const categoryText = article.querySelector('.article-category').textContent.toLowerCase();
        
        // Check category filter
        const categoryMatch = category === 'all' || articleCategory === category;
        
        // Check search term
        const searchMatch = !searchTerm || 
                          title.includes(searchTerm) || 
                          excerpt.includes(searchTerm) || 
                          categoryText.includes(searchTerm);
        
        // Show or hide article
        if (categoryMatch && searchMatch) {
            article.style.display = 'block';
            article.style.animation = 'fadeInUp 0.5s ease';
            visibleCount++;
        } else {
            article.style.display = 'none';
        }
    });
    
    // Update results count
    updateResultsCount(visibleCount);
    
    // Show/hide no results message
    if (visibleCount === 0) {
        resultsGrid.style.display = 'none';
        noResultsMessage.style.display = 'block';
    } else {
        resultsGrid.style.display = 'grid';
        noResultsMessage.style.display = 'none';
    }
}

// ===================================
// Update Results Count
// ===================================
function updateResultsCount(count) {
    const resultNumber = document.getElementById('resultNumber');
    const resultsCount = document.getElementById('resultsCount');
    
    resultNumber.textContent = count;
    
    if (count === 0) {
        resultsCount.innerHTML = 'No articles found';
    } else if (count === 1) {
        resultsCount.innerHTML = 'Showing <strong>1</strong> article';
    } else {
        resultsCount.innerHTML = `Showing <strong>${count}</strong> articles`;
    }
}

// ===================================
// Sort Articles
// ===================================
function sortArticles(sortBy) {
    const grid = document.getElementById('searchResultsGrid');
    const articles = Array.from(document.querySelectorAll('.article-card'));
    
    // Only sort visible articles
    const visibleArticles = articles.filter(article => article.style.display !== 'none');
    const hiddenArticles = articles.filter(article => article.style.display === 'none');
    
    // Sort based on selected option
    visibleArticles.sort((a, b) => {
        if (sortBy === 'newest') {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        } else if (sortBy === 'oldest') {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateA - dateB;
        } else if (sortBy === 'title') {
            const titleA = a.getAttribute('data-title').toLowerCase();
            const titleB = b.getAttribute('data-title').toLowerCase();
            return titleA.localeCompare(titleB);
        }
    });
    
    // Clear grid
    grid.innerHTML = '';
    
    // Re-append sorted visible articles
    visibleArticles.forEach(article => {
        grid.appendChild(article);
    });
    
    // Re-append hidden articles
    hiddenArticles.forEach(article => {
        grid.appendChild(article);
    });
    
    // Animate sorted articles
    visibleArticles.forEach((article, index) => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            article.style.transition = 'all 0.5s ease';
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

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
// Smooth Scroll
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
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

// ===================================
// Keyboard Shortcuts
// ===================================
document.addEventListener('keydown', function(e) {
    // Focus search on '/' key
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('mainSearchInput').focus();
    }
    
    // Clear search on 'Escape' key
    if (e.key === 'Escape' && document.activeElement === document.getElementById('mainSearchInput')) {
        document.getElementById('clearSearch').click();
    }
});


