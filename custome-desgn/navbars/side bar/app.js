
$(document).ready(function(){
    $('.burger').click(function(){
        $('.burger').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.scroll-nav').toggleClass('active');
    })
})


window.onscroll = function(){scrollFunction()};
  const scrollFunction = () =>{
   
     if(document.body.scrollTop >30 || document.documentElement.scrollTop >20){
        $('.burger').css("display","block");
        $('.overlay').css("display","block");
        $('.scroll-nav').css("display","block");
     }else{
        $('.burger').css("display","none");
        $('.overlay').css("display","none");
        $('.scroll-nav').css("display","none");
     }
   }