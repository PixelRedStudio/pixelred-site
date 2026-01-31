document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. SYSTEME DE TRADUCTION (I18N)
       ========================================= */
    
    const translations = {
        fr: {
            "nav-game": "Jeu",
            "nav-download": "Télécharger",
            "hero-title": "Créateurs d'expériences <br>mobiles <span class='text-red'>intenses</span>.",
            "hero-subtitle": "Découvrez <strong>TapSafe</strong>, maintenant disponible sur Android.",
            "btn-trailer": "▶ Voir le Gameplay",
            "btn-playstore": "Disponible sur Google Play",
            "scroll": "Défiler",
            "tag-available": "DISPONIBLE",
            "game-title": "TAPSAFE : L'AGILITÉ PURE",
            "game-desc": "Testez vos réflexes. TapSafe est un défi d'agilité pure. Survivrez-vous au mode Hard ?",
            "gallery-1": "Interface Épurée",
            "gallery-2": "Mode Hardcore",
            "gallery-3": "Combo Streak",
            "gallery-4": "Focus Mode",
            "download-title": "PRÊT À <span class='text-red'>JOUER ?</span>",
            "download-desc": "Le jeu est officiellement sorti. Rejoignez des milliers de joueurs et tentez de battre le record mondial.",
            "feature-1": "✅ Gratuit sur Android",
            "feature-2": "✅ Classement Mondial",
            "feature-3": "✅ Mises à jour régulières",
            "btn-install": "Installer le jeu",
            "download-note": "Nécessite Android 8.0 ou supérieur.",
            "about-title": "LE STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> est né d'une ambition simple : ramener le fun immédiat sur mobile.",
            "about-p2": "<em>TapSafe</em> n'est que le début. Notre roadmap pour 2026 inclut déjà deux autres prototypes."
        },
        en: {
            "nav-game": "Game",
            "nav-download": "Download",
            "hero-title": "Creators of intense <br>mobile <span class='text-red'>experiences</span>.",
            "hero-subtitle": "Discover <strong>TapSafe</strong>, now available on Android.",
            "btn-trailer": "▶ Watch Gameplay",
            "btn-playstore": "Get it on Google Play",
            "scroll": "Scroll",
            "tag-available": "AVAILABLE NOW",
            "game-title": "TAPSAFE: PURE AGILITY",
            "game-desc": "Test your reflexes. TapSafe is a challenge of pure agility. Can you survive Hard Mode?",
            "gallery-1": "Clean Interface",
            "gallery-2": "Hardcore Mode",
            "gallery-3": "Combo Streak",
            "gallery-4": "Focus Mode",
            "download-title": "READY TO <span class='text-red'>PLAY?</span>",
            "download-desc": "The game is officially out. Join thousands of players and try to beat the world record.",
            "feature-1": "✅ Free on Android",
            "feature-2": "✅ Global Leaderboards",
            "feature-3": "✅ Regular Updates",
            "btn-install": "Install Now",
            "download-note": "Requires Android 8.0 or higher.",
            "about-title": "THE STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> was born from a simple ambition: bring immediate fun back to mobile.",
            "about-p2": "<em>TapSafe</em> is just the beginning. Our 2026 roadmap already includes two new prototypes."
        },
        de: {
            "nav-game": "Spiel",
            "nav-download": "Herunterladen",
            "hero-title": "Schöpfer intensiver <br>mobiler <span class='text-red'>Erlebnisse</span>.",
            "hero-subtitle": "Entdecke <strong>TapSafe</strong>, jetzt für Android verfügbar.",
            "btn-trailer": "▶ Gameplay ansehen",
            "btn-playstore": "Jetzt bei Google Play",
            "scroll": "Scrollen",
            "tag-available": "VERFÜGBAR",
            "game-title": "TAPSAFE: REINE GESCHWINDIGKEIT",
            "game-desc": "Teste deine Reflexe. TapSafe ist die ultimative Herausforderung. Überlebst du den Hard Mode?",
            "gallery-1": "Klare Oberfläche",
            "gallery-2": "Hardcore Modus",
            "gallery-3": "Combo Streak",
            "gallery-4": "Fokus Modus",
            "download-title": "BEREIT ZU <span class='text-red'>SPIELEN?</span>",
            "download-desc": "Das Spiel ist offiziell veröffentlicht. Schließe dich tausenden Spielern an.",
            "feature-1": "✅ Kostenlos für Android",
            "feature-2": "✅ Globale Ranglisten",
            "feature-3": "✅ Regelmäßige Updates",
            "btn-install": "Jetzt Installieren",
            "download-note": "Erfordert Android 8.0 oder höher.",
            "about-title": "DAS STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> bringt den sofortigen Spielspaß zurück auf das Handy.",
            "about-p2": "<em>TapSafe</em> ist erst der Anfang. Unsere Roadmap für 2026 ist bereit."
        },
        es: {
            "nav-game": "Juego",
            "nav-download": "Descargar",
            "hero-title": "Creadores de experiencias <br>móviles <span class='text-red'>intensas</span>.",
            "hero-subtitle": "Descubre <strong>TapSafe</strong>, ya disponible en Android.",
            "btn-trailer": "▶ Ver Gameplay",
            "btn-playstore": "Disponible en Google Play",
            "scroll": "Desplazar",
            "tag-available": "DISPONIBLE",
            "game-title": "TAPSAFE: AGILIDAD PURA",
            "game-desc": "Pon a prueba tus reflejos. ¿Sobrevivirás al modo difícil?",
            "gallery-1": "Interfaz Limpia",
            "gallery-2": "Modo Hardcore",
            "gallery-3": "Racha de Combos",
            "gallery-4": "Modo Enfoque",
            "download-title": "¿LISTO PARA <span class='text-red'>JUGAR?</span>",
            "download-desc": "El juego ya está disponible. Únete a miles de jugadores hoy mismo.",
            "feature-1": "✅ Gratis en Android",
            "feature-2": "✅ Ranking Mundial",
            "feature-3": "✅ Actualizaciones",
            "btn-install": "Instalar Ahora",
            "download-note": "Requiere Android 8.0 o superior.",
            "about-title": "EL ESTUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> nació para traer diversión inmediata al móvil.",
            "about-p2": "<em>TapSafe</em> es solo el comienzo. Más juegos llegarán en 2026."
        },
        it: {
            "nav-game": "Gioco",
            "nav-download": "Scarica",
            "hero-title": "Creatori di esperienze <br>mobili <span class='text-red'>intense</span>.",
            "hero-subtitle": "Scopri <strong>TapSafe</strong>, ora disponibile su Android.",
            "btn-trailer": "▶ Guarda Gameplay",
            "btn-playstore": "Disponibile su Google Play",
            "scroll": "Scorri",
            "tag-available": "DISPONIBILE",
            "game-title": "TAPSAFE: PURA AGILITÀ",
            "game-desc": "Metti alla prova i tuoi riflessi. Sopravviverai alla modalità Difficile?",
            "gallery-1": "Interfaccia Pulita",
            "gallery-2": "Modalità Hardcore",
            "gallery-3": "Serie di Combo",
            "gallery-4": "Modalità Focus",
            "download-title": "PRONTO A <span class='text-red'>GIOCARE?</span>",
            "download-desc": "Il gioco è ufficialmente uscito. Unisciti a migliaia di giocatori.",
            "feature-1": "✅ Gratis su Android",
            "feature-2": "✅ Classifiche Globali",
            "feature-3": "✅ Aggiornamenti",
            "btn-install": "Installa Ora",
            "download-note": "Richiede Android 8.0 o superiore.",
            "about-title": "LO STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> è nato per riportare il divertimento immediato su mobile.",
            "about-p2": "<em>TapSafe</em> è solo l'inizio. Nuovi progetti in arrivo nel 2026."
        },
        pt: {
            "nav-game": "Jogo",
            "nav-download": "Baixar",
            "hero-title": "Criadores de experiências <br>móveis <span class='text-red'>intensas</span>.",
            "hero-subtitle": "Descubra <strong>TapSafe</strong>, disponível para Android.",
            "btn-trailer": "▶ Ver Gameplay",
            "btn-playstore": "Disponível no Google Play",
            "scroll": "Rolar",
            "tag-available": "DISPONÍVEL",
            "game-title": "TAPSAFE: AGILIDADE PURA",
            "game-desc": "Teste seus reflexos. Você consegue sobreviver ao Modo Difícil?",
            "gallery-1": "Interface Limpa",
            "gallery-2": "Modo Hardcore",
            "gallery-3": "Combo Streak",
            "gallery-4": "Modo Foco",
            "download-title": "PRONTO PARA <span class='text-red'>JOGAR?</span>",
            "download-desc": "O jogo foi lançado oficialmente. Junte-se a milhares de jogadores.",
            "feature-1": "✅ Grátis no Android",
            "feature-2": "✅ Ranking Global",
            "feature-3": "✅ Atualizações",
            "btn-install": "Instalar Agora",
            "download-note": "Requer Android 8.0 ou superior.",
            "about-title": "O ESTÚDIO",
            "about-p1": "<strong>PixelRed Studio</strong> nasceu para trazer diversão imediata ao mobile.",
            "about-p2": "<em>TapSafe</em> é apenas o começo. Mais novidades em 2026."
        },
        ru: {
            "nav-game": "Игра",
            "nav-download": "Скачать",
            "hero-title": "Создатели интенсивных <br>мобильных <span class='text-red'>игр</span>.",
            "hero-subtitle": "Откройте для себя <strong>TapSafe</strong> на Android.",
            "btn-trailer": "▶ Смотреть геймплей",
            "btn-playstore": "Доступно в Google Play",
            "scroll": "Вниз",
            "tag-available": "ДОСТУПНО",
            "game-title": "TAPSAFE: ЧИСТАЯ СКОРОСТЬ",
            "game-desc": "Проверьте свои рефлексы. Выживете ли вы в сложном режиме?",
            "gallery-1": "Чистый интерфейс",
            "gallery-2": "Хардкор режим",
            "gallery-3": "Комбо серии",
            "gallery-4": "Режим фокуса",
            "download-title": "ГОТОВЫ <span class='text-red'>ИГРАТЬ?</span>",
            "download-desc": "Игра официально вышла. Присоединяйтесь к тысячам игроков.",
            "feature-1": "✅ Бесплатно на Android",
            "feature-2": "✅ Глобальный рейтинг",
            "feature-3": "✅ Обновления",
            "btn-install": "Установить",
            "download-note": "Требуется Android 8.0+",
            "about-title": "СТУДИЯ",
            "about-p1": "<strong>PixelRed Studio</strong> создает игры для чистого удовольствия.",
            "about-p2": "<em>TapSafe</em> - это только начало. Ждите новинок в 2026 году."
        },
        ja: {
            "nav-game": "ゲーム",
            "nav-download": "ダウンロード",
            "hero-title": "強烈なモバイル <br><span class='text-red'>体験</span>の創造。",
            "hero-subtitle": "Android版 <strong>TapSafe</strong> 配信開始。",
            "btn-trailer": "▶ ゲームプレイを見る",
            "btn-playstore": "Google Playで入手",
            "scroll": "スクロール",
            "tag-available": "配信中",
            "game-title": "TAPSAFE: 純粋な敏捷性",
            "game-desc": "反射神経をテストしよう。ハードモードを生き残れるか？",
            "gallery-1": "シンプルUI",
            "gallery-2": "ハードコアモード",
            "gallery-3": "コンボストリーク",
            "gallery-4": "集中モード",
            "download-title": "プレイする <span class='text-red'>準備はいい？</span>",
            "download-desc": "正式リリース。何千人ものプレイヤーと一緒に世界記録に挑戦しよう。",
            "feature-1": "✅ 基本プレイ無料",
            "feature-2": "✅ 世界ランキング",
            "feature-3": "✅ 定期アップデート",
            "btn-install": "今すぐインストール",
            "download-note": "Android 8.0以上が必要です。",
            "about-title": "スタジオについて",
            "about-p1": "<strong>PixelRed Studio</strong>は、純粋な楽しさをモバイルにもたらします。",
            "about-p2": "<em>TapSafe</em>は始まりに過ぎません。2026年も新作が登場予定です。"
        },
        ko: {
            "nav-game": "게임",
            "nav-download": "다운로드",
            "hero-title": "강렬한 모바일 <br><span class='text-red'>경험</span>을 창조하다.",
            "hero-subtitle": "Android용 <strong>TapSafe</strong> 출시.",
            "btn-trailer": "▶ 게임플레이 보기",
            "btn-playstore": "Google Play에서 다운로드",
            "scroll": "스크롤",
            "tag-available": "출시됨",
            "game-title": "TAPSAFE: 순수한 민첩성",
            "game-desc": "반사신경을 테스트하세요. 하드 모드에서 살아남을 수 있습니까?",
            "gallery-1": "깔끔한 인터페이스",
            "gallery-2": "하드코어 모드",
            "gallery-3": "콤보 스트릭",
            "gallery-4": "포커스 모드",
            "download-title": "플레이할 <span class='text-red'>준비 되셨나요?</span>",
            "download-desc": "정식 출시되었습니다. 수천 명의 플레이어와 함께하세요.",
            "feature-1": "✅ 안드로이드 무료",
            "feature-2": "✅ 글로벌 랭킹",
            "feature-3": "✅ 정기 업데이트",
            "btn-install": "지금 설치",
            "download-note": "Android 8.0 이상 필요.",
            "about-title": "스튜디오 소개",
            "about-p1": "<strong>PixelRed Studio</strong>는 모바일에 즉각적인 재미를 선사합니다.",
            "about-p2": "<em>TapSafe</em>는 시작일 뿐입니다. 2026년 로드맵이 준비되어 있습니다."
        },
        zh: {
            "nav-game": "游戏",
            "nav-download": "下载",
            "hero-title": "创造激烈的 <br>移动 <span class='text-red'>体验</span>.",
            "hero-subtitle": "探索 <strong>TapSafe</strong>，现已登陆 Android。",
            "btn-trailer": "▶ 观看演示",
            "btn-playstore": "在 Google Play 获取",
            "scroll": "滚动",
            "tag-available": "现已发布",
            "game-title": "TAPSAFE: 纯粹的敏捷",
            "game-desc": "测试你的反应能力。你能幸存于困难模式吗？",
            "gallery-1": "极简界面",
            "gallery-2": "硬核模式",
            "gallery-3": "连击系统",
            "gallery-4": "专注模式",
            "download-title": "准备好 <span class='text-red'>玩了吗？</span>",
            "download-desc": "游戏正式发布。加入成千上万的玩家，挑战世界纪录。",
            "feature-1": "✅ Android 免费",
            "feature-2": "✅ 全球排行榜",
            "feature-3": "✅ 定期更新",
            "btn-install": "立即安装",
            "download-note": "需要 Android 8.0 或更高版本。",
            "about-title": "关于工作室",
            "about-p1": "<strong>PixelRed Studio</strong> 致力于为移动端带来纯粹的乐趣。",
            "about-p2": "<em>TapSafe</em> 只是一个开始。2026 年将有更多新作。"
        }
    };

    /* --- MAP FLAGS TO LANGUAGES --- */
    // Associer code langue -> code drapeau (librairie flag-icon-css)
    const flagMap = {
        fr: 'fr',
        en: 'us',
        de: 'de',
        es: 'es',
        it: 'it',
        pt: 'pt',
        ru: 'ru',
        ja: 'jp',
        ko: 'kr',
        zh: 'cn'
    };

    /* --- CUSTOM DROPDOWN LOGIC --- */
    const dropdown = document.querySelector('.custom-dropdown');
    const selectedLangDiv = document.querySelector('.selected-lang');
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');
    const langItems = document.querySelectorAll('.dropdown-list li');

    // Toggle dropdown
    if(selectedLangDiv) {
        selectedLangDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    }

    // Fonction pour changer la langue
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            let text = translations[lang][key] || translations['en'][key];
            if (text) {
                if (text.includes('<')) el.innerHTML = text;
                else el.textContent = text;
            }
        });

        // Mise à jour de l'affichage du menu (Drapeau + Texte)
        // 1. Trouver le nom de la langue dans la liste
        const item = document.querySelector(`.dropdown-list li[data-lang="${lang}"]`);
        if(item) {
            currentLangText.textContent = lang.toUpperCase();
            // 2. Mettre à jour la classe du drapeau
            currentFlag.className = `flag-icon flag-icon-${flagMap[lang]}`;
        }
    }

    // Gestion du clic sur une langue
    langItems.forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.getAttribute('data-lang');
            changeLanguage(lang);
            dropdown.classList.remove('active');
        });
    });

    // Fermer si clic dehors
    window.addEventListener('click', () => {
        if(dropdown) dropdown.classList.remove('active');
    });

    /* --- AUTO DETECT LANGUAGE --- */
    const userLang = navigator.language || navigator.userLanguage; 
    const langCode = userLang.split('-')[0].toLowerCase(); 
    
    if (translations.hasOwnProperty(langCode)) {
        changeLanguage(langCode);
    } else {
        changeLanguage('en'); 
    }

    /* =========================================
       2. RESTE DU CODE (Scroll, Vidéo, etc.)
       ========================================= */

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
            if (this.id === 'btn-watch-trailer') return;

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

    /* --- VIDEO MODAL LOGIC --- */
    const videoModal = document.getElementById('video-modal');
    const btnWatch = document.getElementById('btn-watch-trailer');
    const closeVideo = document.querySelector('.close-modal');
    const videoPlayer = document.getElementById('gameplay-player');

    if (btnWatch && videoModal && videoPlayer) {
        btnWatch.addEventListener('click', (e) => {
            e.preventDefault();
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
});
