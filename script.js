document.addEventListener('DOMContentLoaded', () => {

    // 1. DÉFILEMENT AUTOMATIQUE DU SLIDER TOUTES LES 5 SECONDES
    const track = document.querySelector('.slider-track');
    let currentIndex = 0;
    const totalSlides = 3;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
    }, 5000); // 5000 millisecondes = 5 secondes

    // 2. CONTENU DE CHAQUE PAGE AVEC LES DEUX BOUTONS
    const pagesContent = {
        home: `
            <p class="subtitle">BEST SECURITY SERVICES</p>
            <h1 class="main-title">Safe & Secure Home<br>For Your Family</h1>
            <div class="btn-group">
                <a href="#" class="btn btn-primary">Get quote</a>
                <a href="#" class="btn btn-secondary">Contact us</a>
            </div>
        `,
        about: `
            <p class="subtitle">WHO WE ARE</p>
            <h1 class="main-title">About Us</h1>
            <div class="btn-group">
                <a href="#" class="btn btn-primary">Get quote</a>
                <a href="#" class="btn btn-secondary">Contact us</a>
            </div>
        `,
        services: `
            <p class="subtitle">WHAT WE DO</p>
            <h1 class="main-title">Our Services</h1>
            <div class="btn-group">
                <a href="#" class="btn btn-primary">Get quote</a>
                <a href="#" class="btn btn-secondary">Contact us</a>
            </div>
        `,
        pages: `
            <p class="subtitle">DISCOVER MORE</p>
            <h1 class="main-title">Our Pages</h1>
            <div class="btn-group">
                <a href="#" class="btn btn-primary">Get quote</a>
                <a href="#" class="btn btn-secondary">Contact us</a>
            </div>
        `,
        contact: `
            <p class="subtitle">GET IN TOUCH</p>
            <h1 class="main-title">Contact Us</h1>
            <div class="btn-group">
                <a href="#" class="btn btn-primary">Get quote</a>
                <a href="#" class="btn btn-secondary">Contact us</a>
            </div>
        `
    };

    // 3. GESTION DES CLICS SUR LES MENUS
    const navItems = document.querySelectorAll('.nav-item');
    const heroContent = document.getElementById('hero-content');

    // Afficher Home par défaut au chargement
    heroContent.innerHTML = pagesContent.home;

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Retirer la classe active de tous les liens
            navItems.forEach(link => link.classList.remove('active'));

            // Ajouter la classe active uniquement au lien cliqué (ce qui déclenche la barre bleue)
            item.classList.add('active');

            // Changer le contenu du Hero selon le menu cliqué
            const targetPage = item.getAttribute('data-page');
            if (pagesContent[targetPage]) {
                heroContent.innerHTML = pagesContent[targetPage];
            }
        });
    });
});