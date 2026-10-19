'use strict';
const pageType=document.body.dataset.shopPage||'store';
const isThanks=pageType==='thanks',isStore=pageType==='store';
const root=isThanks?'../../':'../';
const base=window.PIXELRED_SHOP?.apiBase;
const strings=window.PIXELRED_SHOP_STRINGS;
const locales={fr:'fr-FR',en:'en-IE',de:'de-DE',es:'es-ES',it:'it-IT',pt:'pt-PT',pl:'pl-PL',ru:'ru-RU',ja:'ja-JP',ko:'ko-KR',zh:'zh-CN'};
let language='fr',available=false,testMode=true,orderStatus='checking',buying=false,recovering=false,serviceOffline=false,purchaseMessageKey='',recoveryMessageKey='';
function text(key){return strings[language][key]||strings.en[key]||key;}
function render(){
 document.documentElement.lang=language;
 document.title=(pageType==='conditions'?text('legalTermsTitle'):pageType==='privacy'?text('privacyTitle'):isThanks?'Boulito':text('navShop'))+' — PixelRed Studio';
 document.querySelectorAll('[data-shop-text]').forEach(node=>{node.textContent=text(node.dataset.shopText);});
 document.querySelectorAll('[data-i18n]').forEach(node=>{if(strings[language][node.dataset.i18n])node.textContent=text(node.dataset.i18n);});
 for(const [attribute,dataset]of [['alt','shopAlt'],['aria-label','shopAria']])document.querySelectorAll('[data-'+attribute.replace('aria-label','shop-aria').replace('alt','shop-alt')+']').forEach(node=>node.setAttribute(attribute,text(node.dataset[dataset])));
 document.getElementById('language').value=language;
 document.getElementById('language-flag').src=root+'site_assets/flags/'+language+'.svg';
 document.querySelectorAll('a[href]').forEach(node=>{const href=node.getAttribute('href');if(!href||href.startsWith('#')||href.startsWith('mailto:'))return;const target=new URL(href,location.href);if(target.origin!==location.origin||/\.(png|webp|svg|jpg|zip)$/i.test(target.pathname))return;target.searchParams.set('lang',language);node.href=target.href;});
 const amount=new Intl.NumberFormat(locales[language],{style:'currency',currency:'EUR'}).format(4.99);
 const price=document.querySelector('.price-line strong');if(price)price.textContent=amount;
 const description=document.querySelector('meta[name="description"]');if(description)description.content='Boulito · '+amount+' · '+text('intro')+' '+(available?text('delivery'):text('closed'));
 if(isThanks){document.getElementById('order-message').textContent=text(orderStatus);return;}
 if(!isStore)return;
 document.getElementById('buy-button').textContent=text(available?(testMode?'testBuy':'buy'):'soon').replace(/4[,.]99\s*€|€\s*4[,.]99/,amount);
 document.getElementById('buy-button').disabled=!available||buying;
 ['accept-terms','immediate-delivery','promo-code'].forEach(id=>document.getElementById(id).disabled=!available||buying);
 document.getElementById('sale-state').textContent=text(serviceOffline?'offline':available?(testMode?'testNotice':'delivery'):'closed');
 document.getElementById('recover-email').placeholder=text('emailPlaceholder');
 document.getElementById('recover-email').disabled=!base||recovering;
 document.getElementById('recover-button').disabled=!base||recovering;
 document.getElementById('purchase-message').textContent=purchaseMessageKey?text(purchaseMessageKey):'';
 document.getElementById('recover-message').textContent=recoveryMessageKey?text(recoveryMessageKey):base?'':text('recoverclosed');
}
async function api(route,body){
 if(!base)throw new Error(text('offline'));
 const target=new URL(base);if(target.protocol!=='https:'&&!(target.protocol==='http:'&&target.hostname==='127.0.0.1'))throw new Error(text('offline'));
 let response;try{response=await fetch(base+route,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json'}:{},body:body?JSON.stringify(body):undefined,redirect:'error',referrerPolicy:'no-referrer',signal:AbortSignal.timeout(20000)});}catch{throw new Error(text('offline'));}
 const result=await response.json();if(!response.ok){const key=result.code==='invalid_promo'?'invalidPromo':response.status===429?'errorRate':response.status===403?'errorForbidden':response.status===400?'errorInvalid':'offline';throw Object.assign(new Error(text(key)),{translationKey:key});}return result;
}
let stored;try{stored=localStorage.getItem('pixelred-language');}catch{}
const requested=new URLSearchParams(location.search).get('lang')||stored||navigator.language;
const normalise=value=>String(value||'').toLowerCase().split(/[-_]/)[0];
language=Object.hasOwn(strings,normalise(requested))?normalise(requested):'en';
document.getElementById('language').addEventListener('change',event=>{language=event.target.value;try{localStorage.setItem('pixelred-language',language);}catch{}const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);render();});render();
if(isStore){
 if(new URLSearchParams(location.search).has('cancelled')){purchaseMessageKey='cancelled';render();}
 document.getElementById('purchase-form').addEventListener('submit',async event=>{
  event.preventDefault();if(!available||buying)return;buying=true;render();
  try{const result=await api('/checkout',{game:'boulito',language,promoCode:document.getElementById('promo-code').value.trim(),acceptTerms:document.getElementById('accept-terms').checked,immediateDelivery:document.getElementById('immediate-delivery').checked});const url=new URL(result.url);if(url.protocol!=='https:'||url.hostname!=='checkout.stripe.com')throw new Error(text('offline'));location.assign(url.href);}
  catch(error){purchaseMessageKey=error.translationKey||'offline';buying=false;render();}
 });
 document.getElementById('recover-form').addEventListener('submit',async event=>{event.preventDefault();if(recovering)return;recovering=true;recoveryMessageKey='sending';render();try{await api('/resend',{email:document.getElementById('recover-email').value,language});recoveryMessageKey='sent';}catch(error){recoveryMessageKey=error.translationKey||'offline';}finally{recovering=false;render();}});
 if(base)api('/catalogue').then(result=>{available=result.available===true&&result.priceCents===499&&result.currency==='EUR';testMode=result.testMode!==false;render();}).catch(()=>{serviceOffline=true;render();});
}else if(isThanks){
 const reference=new URLSearchParams(location.search).get('session_id');let attempts=0;
 async function check(){if(!reference||!base){orderStatus='noOrder';render();return;}try{const result=await api('/order-status?session_id='+encodeURIComponent(reference));orderStatus=result.status==='revoked'?'revoked':result.status==='paid'?(result.delivery==='sent'?'delivered':'paid'):'pending';}catch{orderStatus='offline';}render();if(['pending','paid'].includes(orderStatus)&&++attempts<20)setTimeout(check,3000);}
 check();
}
