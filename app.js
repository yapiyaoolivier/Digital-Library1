// ============================================
// IUGB LIBRARY - JavaScript Application
// ============================================

// ============================================
// COURSE DATA
// ============================================

const coursesData = {
    mathematics: {
        title: 'Mathematics',
        icon: 'fas fa-calculator',
        description: 'Core mathematics resources for problem-solving, theory, and practice.',
        books: [
            { id: 1, title: 'Linear Algebra', author: 'David C. Lay', description: 'Fundamental concepts', isPremium: false },
            { id: 2, title: 'Calculus', author: 'James Stewart', description: 'Advanced methods', isPremium: true },
            { id: 3, title: 'Analytical Geometry', author: 'L. Loomis', description: 'Theory and applications', isPremium: false },
            { id: 4, title: 'Mathematical Statistics', author: 'Sheldon Ross', description: 'Probability concepts', isPremium: true },
            { id: 5, title: 'Differential Equations', author: 'Dennis Zill', description: 'Step-by-step solutions', isPremium: false },
            { id: 6, title: 'Complex Analysis', author: 'Lars Ahlfors', description: 'Analytic functions', isPremium: true }
        ]
    },
    met: {
        title: 'Methods and Techniques',
        icon: 'fas fa-book-reader',
        description: 'Study strategies and academic methods to improve learning outcomes.',
        books: [
            { id: 7, title: 'Note-Taking Techniques', author: 'Tony Buzan', description: 'Effective mind mapping', isPremium: false },
            { id: 8, title: 'Time Management', author: 'David Allen', description: 'Getting Things Done', isPremium: false },
            { id: 9, title: 'Memory and Learning', author: 'Hermann Ebbinghaus', description: 'Brain science insights', isPremium: true },
            { id: 10, title: 'Presentation Techniques', author: 'Nancy Duarte', description: 'Slide design and delivery', isPremium: false }
        ]
    },
    cs: {
        title: 'Computer Science',
        icon: 'fas fa-laptop-code',
        description: 'Programming, systems, and software resources for technical growth.',
        books: [
            { id: 11, title: 'Introduction to Python', author: 'Mark Lutz', description: 'Programming basics', isPremium: false },
            { id: 12, title: 'Data Structures', author: 'Cormen et al.', description: 'Advanced algorithms', isPremium: true },
            { id: 13, title: 'Web Development', author: 'Jon Duckett', description: 'HTML5 and CSS3', isPremium: false },
            { id: 14, title: 'Databases', author: 'C.J. Date', description: 'SQL and normalization', isPremium: true },
            { id: 15, title: 'JavaScript Programming', author: 'Kyle Simpson', description: "You Don't Know JS", isPremium: false }
        ]
    },
    statistics: {
        title: 'Statistics',
        icon: 'fas fa-chart-bar',
        description: 'Statistical thinking, inference, and applied data analysis materials.',
        books: [
            { id: 16, title: 'Descriptive Statistics', author: 'David Freedman', description: 'Data and charts', isPremium: false },
            { id: 17, title: 'Statistical Inference', author: 'George Casella', description: 'Hypothesis testing', isPremium: true },
            { id: 18, title: 'Regression Analysis', author: 'W. Greene', description: 'Linear models', isPremium: false },
            { id: 19, title: 'Applied Probability', author: 'Sheldon Ross', description: 'Theory and practice', isPremium: true }
        ]
    },
    finance: {
        title: 'Finance',
        icon: 'fas fa-coins',
        description: 'Financial analysis, investment, and portfolio management resources.',
        books: [
            { id: 20, title: 'Financial Analysis', author: 'Benjamin Graham', description: 'Core principles', isPremium: false },
            { id: 21, title: 'Stock Market Investing', author: 'Peter Lynch', description: 'Winning strategies', isPremium: true },
            { id: 22, title: 'Portfolio Management', author: 'Harry Markowitz', description: 'Modern theory', isPremium: false },
            { id: 23, title: 'Financial Derivatives', author: 'John Hull', description: 'Options and futures', isPremium: true }
        ]
    },
    marketing: {
        title: 'Marketing',
        icon: 'fas fa-bullhorn',
        description: 'Branding, digital outreach, and consumer behavior learning resources.',
        books: [
            { id: 24, title: 'Marketing Strategy', author: 'Philip Kotler', description: 'Fundamentals', isPremium: false },
            { id: 25, title: 'Digital Marketing', author: 'Chaffey & Ellis-Chadwick', description: 'Web and social media', isPremium: true },
            { id: 26, title: 'Consumer Behavior', author: 'Solomon et al.', description: 'Marketing psychology', isPremium: false },
            { id: 27, title: 'Brand Management', author: 'Kevin Keller', description: 'Brand leadership', isPremium: true }
        ]
    },
    management: {
        title: 'Management',
        icon: 'fas fa-project-diagram',
        description: 'Leadership, teams, and organizational development resources.',
        books: [
            { id: 28, title: 'Effective Leadership', author: 'John Maxwell', description: 'Leadership principles', isPremium: false },
            { id: 29, title: 'Project Management', author: 'PMBOK', description: 'PMI methodology', isPremium: true },
            { id: 30, title: 'Organizational Development', author: 'Wendell French', description: 'Change management', isPremium: false },
            { id: 31, title: 'Human Resource Management', author: 'Gary Dessler', description: 'Modern HR practices', isPremium: true }
        ]
    },
    accounting: {
        title: 'Accounting',
        icon: 'fas fa-calculator',
        description: 'Accounting, auditing, and taxation references for business studies.',
        books: [
            { id: 32, title: 'Accounting Principles', author: 'Weygandt et al.', description: 'IFRS standards', isPremium: false },
            { id: 33, title: 'Auditing', author: 'Arens & Loebbecke', description: 'Verification methods', isPremium: true },
            { id: 34, title: 'Cost Accounting', author: 'Dornier & Favier', description: 'Costs and control', isPremium: false },
            { id: 35, title: 'Corporate Taxation', author: 'Goujet', description: 'Taxes and compliance', isPremium: true }
        ]
    }
};

