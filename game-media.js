'use strict';

const mediaCopy = {
 fr: ['Le jeu en images', 'Bande-annonce', 'Capture de jeu', 'Mémorisez le signal', 'Reproduisez la séquence', 'Bande-annonce PC originale en français'],
 en: ['See the game in action', 'Trailer', 'Gameplay screenshot', 'Memorize the signal', 'Repeat the sequence', 'Original PC trailer in French'],
 de: ['Das Spiel in Aktion', 'Trailer', 'Screenshot aus dem Spiel', 'Merke dir das Signal', 'Wiederhole die Folge', 'Originaler PC-Trailer auf Französisch'],
 es: ['El juego en acción', 'Tráiler', 'Captura del juego', 'Memoriza la señal', 'Repite la secuencia', 'Tráiler original de PC en francés'],
 it: ['Il gioco in azione', 'Trailer', 'Schermata di gioco', 'Memorizza il segnale', 'Ripeti la sequenza', 'Trailer originale per PC in francese'],
 pt: ['O jogo em ação', 'Trailer', 'Imagem do jogo', 'Memoriza o sinal', 'Repete a sequência', 'Trailer original de PC em francês'],
 pl: ['Zobacz grę w akcji', 'Zwiastun', 'Zrzut ekranu z gry', 'Zapamiętaj sygnał', 'Powtórz sekwencję', 'Oryginalny zwiastun PC po francusku'],
 ru: ['Игра в действии', 'Трейлер', 'Кадр из игры', 'Запомните сигнал', 'Повторите последовательность', 'Оригинальный трейлер для ПК на французском'],
 ja: ['ゲームプレイを見る', 'トレーラー', 'ゲーム画面', 'シグナルを覚える', '順番どおりに再現する', 'フランス語のPC版オリジナルトレーラー'],
 ko: ['게임 플레이 미리 보기', '트레일러', '게임 화면', '신호를 기억하세요', '순서를 따라 누르세요', '프랑스어 PC판 오리지널 트레일러'],
 zh: ['观看游戏实机画面', '预告片', '游戏截图', '记住信号', '重现顺序', '法语 PC 版原版预告片'],
};

function updateGameMedia(language, assetRoot) {
 const labels = mediaCopy[language];
 document.querySelectorAll('[data-media-copy]').forEach(node => {
  node.textContent = labels[Number(node.dataset.mediaCopy)];
 });
 document.querySelectorAll('[data-media-image]').forEach(image => {
  const [game, file] = image.dataset.mediaImage.split('/');
  const src = assetRoot + 'site_assets/media/' + game + '/' + language + '/' + file + '.webp';
  if (image.getAttribute('src') !== src) image.src = src;
  const link = image.closest('[data-media-preview]');
  if (link) {
   image.alt = image.dataset.mediaName + ' · ' + labels[2] + ' ' + file.slice(-1);
   link.href = src;
  }
 });
 document.querySelectorAll('[data-media-video]').forEach(video => {
  const prefix = assetRoot + 'site_assets/media/' + video.dataset.mediaVideo + '/' + language + '/';
  video.setAttribute('aria-label', video.dataset.mediaName + ' · ' + labels[1]);
  if (video.getAttribute('src') === prefix + 'trailer.mp4') return;
  video.pause();
  video.poster = prefix + 'poster.webp';
  video.src = prefix + 'trailer.mp4';
  const fallback = video.querySelector('a');
  fallback.href = video.src;
  fallback.textContent = video.getAttribute('aria-label');
  video.load();
 });
}
