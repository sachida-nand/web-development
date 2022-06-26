const statusBtn = document.getElementById('order_in_mobile');
statusBtn.addEventListener('click', function() {
	document.getElementById('ss').classList.toggle('active');
	var icon = document.getElementById('icon');
	if (icon.classList.contains('fa-angle-up')) {
		icon.classList.remove('fa-angle-up');
		icon.classList.add('fa-angle-down');
	} else {
		icon.classList.add('fa-angle-up');
	}
});
