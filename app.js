const humburger = document.querySelector(".hamburger");
let navBar = document.querySelector(".nav-bar");

humburger.addEventListener('click',function(){
    navBar.classList.toggle("active");
})


