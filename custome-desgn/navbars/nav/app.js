const navSlide = () => {
    const navLine = document.querySelector(".three-line");
    const nav = document.querySelector(".nav-links");
    const prevScroll = document.getElementsByTagName("body");

    navLine.addEventListener('click', () =>{
        //toogle nav
        nav.classList.toggle("nav-active");
        prevScroll.style.overflow = "hidden"
        
        // change toggle line style 
        navLine.classList.toggle("toggle");
    });
}
navSlide();

const onScrollSlide = () =>{
    const navLine = document.querySelector(".other");
    const nav = document.querySelector(".nav-links");
    const logo = document.querySelector(".logo");

    navLine.addEventListener('click', () =>{
        //toogle nav
        nav.style.position = "fixed";
        logo.style.display = "none";
        nav.classList.toggle("nav-links-scroll")
        nav.classList.toggle("nav-active");
        
        // change toggle line style 
        navLine.classList.toggle("toggle");
    });
}

onScrollSlide();


window.onscroll = function(){scrollFunction()};
   function scrollFunction(){
    const navLine = document.querySelector(".other");
    const nav = document.querySelector(".nav-links");
     if(document.body.scrollTop >100 || document.documentElement.scrollTop >100){
        navLine.style.display = "block";
     }else{
        // nav.classList.re("nav-links-scroll")
        
        navLine.style.display = "none";
     }
   }