const deg = 6;

const hour = document.getElementById("hrs");
const minute = document.getElementById("mins");
const second = document.getElementById("secs");

 function displayDate(){
     let date = new Date();

     let hrs = date.getHours() *30;
     let mins = date.getMinutes() * deg;
     let secs = date.getSeconds() * deg;

     hour.style.transform = `rotateZ(${hrs +(mins/12)}deg)`;

     minute.style.transform = `rotateZ(${mins}deg)`;

     second.style.transform = `rotateZ(${secs}deg)`;
 }

 setInterval(() => {
    let audio = new Audio("clocksound.mp3");
  audio.play();
  displayDate();
 }, 1000);
