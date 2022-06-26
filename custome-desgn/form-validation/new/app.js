const names = document.forms["form"]["name"];
const pass = document.forms["form"]["pass"];
const name_error = document.getElementById("name_error");
const pass_error = document.getElementById("pass_error");

const toggle = document.getElementById("toggle");

toggle.addEventListener("click",passShowHide);

function passShowHide(){
    console.log("clicked");
    if(pass.type === "password"){
        pass.setAttribute("type","text");
        toggle.classList.add("fa-eye-slash");
    }else{
        pass.setAttribute("type","password");
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
    }
}

names.addEventListener("textInput", function(){
    if(names.value.length >=6){
        name_error.style.display = "none";
        names.style.border = "1px solid silver";
        return true
    }
});

pass.addEventListener("textInput", function(){
    if(names.value.length >=6){
        pass_error.style.display = "none";
        pass.style.border = "1px solid silver";
        return true
    }
})


function validation(){
    // alert(name.value)
    if(names.value.length < 6){
        names.style.border = "2px solid red";
        name_error.innerHTML = "Name not to be blancked";
        name_error.style.display = "block";
        return false;
    }
    if(pass.value.length < 6){
        pass.style.border = "2px solid red";
        pass_error.innerHTML = "Password not to be blancked";
        pass_error.style.display = "block";
        return false;
    }
    return true;
}