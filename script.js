'use strict';
const games = {
 boulito:{name:'Boulito',description:'boulitoDesc',image:'site_assets/games/boulito.png',group:'https://groups.google.com/g/boulito-beta',status:'alpha',note:'boulitoNote'},
 flickerun:{name:'Flickerun',description:'flickDesc',image:'site_assets/flickerun-home.webp',group:'https://groups.google.com/g/flickerun-beta',optin:'https://play.google.com/apps/testing/com.pixelredstudio.flickerun',status:'testAccess',note:'otherNote'},
 moltillion:{name:'Moltillion',description:'moltDesc',image:'site_assets/games/moltillion.png',group:'https://groups.google.com/g/moltillion-testers',optin:'https://play.google.com/apps/testing/com.pixelredstudio.moltillion',status:'testAccess',note:'otherNote'}
};
const flags={fr:'🇫🇷',en:'🇬🇧',de:'🇩🇪',es:'🇪🇸',it:'🇮🇹',pt:'🇵🇹',pl:'🇵🇱',ru:'🇷🇺',ja:'🇯🇵',ko:'🇰🇷',zh:'🇨🇳'};
const languagePicker=document.getElementById('language');
const dialog=document.getElementById('game-dialog');
let language='fr', activeGame=null, activeFilter='all';
let storedLanguage=null;
try { storedLanguage=localStorage.getItem('pixelred-language'); } catch (_) { /* Storage can be blocked by browser preferences. */ }
const requestedLanguage=new URLSearchParams(location.search).get('lang');
const browserLanguage=(navigator.language||'fr').slice(0,2).toLowerCase();
const supported=Object.keys(flags);
const initialLanguage=[requestedLanguage,storedLanguage,browserLanguage,'fr'].find(value=>supported.includes(value));
function message(key){return copy[language][key]??copy.en[key]??key;}
function updateDialog(){
 if(!activeGame)return;
 const game=games[activeGame];
 document.getElementById('dialog-title').textContent=game.name;
 document.getElementById('dialog-description').textContent=message(game.description);
 document.getElementById('dialog-status').textContent=message(game.status);
 document.getElementById('dialog-note').textContent=message(game.note);
 const art=document.getElementById('dialog-art');
 art.src=game.image; art.alt=game.name;
 art.style.objectFit=activeGame==='flickerun'?'contain':'cover';
 document.getElementById('dialog-join').href=game.group;
 const optin=document.getElementById('dialog-optin');
 optin.hidden=!game.optin;
 if(game.optin)optin.href=game.optin;else optin.removeAttribute('href');
}
function setLanguage(value){
 language=supported.includes(value)?value:'fr';
 document.documentElement.lang=language;
 document.querySelectorAll('[data-i18n]').forEach(node=>{
  const value=message(node.dataset.i18n);
  if(['heroTitle','gamesTitle','betaTitle','studioTitle'].includes(node.dataset.i18n))node.innerHTML=value;
  else node.textContent=value;
 });
 languagePicker.value=language;
 document.getElementById('language-flag').src='site_assets/flags/'+language+'.svg';
 document.querySelector('[data-close]').setAttribute('aria-label',message('close'));
 document.querySelector('.skip-link').setAttribute('aria-label',message('skip'));
 document.title='PixelRed Studio — Boulito · TapSafe · Flickerun · Moltillion';
 try {localStorage.setItem('pixelred-language',language);} catch (_) {}
 updateFilter();updateDialog();
}
function updateFilter(){
 let count=0;
 document.querySelectorAll('[data-platform]').forEach(card=>{
  card.hidden=activeFilter!=='all'&&!card.dataset.platform.split(' ').includes(activeFilter);
  if(!card.hidden)count++;
 });
 document.querySelectorAll('[data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===activeFilter)));
 document.getElementById('filter-result').textContent=count+' / 4';
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;updateFilter();}));
document.querySelectorAll('[data-game]').forEach(button=>button.addEventListener('click',()=>{
 activeGame=button.dataset.game;updateDialog();dialog.showModal();
}));
document.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{
 if(event.target!==dialog)return;
 const rect=dialog.getBoundingClientRect();
 if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();
});
dialog.addEventListener('close',()=>{activeGame=null;});
languagePicker.addEventListener('change',()=>setLanguage(languagePicker.value));
document.getElementById('year').textContent=String(new Date().getFullYear());
setLanguage(initialLanguage);
const requestedGame=new URLSearchParams(location.search).get('game');
if(games[requestedGame]){activeGame=requestedGame;updateDialog();dialog.showModal();}
