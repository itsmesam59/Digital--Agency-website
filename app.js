$(document).ready(function(){
    //mobile navbar
    const mobile=document.querySelector(".burger-btn");
    const mobilelink = document.querySelector(".nav-menus");

    mobile.addEventListener("click", function(){
        mobile.classList.toggle("is-active");
        mobilelink.classList.toggle("active");
    });

    // class menu on mobile when clicking
    mobilelink.addEventListener("click",function(){
        const menuBars = document.querySelector(".is-active");
        if (window.innerWidth<=768 && menuBars) {
            mobile.classList.toggle("is-active");
            mobilelink.classList.toggle("active");
        }
    })
})