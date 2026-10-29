document.addEventListener('DOMContentLoaded', () => {

    // 1. SLIDER AUTOMATIQUE EN 5 SECONDES
    const track = document.querySelector('.slider-track');
    let currentIndex = 0;
    const totalSlides = 3;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
    }, 5000);

    // 2. ANIMATION DES SECTIONS AU DEFILEMENT (SCROLL)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Lancement initial
});