const courseMetadata = {
    mathematics: { enrolledCount: 240, rating: '4.8/5' },
    met: { enrolledCount: 175, rating: '4.7/5' },
    cs: { enrolledCount: 310, rating: '4.9/5' },
    statistics: { enrolledCount: 210, rating: '4.8/5' },
    finance: { enrolledCount: 285, rating: '4.8/5' },
    marketing: { enrolledCount: 230, rating: '4.7/5' },
    management: { enrolledCount: 260, rating: '4.8/5' },
    accounting: { enrolledCount: 220, rating: '4.7/5' }
};

const pastPapersData = [
    { id: 1, title: 'Calculus Midterm 2024', course: 'Mathematics', program: 'BSS', year: '2024', semester: 'Semester 1', type: 'Midterm', isPremium: false },
    { id: 2, title: 'Linear Algebra Final 2023', course: 'Mathematics', program: 'BSS', year: '2023', semester: 'Semester 2', type: 'Final', isPremium: true },
    { id: 3, title: 'Study Methods Exam 2024', course: 'Methods and Techniques', program: 'BSS', year: '2024', semester: 'Semester 1', type: 'Exam', isPremium: true },
    { id: 4, title: 'Python Programming Test 2023', course: 'Computer Science', program: 'BSS', year: '2023', semester: 'Semester 2', type: 'Test', isPremium: true },
    { id: 5, title: 'Statistics Final 2024', course: 'Statistics', program: 'BSS', year: '2024', semester: 'Semester 2', type: 'Final', isPremium: true },
    { id: 6, title: 'Finance Exam 2024', course: 'Finance', program: 'BBA', year: '2024', semester: 'Semester 1', type: 'Exam', isPremium: false },
    { id: 7, title: 'Marketing Case Study 2023', course: 'Marketing', program: 'BBA', year: '2023', semester: 'Semester 2', type: 'Case Study', isPremium: true },
    { id: 8, title: 'Project Management Final 2024', course: 'Management', program: 'BBA', year: '2024', semester: 'Semester 2', type: 'Final', isPremium: true },
    { id: 9, title: 'Accounting Audit Paper 2023', course: 'Accounting', program: 'BBA', year: '2023', semester: 'Semester 1', type: 'Exam', isPremium: true }
];

