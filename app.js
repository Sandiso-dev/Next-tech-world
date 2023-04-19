const menuBtn = document.querySelector(".bar-container");
const activeMenu = document.querySelector(".navbar__menu");
const body = document.querySelector("body");

menuBtn.addEventListener('click',function(){
   activeMenu.style.opacity = '0';
});


