'use strict';
const flags={fr:'fr',en:'en',de:'de',es:'es',it:'it',pt:'pt',pl:'pl',ru:'ru',ja:'ja',ko:'ko',zh:'zh'};
const languagePicker=document.getElementById('language');
const assetRoot=document.body.dataset.assetRoot||'';
const pageGame=document.body.dataset.game;
const pageLanguage=document.body.dataset.pageLanguage;
let language='fr',activeFilter='all',storedLanguage=null;
try{storedLanguage=localStorage.getItem('pixelred-language');}catch(_){}
const params=new URLSearchParams(location.search);
const supported=Object.keys(flags);
const browserLanguage=(navigator.language||'fr').slice(0,2).toLowerCase();
const initialLanguage=[params.get('lang'),pageLanguage,storedLanguage,browserLanguage,'fr'].find(value=>supported.includes(value));
function gamePath(game,lang){
 const path='games/'+game+'/';
 if(game==='moltillion'&&lang==='en')return path+'index.en.html';
 if(game==='moltillion'&&lang==='fr')return path;
 return path+'?lang='+lang;
}
function message(key){return copy[language][key]??copy.en[key]??key;}
function updateFilter(){
 const result=document.getElementById('filter-result');
 if(!result)return;
 let count=0;
 document.querySelectorAll('[data-platform]').forEach(card=>{
  card.hidden=activeFilter!=='all'&&!card.dataset.platform.split(' ').includes(activeFilter);
  if(!card.hidden)count++;
 });
 document.querySelectorAll('[data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===activeFilter)));
 result.textContent=count+' / 4';
}
function setLanguage(value){
 language=supported.includes(value)?value:'fr';
 document.documentElement.lang=language;
 document.querySelectorAll('[data-i18n]').forEach(node=>{
  const text=message(node.dataset.i18n);
  if(['heroTitle','gamesTitle','betaTitle','studioTitle'].includes(node.dataset.i18n))node.innerHTML=text;
  else node.textContent=text;
 });
 languagePicker.value=language;
 document.getElementById('language-flag').src=assetRoot+'site_assets/flags/'+language+'.svg';
 document.title=pageGame?games[pageGame].name+' — PixelRed Studio':'PixelRed Studio — Boulito · TapSafe · Flickerun · Moltillion';
 document.querySelectorAll('[data-game-page]').forEach(link=>{
  link.href=assetRoot+gamePath(link.dataset.gamePage,language);
 });
 document.querySelectorAll('[data-home-link]').forEach(link=>{link.href=assetRoot+'?lang='+language+'#games';});
 document.querySelectorAll('[data-home-section]').forEach(link=>{link.href=assetRoot+'?lang='+language+'#'+link.dataset.homeSection;});
 document.querySelectorAll('[data-shop-link]').forEach(link=>{link.href=assetRoot+'boutique/?lang='+language;});
 document.querySelectorAll('[data-news-link]').forEach(link=>{link.href=assetRoot+'actualites/?lang='+language;});
 try{localStorage.setItem('pixelred-language',language);}catch(_){}
 updateFilter();
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;updateFilter();}));
languagePicker.addEventListener('change',()=>{
 const selected=languagePicker.value;
 if(pageLanguage){
  location.assign(assetRoot+gamePath(pageGame,selected)+location.hash);
  return;
 }
 setLanguage(selected);
});
document.getElementById('year').textContent=String(new Date().getFullYear());
if(pageLanguage==='fr'&&params.get('lang')==='en'){
 const legacyParams=new URLSearchParams(location.search);
 legacyParams.delete('lang');
 const query=legacyParams.toString();
 location.replace('./index.en.html'+(query?'?'+query:'')+location.hash);
}else{
 setLanguage(initialLanguage);
 if(!pageGame&&Object.prototype.hasOwnProperty.call(games,params.get('game')))location.replace(gamePath(params.get('game'),language));
}