let currentBookFilter = 'all';

// ============================================
// UTILITIES
// ============================================

function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display = 'none';
}

function goBack() {
    window.history.back();
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = event.target.closest('button').querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function setProgramType(type) {
    localStorage.setItem('currentCourseType', type);
}

function isUserPremium() {
    return localStorage.getItem('userPremium') === 'true';
}

function getAllBooks() {
    return Object.entries(coursesData).flatMap(([courseId, course]) =>
        course.books.map(book => ({
            ...book,
            courseId,
            courseTitle: course.title
        }))
    );
}

function applyScrollReveal(elements, stepDelay = 0.08) {
    const items = Array.from(elements).filter(Boolean);
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    items.forEach((element, index) => {
        element.classList.add('scroll-reveal');
        element.style.setProperty('--reveal-delay', `${index * stepDelay}s`);
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        items.forEach(element => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px'
    });

    items.forEach(element => observer.observe(element));
}

function initScrollReveal() {
    applyScrollReveal(document.querySelectorAll(
        '.welcome-section, .stat-card, .program-card, .featured-section, .featured-card, .course-card, .course-info, .book-item, .no-premium-notice, .premium-banner, .feature-item, .pricing-card, .testimonial, .premium-note, .resource-hero, .resource-tools, .resource-card'
    ));
}

// ============================================
// VALIDATION
// ============================================

function validateEmail(email) {
    return email.includes('@iugb');
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
}

function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) el.textContent = message;
}

// ============================================
// AUTHENTICATION
// ============================================

function initAuthPage() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            let isValid = true;

            if (!email) {
                showError('loginEmailError', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('loginEmailError', 'Use an @iugb email address');
                isValid = false;
            }

            if (!password) {
                showError('loginPasswordError', 'Password is required');
                isValid = false;
            } else if (password.length < 6) {
                showError('loginPasswordError', 'Minimum 6 characters');
                isValid = false;
            }

            if (isValid) {
                const user = { email, isPremium: false };
                localStorage.setItem('iugbUser', JSON.stringify(user));
                showLoading();
                setTimeout(() => {
                    hideLoading();
                    window.location.href = 'home.html';
                }, 1000);
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();

            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirm').value;
            let isValid = true;

            if (!name) {
                showError('signupNameError', 'Name is required');
                isValid = false;
            }

            if (!email) {
                showError('signupEmailError', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('signupEmailError', 'Use an @iugb email address');
                isValid = false;
            }

            if (!password) {
                showError('signupPasswordError', 'Password is required');
                isValid = false;
            } else if (password.length < 6) {
                showError('signupPasswordError', 'Minimum 6 characters');
                isValid = false;
            }

            if (password !== confirmPassword) {
                showError('signupConfirmError', 'Passwords do not match');
                isValid = false;
            }

            if (isValid) {
                const user = { name, email, isPremium: false };
                localStorage.setItem('iugbUser', JSON.stringify(user));
                showLoading();
                setTimeout(() => {
                    hideLoading();
                    window.location.href = 'home.html';
                }, 1000);
            }
        });
    }
}

function switchForm(event) {
    event.preventDefault();
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm) loginForm.classList.toggle('active');
    if (signupForm) signupForm.classList.toggle('active');
}

// ============================================
// HOME PAGE
// ============================================

function initHomePage() {
    const userData = localStorage.getItem('iugbUser');
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }

    const user = JSON.parse(userData);
    const userNameEl = document.getElementById('userName');
    if (userNameEl) {
        userNameEl.textContent = user.name || user.email.split('@')[0];
    }

    const booksCountEl = document.getElementById('booksCount');
    if (booksCountEl) {
        booksCountEl.textContent = '1000+';
    }
}

