import{S as p,a as m,i as l}from"./assets/vendor-9md0t_4N.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".loader"),g=document.querySelector(".gallery");console.log(n);n&&(n.hidden=!0);const d=new p(".gallery-item a",{captionsData:"alt",captionDelay:250});function f(r){const o=L(r);g.insertAdjacentHTML("afterbegin",o),d.refresh()}function h(){g.innerHTML=""}function y(){n.hidden=!1}function w(){n.hidden=!0}function b(r){const{webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:c}=r;return`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${a}"
    />
  </a><div class="stats">
  <p class="img-rates">Likes<span>${e}</span></p>
  <p class="img-rates">Views<span>${t}</span></p>
  <p class="img-rates">Comments<span>${i}</span></p>
  <p class="img-rates">Downloads<span>${c}</span></p></div>
</li>
`}function L(r){return console.log("imgs = ",r),r.map(b).join(`
`)}m.defaults.baseURL="https://pixabay.com";async function v(r,o=1,s=21){const a={key:"49676421-fbb984ce693a0b40b5728e81f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:o};try{const e=await m.get("/api/",{params:a}),{hits:t,totalHits:i,total:c}=e.data;return!t||t.length===0?(l.warning({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"orange",position:"topRight",messageColor:"white",titleColor:"white"}),{hits:[],totalHits:0,total:0}):{hits:t,totalHits:i,total:c}}catch(e){return l.error({title:"Error",message:e.message||"Something went wrong. Please try again later.",color:"red",position:"topRight",messageColor:"white",titleColor:"white"}),{hits:[],totalHits:0,total:0}}finally{w()}}const u=document.querySelector(".form"),S=u.querySelector("button");u.addEventListener("input",r=>{const o=r.currentTarget.elements["search-text"].value.trim();S.disabled=!o});u.addEventListener("submit",async r=>{r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(o){h(),y();try{const{hits:s,totalHits:a}=await v(o);if(!s.length)return;f(s),l.success({title:"✅",message:`Found ${a} images`,position:"topRight",messageColor:"white",titleColor:"white"})}catch(s){l.error({title:"Error",message:s.message||"Something went wrong.",position:"topRight",messageColor:"white",titleColor:"white"})}}});
//# sourceMappingURL=index.js.map
