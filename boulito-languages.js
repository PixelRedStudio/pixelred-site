const boulitoInfoKeys=["bNewsTitle", "bNewsStatus", "bNewsNotes", "bGallery", "bCombat", "bBoss", "bShop"];
const boulitoInfoRows={
  "fr": [
    "Dernière Alpha Android",
    "Disponible pour les testeurs",
    "Sons d’armes retravaillés, réglages audio séparés et Voltins non ramassés perdus en fin de vague.",
    "Le jeu, en images",
    "Dans l’arène",
    "Face au boss",
    "Construisez votre arsenal"
  ],
  "en": [
    "Latest Android Alpha",
    "Available to testers",
    "Reworked weapon sounds, separate audio controls and uncollected Voltins lost at the end of each wave.",
    "See the game",
    "In the arena",
    "Facing the boss",
    "Build your arsenal"
  ],
  "de": [
    "Neueste Android-Alpha",
    "Für Tester verfügbar",
    "Überarbeitete Waffengeräusche, getrennte Audioeinstellungen und Verlust nicht gesammelter Voltins am Wellenende.",
    "Einblicke ins Spiel",
    "In der Arena",
    "Gegen den Boss",
    "Baue dein Arsenal auf"
  ],
  "es": [
    "Última alfa de Android",
    "Disponible para testers",
    "Sonidos de armas renovados, controles de audio separados y pérdida de Voltins sin recoger al terminar cada oleada.",
    "El juego en imágenes",
    "En la arena",
    "Frente al jefe",
    "Construye tu arsenal"
  ],
  "it": [
    "Ultima alfa Android",
    "Disponibile per i tester",
    "Suoni delle armi rinnovati, controlli audio separati e Voltins non raccolti persi alla fine di ogni ondata.",
    "Il gioco in immagini",
    "Nell’arena",
    "Contro il boss",
    "Costruisci il tuo arsenale"
  ],
  "pt": [
    "Alfa Android mais recente",
    "Disponível para testadores",
    "Sons das armas renovados, controlos de áudio separados e Voltins não recolhidos perdidos no fim de cada vaga.",
    "O jogo em imagens",
    "Na arena",
    "Contra o chefe",
    "Constrói o teu arsenal"
  ],
  "pl": [
    "Najnowsza alfa na Androida",
    "Dostępna dla testerów",
    "Nowe dźwięki broni, osobne ustawienia dźwięku i utrata niezebranych Voltinów po zakończeniu każdej fali.",
    "Gra na zdjęciach",
    "Na arenie",
    "Starcie z bossem",
    "Zbuduj swój arsenał"
  ],
  "ru": [
    "Последняя альфа для Android",
    "Доступна тестировщикам",
    "Новые звуки оружия, раздельные настройки звука и потеря несобранных Вольтинов в конце каждой волны.",
    "Кадры из игры",
    "На арене",
    "Битва с боссом",
    "Соберите свой арсенал"
  ],
  "ja": [
    "Android最新アルファ版",
    "テスター向けに公開中",
    "武器の効果音を刷新し、個別の音声設定を追加。拾わなかったヴォルティンは各ウェーブ終了時に失われます。",
    "ゲーム画面",
    "アリーナでの戦い",
    "ボスとの対決",
    "武器を組み合わせよう"
  ],
  "ko": [
    "최신 Android 알파",
    "테스터에게 공개 중",
    "무기 효과음과 개별 오디오 설정이 개선되었습니다. 줍지 않은 볼틴은 각 웨이브 종료 시 사라집니다.",
    "게임 화면",
    "아레나 전투",
    "보스와의 대결",
    "나만의 무기 조합"
  ],
  "zh": [
    "最新 Android Alpha 版",
    "已向测试者开放",
    "全新武器音效和独立音频设置。每波结束时，未拾取的沃尔币将会消失。",
    "游戏画面",
    "竞技场战斗",
    "迎战首领",
    "打造你的武器组合"
  ]
};
for(const [language,values] of Object.entries(boulitoInfoRows)){if(values.length!==boulitoInfoKeys.length)throw new Error("Boulito translation mismatch");boulitoInfoKeys.forEach((key,index)=>{copy[language][key]=values[index];});}
