# GreenNookGarden - Lifestyle Blog Website

A minimalist, static blog website featuring comprehensive lifestyle content across six categories: Fashion & Accessories, Health & Beauty, Home & Garden, Travel & Accommodation, Finance & Insurance, and Food & Beverage.

## Features

### Design
- **Minimalist Aesthetic**: Clean design with ample whitespace, limited color palette, and simple lines
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: CSS transitions and scroll animations for enhanced user experience
- **Modern Typography**: Clean, readable fonts with proper hierarchy

### Functionality
- **Category Filtering**: Click on category cards to filter articles by category
- **Search Function**: Real-time search across article titles, descriptions, and categories
- **Pagination**: Navigate through article pages
- **Mobile Menu**: Responsive navigation for mobile devices
- **Social Media Integration**: Connected social media icons in widget

### Content
- **5 Detailed Articles**: Each article includes:
  - High-quality, relevant images from Unsplash
  - Medium-length content (8-12 minute read time)
  - Product recommendations with images and ratings
  - Published dates from January 2025 to August 2025
  - Professional writing with proper structure

### Pages
1. **Homepage (index.html)**
   - Hero section with site introduction
   - Search bar
   - Category grid (6 categories)
   - Latest articles display
   - Pagination
   - Social media widget

2. **Search Page (search.html)** ⭐ NEW
   - Enhanced large search box
   - Category filter chips
   - Sort functionality (Newest, Oldest, A-Z)
   - Results counter
   - URL parameter support
   - Suggested searches
   - Keyboard shortcuts (/ to focus, Esc to clear)

3. **Article Pages** (5 articles in `/articles/` folder)
   - Summer Fashion Trends 2025
   - The Ultimate Morning Skincare Routine
   - Best Indoor Plants for Every Room
   - Top 10 Mountain Retreat Destinations
   - Quick and Healthy Weeknight Recipes

4. **About Page (about.html)**
   - Company mission and story
   - Values and coverage areas
   - Community invitation

5. **Contact Page (contact.html)**
   - Contact form with validation
   - FAQ section
   - Newsletter subscription
   - Contact information

6. **Privacy Policy Page (privacy-policy.html)** ⭐ NEW
   - Comprehensive privacy information
   - GDPR and CCPA compliance
   - User rights and data protection
   - Cookie policy
   - Contact information for privacy inquiries
   - 15 detailed sections covering all aspects

## File Structure

```
GreenNookGarden/
│
├── index.html                 # Homepage
├── about.html                 # About page
├── contact.html               # Contact page
├── search.html                # ⭐ Dedicated search page
├── privacy-policy.html        # ⭐ Privacy policy page
├── README.md                  # This file
├── SEARCH_PAGE_GUIDE.md       # Search page documentation
├── SEARCH_TEST_GUIDE.md       # Search functionality test guide
├── PRIVACY_POLICY_INFO.md     # ⭐ Privacy policy documentation
│
├── css/
│   └── style.css             # Main stylesheet (minimalist design)
│
├── js/
│   ├── main.js               # Main JavaScript functionality
│   └── search.js             # ⭐ Search page JavaScript
│
└── articles/
    ├── summer-fashion-trends-2025.html
    ├── ultimate-skincare-routine.html
    ├── indoor-plants-guide.html
    ├── mountain-retreat-destinations.html
    └── quick-healthy-recipes.html
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome 6.4.0**: Icons
- **Unsplash API**: High-quality images

## How to Use

1. **Open the website**:
   - Simply open `index.html` in any modern web browser
   - No server or build process required - it's a static website

2. **Navigate**:
   - Use the top navigation to move between pages
   - Click on category cards to filter articles
   - Use the search bar to find specific content
   - Click on article cards to read full articles

3. **Responsive Testing**:
   - Resize your browser window to see responsive design
   - Test on mobile devices for full mobile experience

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Philosophy

The design follows minimalist principles:
- **Whitespace**: Generous spacing for breathing room
- **Limited Colors**: Primary focus on black, white, and blue accent
- **Simple Lines**: Clean borders and subtle shadows
- **No Clutter**: Every element serves a purpose
- **Clarity**: Easy to read and navigate
- **Functionality First**: User experience over decoration

## Image Sources

All images are sourced from Unsplash, a free stock photo service. Images are optimized for web performance and deeply matched to article content.

## Customization

To customize the website:

1. **Colors**: Edit CSS variables in `css/style.css`:
   ```css
   :root {
       --primary-color: #2d3436;
       --accent-color: #74b9ff;
       /* Add your custom colors */
   }
   ```

2. **Content**: Edit HTML files directly to change text content

3. **Images**: Replace image URLs with your own image sources

4. **Styling**: Modify `css/style.css` for design changes

## Performance

- Lightweight design with minimal dependencies
- Optimized images from Unsplash CDN
- CSS animations using hardware acceleration
- Fast loading times on all devices

## Recent Updates

### Version 1.1 - Enhanced Search Experience
- ✅ **New Dedicated Search Page**: Full-featured search interface
- ✅ **Category Filtering**: Quick filter buttons for all categories
- ✅ **Sort Options**: Sort by date or title
- ✅ **URL Parameters**: Direct links to specific searches
- ✅ **Keyboard Shortcuts**: / to focus, Esc to clear
- ✅ **Suggested Searches**: Help users when no results found
- ✅ **Results Counter**: See how many articles match
- ✅ **Navigation Integration**: Search icon in all pages

## Future Enhancements

Potential additions:
- Search history and favorites
- Auto-complete suggestions
- Advanced filters (date range, tags)
- Backend integration for dynamic content
- User comments system
- Newsletter subscription backend
- Blog post likes/shares
- Related articles suggestions
- Dark mode toggle

## License

This project is created for demonstration purposes. All article content is original. Images are from Unsplash and follow their license terms.

## Contact

For questions or feedback about this project, visit the contact page or reach out via the social media links provided on the website.

---

**Built with care for modern web standards and user experience.**

© 2025 GreenNookGarden. All rights reserved.


