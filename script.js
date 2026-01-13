document.addEventListener('DOMContentLoaded', () => {
    
    /* --- SCROLL REVEAL ANIMATION --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* --- SMOOTH SCROLL NAV --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // On ignore les clics qui servent à ouvrir des popups
            if (this.id === 'btn-watch-trailer' || this.classList.contains('js-open-beta')) return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- VIDEO MODAL LOGIC (FIXED) --- */
    const videoModal = document.getElementById('video-modal');
    const btnWatch = document.getElementById('btn-watch-trailer');
    const closeVideo = document.querySelector('#video-modal .close-modal');
    const videoPlayer = document.getElementById('gameplay-player');

    if (btnWatch && videoModal && videoPlayer) {
        btnWatch.addEventListener('click', (e) => {
            e.preventDefault();
            // Utiliser flex pour le centrage CSS défini dans le style
            videoModal.style.display = "flex";
            videoPlayer.play();
        });

        const closeVideoModal = () => {
            videoModal.style.display = "none";
            videoPlayer.pause();
            videoPlayer.currentTime = 0; 
        };

        if (closeVideo) closeVideo.addEventListener('click', closeVideoModal);

        window.addEventListener('click', (e) => {
            if (e.target == videoModal) {
                closeVideoModal();
            }
        });
    }

    /* --- BETA ACCESS MODAL LOGIC --- */
    const betaModal = document.getElementById('beta-modal');
    const betaBtns = document.querySelectorAll('.js-open-beta');
    const closeBeta = document.querySelector('.close-beta');

    if (betaModal && betaBtns.length > 0) {
        // Ouvrir la modale au clic
        betaBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                betaModal.style.display = "flex"; 
            });
        });

        // Fermer la modale
        const closeBetaModal = () => {
            betaModal.style.display = "none";
        };

        if (closeBeta) closeBeta.addEventListener('click', closeBetaModal);

        // Fermer si clic en dehors
        window.addEventListener('click', (e) => {
            if (e.target == betaModal) {
                closeBetaModal();
            }
        });
    }

    console.log("PixelRed Studio site loaded. System OK.");
});