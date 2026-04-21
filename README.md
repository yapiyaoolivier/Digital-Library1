# IUGB Library - Application Mobile pour Étudiants

Une application web mobile-first moderne conçue pour les étudiants de l'Université Internationale de Grand-Bassam (IUGB). L'application offre un accès aux ressources éducatives avec un système d'authentification sécurisé et un modèle d'abonnement premium.

## 🎯 Fonctionnalités

### 🔐 Authentification
- Connexion et inscription avec validation d'email IUGB (`@iugb.edu.ci`)
- Validation de mot de passe (minimum 8 caractères)
- Persistance de session avec localStorage

### 📚 Navigation par Programme
- **BSS (Bachelor of Science)** : Mathématiques, MET, Informatique, Statistiques
- **BBA (Bachelor of Business Administration)** : Finance, Marketing, Management, Comptabilité

### 📖 Bibliothèque de Livres
- Livres organisés par cours
- Indicateurs visuels pour les ressources premium
- Fonctionnalités de lecture et téléchargement
- Accès restreint pour les livres premium

### 💎 Abonnement Premium
- Prix : 1000 FCFA par mois
- Accès à tous les livres premium
- Interface de souscription intuitive
- Annulation à tout moment

## 🎨 Design

### Principes de Design
- **Mobile-first** : Interface optimisée pour les appareils mobiles
- **Palette de couleurs IUGB** : Bleu (#0056b3) et jaune (#ffc107)
- **Typographie distinctive** : Montserrat pour les titres, Poppins pour le corps
- **Animations fluides** : Transitions et micro-interactions
- **Signature Deerflow** : Élément subtil et cliquable en bas à droite

### Éléments Visuels
- Cartes interactives avec effets de survol
- Indicateurs visuels pour l'état premium
- Icônes Font Awesome pour une meilleure lisibilité
- Images d'illustration pertinentes

## 🛠️ Structure Technique

### Fichiers Principaux
```
├── index.html          # Structure HTML complète
├── style.css           # Styles CSS modernes
├── app.js              # Logique JavaScript
└── README.md           # Documentation
```

### Architecture JavaScript
- **appData** : Gestion des données de l'application
- **utils** : Fonctions utilitaires (validation, navigation)
- **auth** : Gestion de l'authentification
- **booksManager** : Gestion des livres et cours
- **premiumManager** : Gestion des abonnements
- **eventManager** : Gestion des événements

## 🚀 Installation et Utilisation

### Exécution Locale
1. Téléchargez les fichiers dans un dossier
2. Ouvrez `index.html` dans un navigateur web moderne
3. L'application fonctionne entièrement côté client

### Authentification de Test
- Email : `etudiant@iugb.edu.ci` (format requis)
- Mot de passe : 8 caractères minimum

## 📱 Compatibilité

- **Navigateurs** : Chrome, Firefox, Safari, Edge (versions récentes)
- **Appareils** : Mobile, Tablet, Desktop
- **Connectivité** : Fonctionne hors ligne après chargement initial

## 🔒 Sécurité

- Validation côté client des emails IUGB
- Stockage sécurisé des sessions dans localStorage
- Protection contre l'accès non autorisé aux ressources premium

## 🎯 Points Forts

1. **Expérience Utilisateur** : Interface intuitive et responsive
2. **Performance** : Chargement rapide, animations optimisées
3. **Accessibilité** : Contraste élevé, navigation au clavier
4. **Maintenabilité** : Code structuré et commenté
5. **Extensibilité** : Architecture modulaire facile à étendre

## 📄 Licence

Cette application est un projet éducatif développé pour l'Université Internationale de Grand-Bassam.

---

**Développé avec ❤️ par Deerflow** - [deerflow.tech](https://deerflow.tech)