# IUGB Library - Mobile App for Students

A modern mobile-first web application designed for students at the International University of Grand-Bassam (IUGB). The app provides access to academic resources with secure authentication and a premium subscription model.

## Features

### Authentication
- Sign in and sign up with IUGB email validation (`@iugb.edu.ci`)
- Password validation with a minimum length requirement
- Session persistence using `localStorage`

### Program Navigation
- **BSS (Bachelor of Science)**: Mathematics, Methods and Techniques, Computer Science, Statistics
- **BBA (Bachelor of Business Administration)**: Finance, Marketing, Management, Accounting

### Book Library
- Books organized by course
- Visual indicators for premium resources
- Read and download actions
- Built-in book search by title, author, or keyword
- Restricted access to premium books

### Premium Subscription
- Access to all premium books
- Intuitive upgrade flow
- Cancel anytime

## Design

### Design Principles
- **Mobile-first**: Optimized for phones and smaller screens
- **IUGB-inspired palette**: Blue (`#0056b3`) and yellow (`#ffc107`)
- **Distinct typography**: Montserrat for headings and Poppins for body text
- **Smooth animations**: Transitions and micro-interactions across the interface

### Visual Elements
- Interactive cards with hover effects
- Premium state indicators
- Font Awesome icons for clarity
- Relevant illustration imagery

## Technical Structure

### Main Files
```text
├── index.html
├── style.css
├── app.js
└── README.md
```

### Application Areas
- **Authentication**: Sign-in and sign-up validation
- **Navigation**: Program and course browsing
- **Books**: Course resources, filtering, and search
- **Premium**: Upgrade experience and premium access handling

## Local Usage

1. Download the project files into a folder.
2. Open `index.html` in a modern web browser.
3. The application runs entirely on the client side.

### Test Authentication
- Email: `student@iugb.edu.ci`
- Password: minimum 6 characters

## Compatibility

- **Browsers**: Recent versions of Chrome, Firefox, Safari, and Edge
- **Devices**: Mobile, tablet, and desktop
- **Connectivity**: Works offline after the initial load

## Security

- Client-side validation for IUGB email addresses
- Session storage via `localStorage`
- Protection against unauthorized access to premium resources

## Strengths

1. User-friendly responsive interface
2. Fast loading and lightweight interactions
3. Accessible visual contrast and keyboard-friendly flows
4. Maintainable structure for future updates
5. Easy extensibility for new programs, courses, and books

## License

This application is an educational project developed for the International University of Grand-Bassam.

Developed by [Deerflow](https://deerflow.tech)
