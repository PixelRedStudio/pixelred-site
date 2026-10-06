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
            "download-desc": "Le jeu est sorti et le classement mondial vient d'ouvrir. Inscrivez votre nom tout en haut avant tout le monde.",
            "feature-1": "✅ Gratuit sur Android",
            "feature-2": "✅ Classement Mondial",
            "feature-3": "✅ Mises à jour régulières",
            "btn-install": "Installer le jeu",
            "download-note": "Nécessite Android 8.0 ou supérieur.",
            "about-title": "LE STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> est né d'une ambition simple : ramener le fun immédiat sur mobile.",
            "about-p2": "<em>TapSafe</em> n'est que le début. Flickerun, notre deuxième jeu, arrive bientôt.",
            "footer-privacy": "Confidentialité",
            "footer-legal": "Mentions légales",
            "fl-tag": "BIENTÔT",
            "fl-title": "FLICKERUN : MÉMOIRE + RÉFLEXES",
            "fl-desc": "Les cases s'allument. Mémorisez l'ordre. Reproduisez-le avant la fin du chrono. Notre prochain jeu arrive bientôt sur Android.",
            "fl-1": "<strong>Run sans fin</strong> : des séquences de plus en plus longues.",
            "fl-2": "<strong>Signal du jour</strong> : le même défi pour tous les joueurs, chaque jour.",
            "fl-3": "<strong>12 palettes</strong> à débloquer en jouant.",
            "fl-4": "<strong>11 langues</strong>, aucun compte requis."
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
            "download-desc": "The game is out and the global leaderboard just opened. Get your name at the top before anyone else.",
            "feature-1": "✅ Free on Android",
            "feature-2": "✅ Global Leaderboards",
            "feature-3": "✅ Regular Updates",
            "btn-install": "Install Now",
            "download-note": "Requires Android 8.0 or higher.",
            "about-title": "THE STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> was born from a simple ambition: bring immediate fun back to mobile.",
            "about-p2": "<em>TapSafe</em> is just the beginning. Flickerun, our second game, is coming soon.",
            "footer-privacy": "Privacy",
            "footer-legal": "Legal notice",
            "fl-tag": "COMING SOON",
            "fl-title": "FLICKERUN: MEMORY + REFLEXES",
            "fl-desc": "Tiles light up. Memorize the order. Repeat it before time runs out. Our next game is coming soon to Android.",
            "fl-1": "<strong>Endless run</strong>: sequences keep getting longer.",
            "fl-2": "<strong>Daily Signal</strong>: the same challenge for every player, every day.",
            "fl-3": "<strong>12 palettes</strong> to unlock as you play.",
            "fl-4": "<strong>11 languages</strong>, no account needed."
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
            "download-desc": "Das Spiel ist erschienen und die globale Rangliste ist gerade eröffnet. Hol dir Platz 1, bevor es andere tun.",
            "feature-1": "✅ Kostenlos für Android",
            "feature-2": "✅ Globale Ranglisten",
            "feature-3": "✅ Regelmäßige Updates",
            "btn-install": "Jetzt Installieren",
            "download-note": "Erfordert Android 8.0 oder höher.",
            "about-title": "DAS STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> bringt den sofortigen Spielspaß zurück auf das Handy.",
            "about-p2": "<em>TapSafe</em> ist erst der Anfang. Flickerun, unser zweites Spiel, kommt bald.",
            "footer-privacy": "Datenschutz",
            "footer-legal": "Impressum",
            "fl-tag": "DEMNÄCHST",
            "fl-title": "FLICKERUN: GEDÄCHTNIS + REFLEXE",
            "fl-desc": "Felder leuchten auf. Merke dir die Reihenfolge. Wiederhole sie, bevor die Zeit abläuft. Unser nächstes Spiel kommt bald für Android.",
            "fl-1": "<strong>Endloser Run</strong>: Die Sequenzen werden immer länger.",
            "fl-2": "<strong>Signal des Tages</strong>: dieselbe Herausforderung für alle, jeden Tag.",
            "fl-3": "<strong>12 Paletten</strong> zum Freispielen.",
            "fl-4": "<strong>11 Sprachen</strong>, kein Konto nötig."
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
            "download-desc": "El juego ya está disponible y el ranking mundial acaba de abrir. Pon tu nombre en lo más alto antes que nadie.",
            "feature-1": "✅ Gratis en Android",
            "feature-2": "✅ Ranking Mundial",
            "feature-3": "✅ Actualizaciones",
            "btn-install": "Instalar Ahora",
            "download-note": "Requiere Android 8.0 o superior.",
            "about-title": "EL ESTUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> nació para traer diversión inmediata al móvil.",
            "about-p2": "<em>TapSafe</em> es solo el comienzo. Flickerun, nuestro segundo juego, llega pronto.",
            "footer-privacy": "Privacidad",
            "footer-legal": "Aviso legal",
            "fl-tag": "PRÓXIMAMENTE",
            "fl-title": "FLICKERUN: MEMORIA + REFLEJOS",
            "fl-desc": "Las casillas se iluminan. Memoriza el orden. Repítelo antes de que se acabe el tiempo. Nuestro próximo juego llega pronto a Android.",
            "fl-1": "<strong>Run infinito</strong>: secuencias cada vez más largas.",
            "fl-2": "<strong>Señal del día</strong>: el mismo reto para todos, cada día.",
            "fl-3": "<strong>12 paletas</strong> para desbloquear jugando.",
            "fl-4": "<strong>11 idiomas</strong>, sin cuenta."
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
            "download-desc": "Il gioco è uscito e la classifica globale è appena stata aperta. Metti il tuo nome in cima prima di tutti.",
            "feature-1": "✅ Gratis su Android",
            "feature-2": "✅ Classifiche Globali",
            "feature-3": "✅ Aggiornamenti",
            "btn-install": "Installa Ora",
            "download-note": "Richiede Android 8.0 o superiore.",
            "about-title": "LO STUDIO",
            "about-p1": "<strong>PixelRed Studio</strong> è nato per riportare il divertimento immediato su mobile.",
            "about-p2": "<em>TapSafe</em> è solo l'inizio. Flickerun, il nostro secondo gioco, arriva presto.",
            "footer-privacy": "Privacy",
            "footer-legal": "Note legali",
            "fl-tag": "IN ARRIVO",
            "fl-title": "FLICKERUN: MEMORIA + RIFLESSI",
            "fl-desc": "Le caselle si illuminano. Memorizza l'ordine. Ripetilo prima che scada il tempo. Il nostro prossimo gioco arriva presto su Android.",
            "fl-1": "<strong>Run infinita</strong>: sequenze sempre più lunghe.",
            "fl-2": "<strong>Segnale del giorno</strong>: la stessa sfida per tutti, ogni giorno.",
            "fl-3": "<strong>12 palette</strong> da sbloccare giocando.",
            "fl-4": "<strong>11 lingue</strong>, nessun account richiesto."
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
            "download-desc": "O jogo foi lançado e o ranking global acabou de abrir. Coloque seu nome no topo antes de todo mundo.",
            "feature-1": "✅ Grátis no Android",
            "feature-2": "✅ Ranking Global",
            "feature-3": "✅ Atualizações",
            "btn-install": "Instalar Agora",
            "download-note": "Requer Android 8.0 ou superior.",
            "about-title": "O ESTÚDIO",
            "about-p1": "<strong>PixelRed Studio</strong> nasceu para trazer diversão imediata ao mobile.",
            "about-p2": "<em>TapSafe</em> é apenas o começo. Flickerun, nosso segundo jogo, chega em breve.",
            "footer-privacy": "Privacidade",
            "footer-legal": "Aviso legal",
            "fl-tag": "EM BREVE",
            "fl-title": "FLICKERUN: MEMÓRIA + REFLEXOS",
            "fl-desc": "As casas acendem. Memorize a ordem. Repita antes que o tempo acabe. Nosso próximo jogo chega em breve ao Android.",
            "fl-1": "<strong>Run infinito</strong>: sequências cada vez mais longas.",
            "fl-2": "<strong>Sinal do dia</strong>: o mesmo desafio para todos, todos os dias.",
            "fl-3": "<strong>12 paletas</strong> para desbloquear jogando.",
            "fl-4": "<strong>11 idiomas</strong>, sem conta."
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
            "download-desc": "Игра вышла, и глобальный рейтинг только что открылся. Займите первое место раньше всех.",
            "feature-1": "✅ Бесплатно на Android",
            "feature-2": "✅ Глобальный рейтинг",
            "feature-3": "✅ Обновления",
            "btn-install": "Установить",
            "download-note": "Требуется Android 8.0+",
            "about-title": "СТУДИЯ",
            "about-p1": "<strong>PixelRed Studio</strong> создает игры для чистого удовольствия.",
            "about-p2": "<em>TapSafe</em> — это только начало. Flickerun, наша вторая игра, скоро выйдет.",
            "footer-privacy": "Конфиденциальность",
            "footer-legal": "Правовая информация",
            "fl-tag": "СКОРО",
            "fl-title": "FLICKERUN: ПАМЯТЬ + РЕАКЦИЯ",
            "fl-desc": "Клетки загораются. Запомните порядок. Повторите его, пока не вышло время. Наша следующая игра скоро выйдет на Android.",
            "fl-1": "<strong>Бесконечный забег</strong>: последовательности становятся всё длиннее.",
            "fl-2": "<strong>Сигнал дня</strong>: одно испытание для всех игроков каждый день.",
            "fl-3": "<strong>12 палитр</strong> открываются в игре.",
            "fl-4": "<strong>11 языков</strong>, без регистрации."
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
            "download-desc": "正式リリース。世界ランキングがオープンしたばかり。誰よりも先に1位に名前を刻もう。",
            "feature-1": "✅ 基本プレイ無料",
            "feature-2": "✅ 世界ランキング",
            "feature-3": "✅ 定期アップデート",
            "btn-install": "今すぐインストール",
            "download-note": "Android 8.0以上が必要です。",
            "about-title": "スタジオについて",
            "about-p1": "<strong>PixelRed Studio</strong>は、純粋な楽しさをモバイルにもたらします。",
            "about-p2": "<em>TapSafe</em>は始まりに過ぎません。2作目のFlickerunがまもなく登場。",
            "footer-privacy": "プライバシー",
            "footer-legal": "法的情報",
            "fl-tag": "近日公開",
            "fl-title": "FLICKERUN：記憶力＋反射神経",
            "fl-desc": "マスが光る。順番を覚えて、時間内に再現しよう。次回作はまもなくAndroidで登場。",
            "fl-1": "<strong>エンドレスラン</strong>：シーケンスはどんどん長くなる。",
            "fl-2": "<strong>本日のシグナル</strong>：全プレイヤー共通の毎日チャレンジ。",
            "fl-3": "<strong>12種類のパレット</strong>をプレイで解放。",
            "fl-4": "<strong>11言語対応</strong>、アカウント不要。"
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
            "download-desc": "정식 출시! 글로벌 랭킹이 막 열렸습니다. 누구보다 먼저 1위에 이름을 올리세요.",
            "feature-1": "✅ 안드로이드 무료",
            "feature-2": "✅ 글로벌 랭킹",
            "feature-3": "✅ 정기 업데이트",
            "btn-install": "지금 설치",
            "download-note": "Android 8.0 이상 필요.",
            "about-title": "스튜디오 소개",
            "about-p1": "<strong>PixelRed Studio</strong>는 모바일에 즉각적인 재미를 선사합니다.",
            "about-p2": "<em>TapSafe</em>는 시작일 뿐입니다. 두 번째 게임 Flickerun이 곧 출시됩니다.",
            "footer-privacy": "개인정보처리방침",
            "footer-legal": "법적 고지",
            "fl-tag": "출시 예정",
            "fl-title": "FLICKERUN: 기억력 + 반사신경",
            "fl-desc": "칸이 빛납니다. 순서를 기억하고 시간 안에 따라 하세요. 다음 게임이 곧 Android로 출시됩니다.",
            "fl-1": "<strong>무한 런</strong>: 시퀀스가 점점 길어집니다.",
            "fl-2": "<strong>오늘의 신호</strong>: 매일 모든 플레이어에게 같은 도전.",
            "fl-3": "<strong>12가지 팔레트</strong>를 플레이로 해금.",
            "fl-4": "<strong>11개 언어</strong>, 계정 불필요."
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
            "download-desc": "游戏正式发布，全球排行榜刚刚开启。抢先登上榜首吧！",
            "feature-1": "✅ Android 免费",
            "feature-2": "✅ 全球排行榜",
            "feature-3": "✅ 定期更新",
            "btn-install": "立即安装",
            "download-note": "需要 Android 8.0 或更高版本。",
            "about-title": "关于工作室",
            "about-p1": "<strong>PixelRed Studio</strong> 致力于为移动端带来纯粹的乐趣。",
            "about-p2": "<em>TapSafe</em> 只是一个开始。我们的第二款游戏 Flickerun 即将推出。",
            "footer-privacy": "隐私政策",
            "footer-legal": "法律声明",
            "fl-tag": "即将推出",
            "fl-title": "FLICKERUN：记忆 + 反应",
            "fl-desc": "方块依次亮起。记住顺序，在倒计时结束前重现。我们的下一款游戏即将登陆 Android。",
            "fl-1": "<strong>无尽模式</strong>：序列越来越长。",
            "fl-2": "<strong>每日信号</strong>：所有玩家每天挑战同一关。",
            "fl-3": "<strong>12 款配色</strong>，边玩边解锁。",
            "fl-4": "<strong>11 种语言</strong>，无需注册。"
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
