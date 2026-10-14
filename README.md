# PixelRed Studio — portfolio officiel

Site statique des quatre jeux : Boulito, TapSafe, Flickerun et Moltillion.
Source unique : `web/site/`, avec l'historique Git du dépôt officiel.

## Expérience

Catalogue illustré, filtres PC/Android, fiches accessibles au clavier,
parcours vers les groupes de tests, onze langues et préférence locale conservée.
TapSafe mène à sa fiche Google Play. Boulito est indiqué comme alpha en
préparation; aucun téléchargement Play ou disponibilité Steam n'est annoncé.
Flickerun et Moltillion mènent à leurs groupes pour vérifier la disponibilité
et suivre les instructions. Rejoindre un groupe ne vaut pas inscription au test.

## Sources

- `index.html`, `style.css`, `script.js` : page responsive et interactions.
- `locales.js`, `catalogue-languages.js` : textes dans les onze langues.
- `site_assets/` : médias originaux du studio.
- `privacy*.html`, `suppression-donnees.html`, `mentions-legales.html` : pages
  publiques préexistantes conservées.
- `CNAME` : domaine `pixelredstudio.com`.

Les textes sont disponibles en français, anglais, allemand, espagnol, italien,
portugais, polonais, russe, japonais, coréen et chinois simplifié. Une relecture
par des locuteurs natifs reste utile avant une campagne internationale.
Aucun suivi analytique, formulaire de collecte ou publicité n'est ajouté au site.

## Vérification et publication

Aperçu local depuis le studio :
`python -m http.server 8765 --bind 127.0.0.1 --directory web/site`.
Contrôle statique : `python tools/check_portfolio.py`.
Les captures et contrôles du navigateur sont dans `operations/qa/website/`.
Le site conserve son hébergement GitHub Pages existant et son domaine.
Vérifier les changements distants avant chaque publication; préserver notamment
les textes légaux. Retour arrière : revenir au commit précédent et republier.
Les clés de signature et sauvegardes des jeux ne doivent jamais entrer dans ce dépôt.