function logout() {
    if (confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('iugbUser');
        localStorage.removeItem('userPremium');
        window.location.href = 'index.html';
    }
}

// ============================================
// COURSE PAGES
// ============================================

function goToCourseDetail(courseId, courseName) {
    localStorage.setItem('currentCourse', courseId);
    localStorage.setItem('currentCourseName', courseName);
    window.location.href = 'course-detail.html';
}

function renderBooksList(books) {
    const booksList = document.getElementById('booksList');
    if (!booksList) return;

    booksList.innerHTML = '';

    if (!books.length) {
        booksList.innerHTML = `
            <div class="empty-books-state">
                <i class="fas fa-search"></i>
                <h4>No books found</h4>
                <p>Try another keyword or change the selected filter.</p>
            </div>
        `;
        return;
    }

    books.forEach(book => {
        booksList.appendChild(createBookElement(book));
    });

    applyScrollReveal(booksList.querySelectorAll('.book-item'));
}

function getFilteredBooks(courseId) {
    const courseInfo = coursesData[courseId];
    if (!courseInfo) return [];

    const searchInput = document.getElementById('bookSearch');
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    return courseInfo.books.filter(book => {
        const matchesFilter =
            currentBookFilter === 'all' ||
            (currentBookFilter === 'free' && !book.isPremium) ||
            (currentBookFilter === 'premium' && book.isPremium);

        const searchableText = `${book.title} ${book.author} ${book.description}`.toLowerCase();
        const matchesSearch = !searchTerm || searchableText.includes(searchTerm);

        return matchesFilter && matchesSearch;
    });
}

function updateCourseBooks() {
    const courseId = localStorage.getItem('currentCourse');
    const filteredBooks = getFilteredBooks(courseId);
    renderBooksList(filteredBooks);
}

function initCourseDetailPage() {
    const courseId = localStorage.getItem('currentCourse');
    const courseName = localStorage.getItem('currentCourseName');
    const courseInfo = coursesData[courseId];

    if (!courseInfo) {
        window.location.href = 'home.html';
        return;
    }

    const titleEl = document.getElementById('courseTitle');
    const fullTitleEl = document.getElementById('courseFullTitle');
    const descriptionEl = document.getElementById('courseDescription');
    const iconEl = document.getElementById('courseIcon');
    const enrolledCountEl = document.getElementById('enrolledCount');
    const ratingEl = document.getElementById('courseRating');
    const bookCountEl = document.getElementById('bookCount');

    if (titleEl) titleEl.textContent = courseName || courseInfo.title;
    if (fullTitleEl) fullTitleEl.textContent = courseName || courseInfo.title;
    if (descriptionEl) descriptionEl.textContent = courseInfo.description;
    if (iconEl) iconEl.innerHTML = `<i class="${courseInfo.icon}"></i>`;
    if (enrolledCountEl) enrolledCountEl.textContent = courseMetadata[courseId]?.enrolledCount || 250;
    if (ratingEl) ratingEl.textContent = courseMetadata[courseId]?.rating || '4.8/5';
    if (bookCountEl) bookCountEl.textContent = courseInfo.books.length;

    const noticeEl = document.getElementById('noPremiumNotice');
    const hasPremiumBooks = courseInfo.books.some(book => book.isPremium);
    if (noticeEl && hasPremiumBooks && !isUserPremium()) {
        noticeEl.style.display = 'block';
    }

    const searchInput = document.getElementById('bookSearch');
    if (searchInput) {
        searchInput.addEventListener('input', updateCourseBooks);
    }

    currentBookFilter = 'all';
    updateCourseBooks();
}

function createBookElement(book) {
    const div = document.createElement('div');
    div.className = 'book-item';

    const isLocked = book.isPremium && !isUserPremium();

    div.innerHTML = `
        <div class="book-cover" style="background: linear-gradient(135deg, #6366f1, #ec4899); position: relative;">
            <i class="fas fa-book" style="font-size: 2rem; color: white;"></i>
            ${isLocked ? '<div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 8px; font-size: 0.8rem;"><i class="fas fa-lock"></i> Premium</div>' : ''}
        </div>
        <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-description">${book.description}</div>
            <div class="book-action">
                <button class="btn-read" onclick="readBook(${book.id})" ${isLocked ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                    <i class="fas fa-book-open"></i> Read
                </button>
                <button class="btn-download" onclick="downloadBook(${book.id})" ${isLocked ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        </div>
    `;

    return div;
}

