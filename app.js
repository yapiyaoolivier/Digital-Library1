// ============================================
// IUGB LIBRARY - APPLICATION JavaScript
// ============================================

// ============================================
// DONNÉES DES COURS
// ============================================

const coursesData = {
    mathematics: {
        title: 'Mathématiques',
        icon: 'fas fa-calculator',
        books: [
            { id: 1, title: 'Algèbre Linéaire', author: 'David C. Lay', description: 'Concepts fondamentaux', isPremium: false },
            { id: 2, title: 'Calcul Intégral', author: 'James Stewart', description: 'Méthodes avancées', isPremium: true },
            { id: 3, title: 'Géométrie Analytique', author: 'L. Loomis', description: 'Théorie et applications', isPremium: false },
            { id: 4, title: 'Statistiques Mathématiques', author: 'Sheldon Ross', description: 'Probabilités', isPremium: true },
            { id: 5, title: 'Équations Différentielles', author: 'Dennis Zill', description: 'Solutions détaillées', isPremium: false },
            { id: 6, title: 'Analyse Complexe', author: 'Lars Ahlfors', description: 'Fonctions analytiques', isPremium: true }
        ]
    },
    met: {
        title: "MET - Méthodes d'Études et Techniques",
        icon: 'fas fa-book-reader',
        books: [
            { id: 7, title: 'Techniques de Prise de Notes', author: 'Tony Buzan', description: 'Mind mapping efficace', isPremium: false },
            { id: 8, title: 'Gestion du Temps', author: 'David Allen', description: 'Getting Things Done', isPremium: false },
            { id: 9, title: 'Mémoire et Apprentissage', author: 'Hermann Ebbinghaus', description: 'Sciences du cerveau', isPremium: true },
            { id: 10, title: 'Techniques de Présentation', author: 'Nancy Duarte', description: 'Slideologie', isPremium: false }
        ]
    },
    cs: {
        title: 'Informatique - Computer Science',
        icon: 'fas fa-laptop-code',
        books: [
            { id: 11, title: 'Introduction à Python', author: 'Mark Lutz', description: 'Programmation de base', isPremium: false },
            { id: 12, title: 'Structures de Données', author: 'Cormen et al.', description: 'Algorithmes avancés', isPremium: true },
            { id: 13, title: 'Développement Web', author: 'Jon Duckett', description: 'HTML5 & CSS3', isPremium: false },
            { id: 14, title: 'Base de Données', author: 'C.J. Date', description: 'SQL et normalization', isPremium: true },
            { id: 15, title: 'Programmation JavaScript', author: 'Kyle Simpson', description: "You Don't Know JS", isPremium: false }
        ]
    },
    statistics: {
        title: 'Statistiques',
        icon: 'fas fa-chart-bar',
        books: [
            { id: 16, title: 'Statistiques Descriptives', author: 'David Freedman', description: 'Données et graphiques', isPremium: false },
            { id: 17, title: 'Inférence Statistique', author: 'George Casella', description: "Tests d'hypothèse", isPremium: true },
            { id: 18, title: 'Analyse de Régression', author: 'W. Greene', description: 'Modèles linéaires', isPremium: false },
            { id: 19, title: 'Probabilités Appliquées', author: 'Sheldon Ross', description: 'Théorie et pratique', isPremium: true }
        ]
    },
    finance: {
        title: 'Finance',
        icon: 'fas fa-coins',
        books: [
            { id: 20, title: 'Analyse Financière', author: 'Benjamin Graham', description: 'Principes fondamentaux', isPremium: false },
            { id: 21, title: 'Investissement en Bourse', author: 'Peter Lynch', description: 'Stratégies gagnantes', isPremium: true },
            { id: 22, title: 'Gestion de Portefeuille', author: 'Harry Markowitz', description: 'Théorie moderne', isPremium: false },
            { id: 23, title: 'Dérivés Financiers', author: 'John Hull', description: 'Options et futures', isPremium: true }
        ]
    },
    marketing: {
        title: 'Marketing',
        icon: 'fas fa-bullhorn',
        books: [
            { id: 24, title: 'Stratégie Marketing', author: 'Philip Kotler', description: 'Fondamentaux', isPremium: false },
            { id: 25, title: 'Marketing Digital', author: 'Chaffey & Ellis-Chadwick', description: 'Web et réseaux sociaux', isPremium: true },
            { id: 26, title: 'Comportement du Consommateur', author: 'Solomon et al.', description: 'Psychologie marketing', isPremium: false },
            { id: 27, title: 'Brand Management', author: 'Kevin Keller', description: 'Gestion de marque', isPremium: true }
        ]
    },
    management: {
        title: 'Management',
        icon: 'fas fa-project-diagram',
        books: [
            { id: 28, title: 'Leadership Efficace', author: 'John Maxwell', description: 'Principes de direction', isPremium: false },
            { id: 29, title: 'Gestion de Projet', author: 'PMBOK', description: 'Méthodologie PMI', isPremium: true },
            { id: 30, title: 'Développement Organisationnel', author: 'Wendell French', description: 'Changement', isPremium: false },
            { id: 31, title: 'Gestion des Ressources Humaines', author: 'Gary Dessler', description: 'GRH moderne', isPremium: true }
        ]
    },
    accounting: {
        title: 'Comptabilité',
        icon: 'fas fa-calculator',
        books: [
            { id: 32, title: 'Principes Comptables', author: 'Weygandt et al.', description: 'IFRS standards', isPremium: false },
            { id: 33, title: 'Audit Comptable', author: 'Arens & Loebbecke', description: 'Vérification', isPremium: true },
            { id: 34, title: 'Comptabilité Analytique', author: 'Dornier & Favier', description: 'Coûts et contrôle', isPremium: false },
            { id: 35, title: 'Fiscalité Entreprise', author: 'Goujet', description: 'Impôts et taxes', isPremium: true }
        ]
    }
};

