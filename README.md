# PixelRed Studio — portfolio officiel

Site statique des quatre jeux : Boulito, TapSafe, Flickerun et Moltillion.
Source unique : `web/site/`, avec l'historique Git du dépôt officiel.

## Accès aux jeux

- `games/tapsafe/` : Google Play, version de production; aucun groupe requis.
- `games/flickerun/`, `games/moltillion/` : groupe → inscription → installation.
- `games/boulito/` : Alpha Android disponible; groupe → inscription → installation.

Chaque jeu possède sa page avec visuels, statut, liens et explications.
Le parcours de bêta utilise le même compte Google aux trois étapes. Rejoindre
un groupe ne vaut pas inscription au test. Une aide explique les problèmes
courants et le raccourci pour les personnes déjà inscrites.
Le site propose onze langues, des filtres PC/Android et une préférence conservée.
L’Alpha Android de Boulito est disponible aux testeurs. La mise à jour 0.1.1 est en cours d’examen chez Google. Aucune disponibilité Steam n’est annoncée.

## Sources et génération

- `index.html`, `style.css`, `script.js` : catalogue et interactions communes.
- `games/*/index.html`, `game-pages.css` : pages des quatre jeux.
- `game-catalogue.json` : statuts et liens de référence.
- `catalogue-data.js` : catalogue généré utilisé par le navigateur.
- `locales.js`, `catalogue-languages.js`, `access-languages.js` : textes localisés.
- `site_assets/` : médias originaux du studio et drapeaux vectoriels.
- `privacy*.html`, `suppression-donnees.html`, `mentions-legales.html` : pages publiques conservées.
- `CNAME` : domaine `pixelredstudio.com`, hébergement GitHub Pages existant.

Le générateur du studio `tools/build_game_pages.py` produit les quatre pages,
le catalogue partagé et adapte les actions du catalogue au statut réel du jeu.
Une version de production utilise son lien Google Play; une bêta utilise le
groupe, le lien d'inscription et la fiche du jeu. Une version en préparation
n'expose pas de faux lien d'installation.

Depuis le studio : `python tools/build_game_pages.py`, puis
`python tools/check_portfolio.py`. Ces commandes n'envoient aucun jeu à Google Play.
Aperçu : `python -m http.server 8765 --bind 127.0.0.1 --directory web/site`.
Les captures et rapports sont conservés dans `operations/qa/website/`.

Référence du parcours :
https://support.google.com/googleplay/android-developer/answer/9845334

Les pages sont disponibles en français, anglais, allemand, espagnol, italien,
portugais, polonais, russe, japonais, coréen et chinois simplifié. Une relecture
par des locuteurs natifs reste à prévoir. Aucun suivi analytique ni formulaire
de collecte n'est ajouté. Les clés et sauvegardes des jeux restent hors du site.
Vérifier les changements distants avant de publier; préserver les pages légales.