function createSearchResultElement(book) {
    const div = document.createElement('div');
    div.className = 'book-item';

    const isLocked = book.isPremium && !isUserPremium();

    div.innerHTML = `
        <div class="book-cover" style="background: linear-gradient(135deg, #0f766e, #0ea5e9); position: relative;">
            <i class="fas fa-book" style="font-size: 2rem; color: white;"></i>
            ${isLocked ? '<div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 8px; font-size: 0.8rem;"><i class="fas fa-lock"></i> Premium</div>' : ''}
        </div>
        <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-description">${book.description}</div>
            <div class="book-meta">${book.courseTitle}</div>
            <div class="book-action">
                <button class="btn-read" onclick="openSearchBook('${book.courseId}', ${book.id})" ${isLocked ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                    <i class="fas fa-book-open"></i> Read
                </button>
                <button class="btn-download" onclick="downloadSearchBook('${book.courseId}', ${book.id})" ${isLocked ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        </div>
    `;

    return div;
}

function filterBooks(type, clickedButton = null) {
    currentBookFilter = type;

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetButton = clickedButton || event?.target;
    if (targetButton) targetButton.classList.add('active');

    updateCourseBooks();
}

function readBook(bookId) {
    const courseId = localStorage.getItem('currentCourse');
    const book = coursesData[courseId]?.books.find(b => b.id === bookId);

    if (!book) return;

    if (book.isPremium && !isUserPremium()) {
        alert('This book is available to premium members only. Please upgrade to access it.');
        return;
    }

    showLoading();
    setTimeout(() => {
        hideLoading();
        alert(`Opening book: "${book.title}"\nAuthor: ${book.author}\n\nThis action would normally open the PDF version of the book.`);
    }, 800);
}

function downloadBook(bookId) {
    const courseId = localStorage.getItem('currentCourse');
    const book = coursesData[courseId]?.books.find(b => b.id === bookId);

    if (!book) return;

    if (book.isPremium && !isUserPremium()) {
        alert('Downloading is reserved for premium members.');
        return;
    }

    showLoading();
    setTimeout(() => {
        hideLoading();
        alert(`Downloading "${book.title}"...\n\nThe file would be saved to your device.`);
    }, 1200);
}

function openSearchBook(courseId, bookId) {
    localStorage.setItem('currentCourse', courseId);
    localStorage.setItem('currentCourseName', coursesData[courseId]?.title || 'Course');
    readBook(bookId);
}

function downloadSearchBook(courseId, bookId) {
    localStorage.setItem('currentCourse', courseId);
    localStorage.setItem('currentCourseName', coursesData[courseId]?.title || 'Course');
    downloadBook(bookId);
}

function initSearchPage() {
    const searchInput = document.getElementById('globalBookSearch');
    const resultsEl = document.getElementById('searchResults');
    const resultCountEl = document.getElementById('searchResultCount');
    const books = getAllBooks();

    if (!searchInput || !resultsEl) return;

    const render = () => {
        const query = searchInput.value.trim().toLowerCase();
        const results = books.filter(book => {
            const haystack = `${book.title} ${book.author} ${book.description} ${book.courseTitle}`.toLowerCase();
            return !query || haystack.includes(query);
        });

        if (resultCountEl) {
            resultCountEl.textContent = `${results.length} result${results.length === 1 ? '' : 's'}`;
        }

        resultsEl.innerHTML = '';

        if (!results.length) {
            resultsEl.innerHTML = `
                <div class="empty-books-state">
                    <i class="fas fa-search"></i>
                    <h4>No matching books</h4>
                    <p>Try another title, author, course, or keyword.</p>
                </div>
            `;
            return;
        }

        results.forEach(book => {
            resultsEl.appendChild(createSearchResultElement(book));
        });

        applyScrollReveal(resultsEl.querySelectorAll('.book-item'));
    };

    searchInput.addEventListener('input', render);
    render();
}

