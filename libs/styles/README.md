# E-commerce Styles Library

A modern CSS theme and static HTML templates for building e-commerce applications across different frontend frameworks.

## Overview

This library provides a comprehensive set of CSS classes and HTML templates that can be reused across various web frontend technology stacks. The theme is designed with modern e-commerce best practices in mind, featuring a clean design, responsive layout, and accessibility considerations.

## Features

- **Pure CSS**: No preprocessors, frameworks, or build tools required
- **Modern Design**: Clean, professional appearance suitable for e-commerce
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Component-Based**: Modular CSS classes for easy customization
- **Accessible**: Semantic HTML and keyboard navigation support
- **Reusable**: Designed to work with any frontend framework

## Files

- `theme.css` - Main CSS theme with all components and utilities
- `index.html` - E-commerce landing page template
- `products.html` - Product listing page template  
- `checkout.html` - Shopping cart and checkout page template

## CSS Components

### Layout
- Container system with responsive breakpoints
- CSS Grid and Flexbox utilities
- Spacing and positioning utilities

### Components
- Navigation bars
- Product cards
- Shopping cart items
- Forms and inputs
- Buttons and badges
- Cards and sections

### Color Palette
- Primary: Blue (#2563eb)
- Secondary: Slate gray (#64748b) 
- Accent: Amber (#f59e0b)
- Success: Emerald (#10b981)
- Error: Red (#ef4444)
- Warning: Amber (#f59e0b)

### Typography
- Font Family: Inter (with system font fallbacks)
- Responsive font sizes
- Proper heading hierarchy
- Readable line heights

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run serve
   ```
   
   This will start a local server on http://localhost:3999

3. **View the demo:**
   - Landing page: http://localhost:3999
   - Products page: http://localhost:3999/products.html
   - Checkout page: http://localhost:3999/checkout.html

## Using in Your Project

### Option 1: Copy the CSS
Copy `theme.css` to your project and include it in your HTML:

```html
<link rel="stylesheet" href="path/to/theme.css">
```

### Option 2: Use as Reference
Use the HTML templates and CSS classes as a reference for building your own components in React, Vue, Angular, or other frameworks.

### Option 3: Customize
Modify the CSS custom properties in the `:root` selector to customize colors, spacing, and other design tokens:

```css
:root {
  --primary-color: #your-brand-color;
  --font-family-primary: 'Your-Font', sans-serif;
  /* ... other variables */
}
```

## Example Usage

### Product Card
```html
<div class="product-card">
  <img src="product.jpg" alt="Product" class="product-image">
  <div class="product-info">
    <h3 class="product-title">Product Name</h3>
    <div class="product-price">$99.99</div>
    <button class="btn btn-primary btn-full">Add to Cart</button>
  </div>
</div>
```

### Navigation
```html
<nav class="navbar">
  <div class="container">
    <div class="flex items-center justify-between">
      <a href="#" class="navbar-brand">Brand</a>
      <ul class="navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

This is a demo project for comparing frontend frameworks. Feel free to use and modify as needed for your projects.