// ============================================
// UTILITAIRES
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

// ============================================
// VALIDATION
// ============================================

function validateEmail(email) {
    return email.includes('@iugb');
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) el.textContent = message;
}

// ============================================
// AUTHENTIFICATION
// ============================================

function initAuthPage() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // --- Formulaire de connexion (index.html) ---
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            let isValid = true;

            if (!email) {
                showError('loginEmailError', 'Email requis');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('loginEmailError', 'Utilisez un email @iugb');
                isValid = false;
            }

            if (!password) {
                showError('loginPasswordError', 'Mot de passe requis');
                isValid = false;
            } else if (password.length < 6) {
                showError('loginPasswordError', 'Minimum 6 caractères');
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

    // --- Formulaire d'inscription (index.html et signup.html) ---
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();

            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirm = document.getElementById('signupConfirm').value;
            let isValid = true;

            if (!name) {
                showError('signupNameError', 'Nom requis');
                isValid = false;
            }

            if (!email) {
                showError('signupEmailError', 'Email requis');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('signupEmailError', 'Utilisez un email @iugb');
                isValid = false;
            }

            if (!password) {
                showError('signupPasswordError', 'Mot de passe requis');
                isValid = false;
            } else if (password.length < 6) {
                showError('signupPasswordError', 'Minimum 6 caractères');
                isValid = false;
            }

            if (password !== confirm) {
                showError('signupConfirmError', 'Les mots de passe ne correspondent pas');
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

// Basculer entre login et signup sur index.html
function switchForm(event) {
    event.preventDefault();
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm) loginForm.classList.toggle('active');
    if (signupForm) signupForm.classList.toggle('active');
}

// ============================================
// PAGE HOME
// ============================================

function initHomePage() {
    // Rediriger vers login si pas connecté
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
}

function logout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        localStorage.removeItem('iugbUser');
        localStorage.removeItem('userPremium');
        window.location.href = 'index.html';
    }
}

// ============================================
// PAGE COURS (BBA / BSS)
// ============================================

function goToCourseDetail(courseId, courseName) {
    localStorage.setItem('currentCourse', courseId);
    localStorage.setItem('currentCourseName', courseName);
    window.location.href = 'course-detail.html';
}

// ============================================
// PAGE DÉTAIL DU COURS
// ============================================

