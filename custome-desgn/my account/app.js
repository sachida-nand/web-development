// navbar toggle
const burgerToggle = document.querySelector('.burger');
burgerToggle.addEventListener('click', function() {
	const navbar = document.querySelector('.second-nav');
	navbar.classList.toggle('active');
});


document.getElementById('sign').addEventListener('click',function(){
    var dd = document.querySelector('.submenu');
    dd.classList.toggle('active')
})