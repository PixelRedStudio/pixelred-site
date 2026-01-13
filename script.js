document.addEventListener('DOMContentLoaded', () => {
    
    /* --- SCROLL REVEAL ANIMATION --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionnel: arrêter d'observer une fois révélé
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Déclenche quand 15% de l'élément est visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* --- SMOOTH SCROLL NAV --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Si c'est le bouton vidéo, on ne scroll pas (géré par le modal)
            if (this.id === 'btn-watch-trailer') return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70px pour la navbar fixe
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- VIDEO MODAL LOGIC --- */
    const modal = document.getElementById('video-modal');
    const btnWatch = document.getElementById('btn-watch-trailer');
    const spanClose = document.getElementsByClassName('close-modal')[0];
    const videoPlayer = document.getElementById('gameplay-player');

    if (btnWatch && modal && videoPlayer) {
        btnWatch.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "block";
            videoPlayer.play();
        });

        // Fonction de fermeture
        const closeModal = () => {
            modal.style.display = "none";
            videoPlayer.pause();
            videoPlayer.currentTime = 0; // Reset video
        };

        spanClose.addEventListener('click', closeModal);

        // Fermer si on clique en dehors de la vidéo
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModal();
            }
        });
    }

    console.log("PixelRed Studio site loaded. Video assets integrated.");
});