function initCourseDetailPage() {
    const courseId = localStorage.getItem('currentCourse');
    const courseName = localStorage.getItem('currentCourseName');

    const titleEl = document.getElementById('courseTitle');
    const fullTitleEl = document.getElementById('courseFullTitle');
    if (titleEl) titleEl.textContent = courseName;
    if (fullTitleEl) fullTitleEl.textContent = courseName;

    const courseInfo = coursesData[courseId];
    const books = courseInfo ? courseInfo.books : [];

    const booksList = document.getElementById('booksList');
    if (booksList) {
        booksList.innerHTML = '';
        books.forEach(book => {
            booksList.appendChild(createBookElement(book));
        });
    }

    const bookCountEl = document.getElementById('bookCount');
    if (bookCountEl) bookCountEl.textContent = books.length;

    const isPremium = localStorage.getItem('userPremium') === 'true';
    const hasPremiumBooks = books.some(book => book.isPremium);
    const noticeEl = document.getElementById('noPremiumNotice');
    if (noticeEl && hasPremiumBooks && !isPremium) {
        noticeEl.style.display = 'block';
    }
}

function createBookElement(book) {
    const div = document.createElement('div');
    div.className = 'book-item';

    const isPremium = localStorage.getItem('userPremium') === 'true';
    const isLocked = book.isPremium && !isPremium;

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
                    <i class="fas fa-book-open"></i> Lire
                </button>
                <button class="btn-download" onclick="downloadBook(${book.id})" ${isLocked ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                    <i class="fas fa-download"></i> Télécharger
                </button>
            </div>
        </div>
    `;

    return div;
}

function filterBooks(type) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const courseId = localStorage.getItem('currentCourse');
    const courseInfo = coursesData[courseId];
    if (!courseInfo) return;

    let books = courseInfo.books;
    if (type === 'free') books = books.filter(b => !b.isPremium);
    if (type === 'premium') books = books.filter(b => b.isPremium);

    const booksList = document.getElementById('booksList');
    if (booksList) {
        booksList.innerHTML = '';
        books.forEach(book => booksList.appendChild(createBookElement(book)));
    }
}

function readBook(bookId) {
    const isPremium = localStorage.getItem('userPremium') === 'true';
    const courseId = localStorage.getItem('currentCourse');
    const book = coursesData[courseId]?.books.find(b => b.id === bookId);

    if (!book) return;

    if (book.isPremium && !isPremium) {
        alert('Ce livre est exclusif aux membres premium. Veuillez souscrire pour y accéder.');
        return;
    }

    showLoading();
    setTimeout(() => {
        hideLoading();
        alert(`Ouverture du livre : "${book.title}"\nAuteur : ${book.author}\n\nCette fonctionnalité ouvrirait normalement le livre en PDF.`);
    }, 800);
}

function downloadBook(bookId) {
    const isPremium = localStorage.getItem('userPremium') === 'true';
    const courseId = localStorage.getItem('currentCourse');
    const book = coursesData[courseId]?.books.find(b => b.id === bookId);

    if (!book) return;

    if (book.isPremium && !isPremium) {
        alert('Le téléchargement est réservé aux membres premium.');
        return;
    }

    showLoading();
    setTimeout(() => {
        hideLoading();
        alert(`Téléchargement de "${book.title}" en cours...\n\nLe fichier aurait été sauvegardé sur votre appareil.`);
    }, 1200);
}

// ============================================
// PAGE PREMIUM
// ============================================

function subscribe() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        localStorage.setItem('userPremium', 'true');
        alert('Merci ! Vous êtes maintenant membre premium.\n\nTous les contenus premium sont désormais accessibles !');
        goBack();
    }, 1500);
}

// ============================================
// INITIALISATION - ROUTEUR DE PAGES
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Page de connexion (index.html)
    if (document.querySelector('.auth-page')) {
        initAuthPage();
    }

    // Page d'inscription séparée (signup.html)
    if (document.querySelector('.signup-page')) {
        initAuthPage();
    }

    // Page d'accueil (home.html)
    if (document.querySelector('.home-page')) {
        initHomePage();
    }

    // Pages de cours BBA / BSS (bba-courses.html, bss-courses.html)
    if (document.querySelector('.courses-page')) {
        // Les cours sont déjà affichés en HTML, rien à charger dynamiquement
    }

    // Page de détail d'un cours (course-detail.html)
    if (document.querySelector('.course-detail-page')) {
        initCourseDetailPage();
    }

    // Animations communes sur les cartes
    setTimeout(() => {
        document.querySelectorAll('.program-card, .course-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.style.animation = 'fadeIn 0.5s ease forwards';
        });
    }, 100);

    console.log('IUGB Library - Application initialisée avec succès');
});