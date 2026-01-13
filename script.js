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
        threshold: 0.15, // Déclenche quand 15% de l'élément est visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* --- SMOOTH SCROLL NAV --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Ignorer les boutons modaux (Videos et Beta)
            if (this.id === 'btn-watch-trailer' || this.classList.contains('js-open-beta')) return;

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
    const videoModal = document.getElementById('video-modal');
    const btnWatch = document.getElementById('btn-watch-trailer');
    const closeVideo = document.querySelector('.close-modal'); // Attention à bien cibler celui de la vidéo si besoin
    const videoPlayer = document.getElementById('gameplay-player');

    if (btnWatch && videoModal && videoPlayer) {
        btnWatch.addEventListener('click', (e) => {
            e.preventDefault();
            videoModal.style.display = "flex"; // Utilisé flex pour le centrage CSS
            videoPlayer.play();
        });

        // Fonction de fermeture vidéo
        const closeVideoModal = () => {
            videoModal.style.display = "none";
            videoPlayer.pause();
            videoPlayer.currentTime = 0; // Reset video
        };

        if (closeVideo) closeVideo.addEventListener('click', closeVideoModal);

        // Fermer si on clique en dehors
        window.addEventListener('click', (e) => {
            if (e.target == videoModal) {
                closeVideoModal();
            }
        });
    }

    /* --- BETA FORM MODAL LOGIC (NOUVEAU) --- */
    const betaModal = document.getElementById('beta-modal');
    const betaBtns = document.querySelectorAll('.js-open-beta');
    const closeBeta = document.querySelector('.close-beta');
    const betaForm = document.getElementById('beta-form');
    const successMsg = document.getElementById('form-success');

    if (betaModal && betaBtns.length > 0) {
        // Ouvrir la modale au clic sur n'importe quel bouton beta
        betaBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                betaModal.style.display = "flex"; 
            });
        });

        // Fermer la modale Beta
        const closeBetaModal = () => {
            betaModal.style.display = "none";
            // Reset de l'état du formulaire si on ferme et réouvre
            if(successMsg.style.display === 'block') {
                successMsg.style.display = 'none';
                if(betaForm) {
                    betaForm.style.display = 'block';
                    betaForm.reset();
                }
            }
        };

        if (closeBeta) closeBeta.addEventListener('click', closeBetaModal);

        // Fermer si clic en dehors
        window.addEventListener('click', (e) => {
            if (e.target == betaModal) {
                closeBetaModal();
            }
        });

        // Simulation d'envoi de formulaire
        if (betaForm) {
            betaForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Simulation d'envoi
                const btn = betaForm.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = "ENVOI EN COURS...";
                btn.disabled = true;
                
                setTimeout(() => {
                    betaForm.style.display = 'none';
                    successMsg.style.display = 'block';
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1500);
            });
        }
    }

    console.log("PixelRed Studio site loaded. Systems operational.");
});