function initPastPapersPage() {
    const searchInput = document.getElementById('pastPaperSearch');
    const programFilter = document.getElementById('pastPaperProgram');
    const listEl = document.getElementById('pastPapersList');
    const countEl = document.getElementById('pastPaperCount');

    if (!searchInput || !programFilter || !listEl) return;

    const render = () => {
        const query = searchInput.value.trim().toLowerCase();
        const selectedProgram = programFilter.value;

        const results = pastPapersData.filter(paper => {
            const matchesProgram = selectedProgram === 'all' || paper.program === selectedProgram;
            const haystack = `${paper.title} ${paper.course} ${paper.year} ${paper.type} ${paper.semester}`.toLowerCase();
            const matchesQuery = !query || haystack.includes(query);
            return matchesProgram && matchesQuery;
        });

        if (countEl) {
            const premiumCount = results.filter(paper => paper.isPremium).length;
            countEl.textContent = `1000+ papers available • ${premiumCount} premium in this view`;
        }

        listEl.innerHTML = '';

        if (!results.length) {
            listEl.innerHTML = `
                <div class="empty-books-state">
                    <i class="fas fa-file-alt"></i>
                    <h4>No past papers found</h4>
                    <p>Try another keyword or switch the selected program.</p>
                </div>
            `;
            return;
        }

        results.forEach(paper => {
            const isLocked = paper.isPremium && !isUserPremium();
            const card = document.createElement('div');
            card.className = `resource-card${isLocked ? ' is-locked' : ''}`;
            card.innerHTML = `
                <div class="resource-card-head">
                    <span class="resource-badge">${paper.program}</span>
                    <span class="resource-badge muted">${paper.year}</span>
                    ${paper.isPremium ? '<span class="resource-badge premium"><i class="fas fa-lock"></i> Premium</span>' : '<span class="resource-badge free"><i class="fas fa-unlock"></i> Free</span>'}
                </div>
                <h3>${paper.title}</h3>
                <p>${paper.course} • ${paper.semester} • ${paper.type}</p>
                <button class="btn-primary" onclick="openPastPaper(${paper.id})" ${isLocked ? 'disabled' : ''}>
                    <i class="fas fa-folder-open"></i> Open Paper
                </button>
            `;
            listEl.appendChild(card);
        });

        applyScrollReveal(listEl.querySelectorAll('.resource-card'));
    };

    searchInput.addEventListener('input', render);
    programFilter.addEventListener('change', render);
    render();
}

function openPastPaper(paperId) {
    const paper = pastPapersData.find(item => item.id === paperId);
    if (!paper) return;

    if (paper.isPremium && !isUserPremium()) {
        alert('This past paper is available to premium members only. Please upgrade to access it.');
        return;
    }

    showLoading();
    setTimeout(() => {
        hideLoading();
        alert(`Opening past paper: "${paper.title}"\nCourse: ${paper.course}\nProgram: ${paper.program}\n\nThis action would normally open the selected past paper file.`);
    }, 700);
}

// ============================================
// PREMIUM PAGE
// ============================================

function subscribe() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        localStorage.setItem('userPremium', 'true');
        alert('Thank you. You are now a premium member.\n\nAll premium content is now unlocked.');
        goBack();
    }, 1500);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.auth-page')) {
        initAuthPage();
    }

    if (document.querySelector('.signup-page')) {
        initAuthPage();
    }

    if (document.querySelector('.home-page')) {
        initHomePage();
    }

    if (document.querySelector('.course-detail-page')) {
        initCourseDetailPage();
    }

    if (document.querySelector('.search-page')) {
        initSearchPage();
    }

    if (document.querySelector('.past-papers-page')) {
        initPastPapersPage();
    }

    setTimeout(() => {
        initScrollReveal();
    }, 100);

    console.log('Scholar Hub - Application initialized successfully');
});
