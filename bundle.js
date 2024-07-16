(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=(t,e)=>{"undefined"!=typeof ysdk?ysdk.adv?.showFullscreenAdv({callbacks:{onClose:function(n){n?t():e()},onError:function(t){},onOffline:function(){}}}):e()},n=t.p+"assets/03ee3acc87b2c1bf83e9.wav",i=t.p+"assets/60ded3cdb41c1a0a340a.wav",o=t.p+"assets/17c8d99e560aa233b806.wav";class r{static KEY="f47dd91e";static save(t){if(Object.getOwnPropertyNames(t).length>0){let e=JSON.stringify(t);return localStorage.setItem(this.KEY,e),!0}return localStorage.setItem(this.KEY,t),!0}static getData(){return new Promise(((t,e)=>{t(JSON.parse(localStorage.getItem(this.KEY)))}))}}class a{static loc="en";static localizationInit(){this.loc=window.ysdk?.environment.i18n.lang??"en"}static STRINGS=new Map([["best_en","BEST"],["best_tr","EN İYİ"],["best_ru","РЕКОРД"],["dscore_en","PERFECT"],["dscore_tr","MÜKEMMEL"],["dscore_ru","ИДЕАЛЬНО"],["score_en","SCORE"],["score_tr","SKOR"],["score_ru","СЧЕТ"]]);static getString(t){return this.STRINGS.get(t+"_"+this.loc)??this.STRINGS.get(t+"_en")}}let s=0,l=0;const c={countPGamesAfterAd:1,countingActions:3};Array.prototype.last=function(){return this[this.length-1]},Math.sinus=function(t){return Math.sin(t/180*Math.PI)};let d,h,u,w,g=!1,f=!1,m="waiting",v=[],p=[],y=[],S=75500,T=375,x=375,b=100,E=10,A=100,P=10,W=.2,I=100,k=10,M=1,L=70,B=20,D=.5,H=5,G=2,R=25,_=10,C=4,F=4,N=4,O=2,Y=2,K=17,j=30;const z=document.getElementById("game");z.width=window.innerWidth,z.height=window.innerHeight;const $=z.getContext("2d"),q=document.getElementById("perfect"),V=document.getElementById("score"),J=document.getElementById("bestscore"),Q=document.getElementById("shadow-restart"),U=document.getElementById("restart"),X=document.getElementById("tap-help-img");let Z=!0;const tt=new class{#t;#e;#n;#i;#o;constructor(){this.#t=this.#r(n,.2),this.#e=this.#a(i),this.#n=this.#a(i),this.#i=this.#a(o),this.#o=this.#a(o)}#r(t,e){const n=new Audio(t);return n.volume=e,n}#a(t){return this.#r(t,.3)}tapBttnPlay(){this.#t.play()}coinPlay(){this.#i.play()}coin2Play(){this.#o.play()}stcikWooshPlay(){this.#e.play()}fallingPlay(){this.#n.play()}};let et=!1,nt=!1,it=1;function ot(){for(;(v[v.length-1]?.x??0)<window.innerWidth;)dt();for(;(y[y.length-1]?.x??0)<window.innerWidth;)ct()}function rt(){r.getData().then((t=>{l=t?.bestscore??0,J.innerText=a.getString("best")+": "+(l>0?l:"--")})),q.innerText=a.getString("dscore")+" +2",J.innerText=a.getString("best")+": "+(l>0?l:"--"),V.innerText=a.getString("score")+": "+s,setTimeout((()=>{document.getElementById("box-loader").remove(),window.addEventListener("keydown",(function(t){if(" "==t.key)return t.preventDefault(),void(S>75e3&&(c.countPGamesAfterAd>2||c.countingActions>10)?(S=0,c.countPGamesAfterAd=0,c.countingActions=0,e(lt)):lt())})),window.addEventListener("mousedown",(function(t){t.preventDefault(),ht()})),window.addEventListener("mouseup",(function(t){t.preventDefault(),ut()})),X.addEventListener("touchstart",(t=>{t.preventDefault(),ht()})),X.addEventListener("touchend",(t=>{t.preventDefault(),ut()})),z.addEventListener("touchstart",(t=>{t.preventDefault(),ht()})),z.addEventListener("touchend",(t=>{t.preventDefault(),ut()})),U.addEventListener("mousedown",(t=>{t.preventDefault()})),U.addEventListener("mouseup",(t=>{t.preventDefault(),vt()})),U.addEventListener("touchdown",(t=>{t.preventDefault()})),U.addEventListener("touchup",(t=>{t.preventDefault(),vt()}))}),0)}function at(t,e){setTimeout((()=>{e?.()}),t)}function st(){window.innerHeight>window.innerWidth?document.getElementById("container-game").classList.add("porter"):document.getElementById("container-game").classList.remove("porter")}function lt(){for(Q.classList.remove("visible"),Q.classList.add("hide"),g=!0,f=!1,nt=!1,et=!1,gt=0,s=0,V.innerText=a.getString("score")+": "+s,c.countPGamesAfterAd++,m="waiting",d=void 0,w=0,q.style.opacity=0,q.style.marginBottom="110vh",v=[{x:50,w:50}];(v[v.length-1]?.x??0)<window.innerWidth;)dt();for(p=[{x:v[0].x+v[0].w,length:0,rotation:0}],y=[];(y[y.length-1]?.x??0)<window.innerWidth;)ct();h=v[0].x+v[0].w-E,u=0,mt()}function ct(){const t=y[y.length-1];const e=(t?t.x:0)+30+Math.floor(120*Math.random()),n=["#6D8821","#8FAC34","#98B333"][Math.floor(3*Math.random())];y.push({x:e,color:n})}function dt(){const t=v[v.length-1];const e=t.x+t.w+40+Math.floor(160*Math.random());let n=100-10*Math.random()*Math.floor(s/3);const i=20+Math.floor(Math.random()*((n<20?20:n)-20));v.push({x:e,w:i})}function ht(t){g&&!f&&(Z&&(z.width=window.innerWidth,z.height=window.innerHeight,mt(),X.remove(),Z=!1),"waiting"==m&&(d=void 0,m="stretching",window.requestAnimationFrame(wt)))}function ut(t){g&&!f&&"stretching"==m&&(m="turning")}function wt(t){if(!d)return d=t,void window.requestAnimationFrame(wt);switch(m){case"waiting":return;case"stretching":p.last().length+=(t-d)/C;break;case"turning":if(p.last().rotation+=(t-d)/F,p.last().rotation>90){p.last().rotation=90;const[t,e]=ft();t?(c.countingActions++,e?(q.style.opacity=1,q.style.marginBottom=0,tt.coin2Play(),setTimeout((()=>{q.style.opacity=0}),1e3),s+=2):(tt.stcikWooshPlay(),s+=1),V.innerText=a.getString("score")+": "+s,s>l&&(l=s,J.innerText=a.getString("best")+": "+(l>0?l:"--"),r.save({bestscore:l})),dt(),ct(),ct()):tt.stcikWooshPlay(),m="walking"}break;case"walking":{h+=(t-d)/N;const[e]=ft();if(e){const t=e.x+e.w-E;h>t&&(h=t,m="transitioning")}else{const t=p.last().x+p.last().length+K;h>t&&(tt.fallingPlay(),h=t,m="falling")}break}case"transitioning":{w+=(t-d)/O;const[e]=ft();w>e.x+e.w-A&&(p.push({x:e.x+e.w,length:0,rotation:0}),m="waiting");break}case"falling":{p.last().rotation<180?p.last().rotation+=(t-d)/F:p.last().rotation=180,et||(et=!0,setTimeout((()=>{Q.classList.remove("hide"),Q.classList.add("visible"),f=!0}),500)),u+=(t-d)/Y;const e=b+100+(window.innerHeight-x)/2;if(u>e)return void(nt=!0);nt=!1;break}default:throw Error("Wrong phase")}mt(),window.requestAnimationFrame(wt),d=t}window.addEventListener("resize",(function(t){z.width=window.innerWidth,z.height=window.innerHeight,it=.25*Math.floor(z.height*z.width/921600/.25),it=it>3?3:it,st(),ot(),mt(),at(250,mt),at(500,mt)}));let gt=0;function ft(){if(90!=p.last().rotation)throw Error(`Stick is ${p.last().rotation}°`);const t=p.last().x+p.last().length,e=v.find((e=>e.x<t&&t<e.x+e.w));return e&&e.x+e.w/2-P/2<t&&t<e.x+e.w/2+P/2?[e,!0]:[e,!1]}function mt(){var t;$.save(),$.clearRect(0,0,window.innerWidth,window.innerHeight),(t=$.createLinearGradient(0,0,0,window.innerHeight)).addColorStop(0,"#aae2facf"),t.addColorStop(1,"#e3c066fc"),$.fillStyle=t,$.fillRect(0,0,window.innerWidth,window.innerHeight),pt(I,k,M,"#95C629"),pt(L,B,D,"#659F1C"),y.forEach((t=>{return e=t.x,n=t.color,$.save(),$.translate((-w*W+e)*M,function(t,e,n){const i=window.innerHeight-e;return Math.sinus(t)*n+i}(e,I,k)),$.fillStyle="#7D833C",$.fillRect(-G/2,-H,G,H),$.beginPath(),$.moveTo(-_/2,-H),$.lineTo(0,-(H+R)),$.lineTo(_/2,-H),$.fillStyle=n,$.fill(),void $.restore();var e,n})),$.translate((window.innerWidth-T)/2-w,(window.innerHeight-x)/2),v.forEach((({x:t,w:e})=>{$.fillStyle="black",$.fillRect(t,x-b,e,b+(window.innerHeight-x)/2),p.last().x<t&&($.fillStyle="red",$.fillRect(t+e/2-P/2,x-b,P,P))})),!nt&&function(){$.save(),$.fillStyle="black",$.translate(h-K/2,u+x-b-j/2),t=-K/2,e=-j/2,n=K,i=j-4,o=5,$.beginPath(),$.moveTo(t,e+o),$.lineTo(t,e+i-o),$.arcTo(t,e+i,t+o,e+i,o),$.lineTo(t+n-o,e+i),$.arcTo(t+n,e+i,t+n,e+i-o,o),$.lineTo(t+n,e+o),$.arcTo(t+n,e,t+n-o,e,o),$.lineTo(t+o,e),$.arcTo(t,e,t,e+o,o),$.fill();var t,e,n,i,o;const r=5;$.beginPath(),$.arc(r,11.5,3,0,2*Math.PI,!1),$.fill(),$.beginPath(),$.arc(-r,11.5,3,0,2*Math.PI,!1),$.fill(),$.beginPath(),$.fillStyle="white",$.arc(5,-7,3,0,2*Math.PI,!1),$.fill(),$.fillStyle="red",$.fillRect(-K/2-1,-12,K+2,4.5),$.beginPath(),$.moveTo(-9,-14.5),$.lineTo(-17,-18.5),$.lineTo(-14,-8.5),$.fill(),$.beginPath(),$.moveTo(-10,-10.5),$.lineTo(-15,-3.5),$.lineTo(-5,-7),$.fill(),$.restore()}(),p.forEach((t=>{$.save(),$.translate(t.x,x-b),$.rotate(Math.PI/180*t.rotation),$.beginPath(),$.lineWidth=2,$.moveTo(0,0),$.lineTo(0,-t.length),$.stroke(),$.restore()})),$.restore()}function vt(){if(f){tt.tapBttnPlay();const t=()=>{S=0,c.countPGamesAfterAd=0,c.countingActions=0,lt()};S>=75e3&&(c.countPGamesAfterAd>2||c.countingActions>10)?e(t,(()=>{lt()})):lt()}}function pt(t,e,n,i){$.beginPath(),$.moveTo(0,window.innerHeight),$.lineTo(0,yt(0,t,e,n));for(let i=0;i<window.innerWidth;i++)$.lineTo(i,yt(i,t,e,n));$.lineTo(window.innerWidth,window.innerHeight),$.fillStyle=i,$.fill()}function yt(t,e,n,i){const o=window.innerHeight-e;return Math.sinus((w*W+t)*i)*n+o}!function(t,e){if("undefined"==typeof YaGames)return e?.(),void t();YaGames.init().then((n=>{console.log("Yandex SDK initialized"),window.ysdk=n,n.getStorage().then((t=>Object.defineProperty(window,"localStorage",{get:()=>t}))).then((()=>{})),e?.(),t(),n.features.LoadingAPI?.ready()}))}((()=>{a.localizationInit(),rt()}),(function(){X.classList.remove("hide"),function(){g=!0,f=!1,c.countPGamesAfterAd++,m="waiting",d=void 0,w=0,q.style.opacity=0,v=[{x:50,w:50}];for(;(v[v.length-1]?.x??0)<window.innerWidth;)dt();p=[{x:v[0].x+v[0].w,length:0,rotation:0}],y=[];for(;(y[y.length-1]?.x??0)<window.innerWidth;)ct();h=v[0].x+v[0].w-E,u=0,mt()}(),z.width=window.innerWidth,z.height=window.innerHeight,st(),ot(),mt(),setInterval((()=>{S<75e3&&(S+=2e3)}),2e3)}))})();