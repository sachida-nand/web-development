function Clock(){
    const dTime = document.getElementById("time");
    const dDate = document.getElementById("date");
 
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    
    var date = new Date();
    
    let day = date.getDay();
    let month = date.getMonth();
    let ddate = date.getDate();
    let year = date.getFullYear();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let dayNIGHT = "AM";

    // let ap = "AM";

    if(hours > 12){
        dayNIGHT = "PM";
        hours = hours - 12;
    }

    if(hours < 10){
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(seconds < 10){
        seconds = "0"+seconds;
    }
    
    dDate.textContent = days[day] +", " + months[month]+" " + ddate +", "+ year; 
    dTime.textContent = hours +":"+minutes+":"+seconds +" " +dayNIGHT; 
}

setInterval("Clock()",1);

