import{CountUp}from"../node_modules/countup.js/dist/countUp.js";AOS.init();const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector(".navi-menu");if(hamburger.addEventListener("click",(()=>{hamburger.classList.toggle("active"),navMenu.classList.toggle("active")})),document.querySelector("body").classList.contains("main-page")){let e;const t=(t,o)=>{e||(e=!0,setTimeout((()=>{t(),e=!1}),o))},o=()=>{document.body.scrollTop>80||document.documentElement.scrollTop>80?document.getElementsByClassName("navibar")[0].classList.add("scrolled"):document.getElementsByClassName("navibar")[0].classList.remove("scrolled");let e="",t=n.offsetHeight;r.forEach((o=>{const r=o.offsetTop-2*t;o.clientHeight;scrollY>=r&&(e=o.getAttribute("id"))})),c.forEach((t=>{t.classList.remove("active");const o=t.href.split("#").pop();e==o&&t.classList.add("active")}))};window.addEventListener("scroll",(()=>{t(o,300)})),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({top:-140,behavior:"smooth"})}))}));const r=document.querySelectorAll("div#mp, div#news, div#about-me, div#seym, div#contact"),c=document.querySelectorAll(".navi-menu .navi-item .navi-link");let n=document.querySelector(".navibar");document.querySelectorAll(".navi-link").forEach((e=>e.addEventListener("click",(()=>{hamburger.classList.remove("active"),navMenu.classList.remove("active")}))))}let buttons=document.querySelectorAll(".show-more");buttons.forEach((e=>e.addEventListener("click",(t=>{let o=t.target.closest(".bt").querySelector(".more-text"),r=o.classList.contains("open");o.classList.toggle("open"),"false"!=e.getAttribute("data-change")&&(t.currentTarget.querySelector("span").innerText=r?"POKAŻ WIĘCEJ":"POKAŻ MNIEJ");let c=r?["0 2 13 10","M 1 5 L 1 5 L 5 9 L 9 5 L 5 9"]:["0 -2 13 10","M 1 5 L 1 5 L 5 1 L 9 5 L 5 1"];t.currentTarget.querySelector(".icon").setAttribute("viewBox",c[0]),t.currentTarget.querySelector(".icon path").setAttribute("d",c[1])}))));const numbers=[{id:"speeches",suffix:""},{id:"par-ip",suffix:""},{id:"attd",suffix:"%"}];numbers.forEach((e=>{try{new CountUp(e.id,document.getElementById(e.id).innerHTML,{enableScrollSpy:!0,useEasing:!0,duration:5,scrollSpyOnce:!0,suffix:e.suffix})}catch(e){console.error("Nastąpił problem z ładowaniem cyfr.")}}));
//# sourceMappingURL=script.js.map