// navbar toggle
const burgerToggle = document.querySelector('.burger');
burgerToggle.addEventListener('click', function() {
	const navbar = document.querySelector('.second-nav');
	navbar.classList.toggle('active');
});

// tuncate word after 50 character
document.querySelectorAll('.p_name').forEach((element) => {
	if (element.innerHTML.length > 30) {
		text = element.innerHTML;
		element.innerHTML = text.substring(0, 30) + '...';
	}
});

// decription and review section hide and show
function showHide(classes, links) {
	if ($('.tab-items').hasClass('active')) {
		$('.tab-items').removeClass('active');
		$('.item_links').removeClass('active');
	}
	$('.' + classes).addClass('active');
	$('.' + links).addClass('active');
}

// quenty decrease and increase
$(document).ready(function() {
	var selling_price = parseFloat($('.selling_pricee').html());
	$('#sub_total_value').html(selling_price + '.00');
	$('.decrease').click(function() {
		var value = $('.quenty_value').val();
		if (value != 1) {
			$('.quenty_value').val(value - 1);
			$('#sub_total_value').html(selling_price * (value - 1) + '.00');
		}
	});

	$('.increase').click(function() {
		var value = parseInt($('.quenty_value').val());
		$('.quenty_value').val(value + 1);
		$('#sub_total_value').html(selling_price * (value + 1) + '.00');
	});

	$('.quenty_value').change(function() {
		var value = parseInt($('.quenty_value').val());

		if (value < 1 || isNaN(value)) {
			// alert("cant se 0 value")
			$('.quenty_value').val(1);
		} else {
			$('#sub_total_value').html(selling_price * value + '.00');
		}
	});
});

// swiper js code
function swiperJs(clasName) {
	var swiper = new Swiper(clasName, {
		spaceBetween: 25,
		// slidesPerGroup: 5,
		// loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		breakpoints: {
			'@0.00': {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerGroup: 1
			},
			'@0.75': {
				slidesPerView: 3,
				slidesPerGroup: 2
			},
			'@1.50': {
				slidesPerView: 4,
				slidesPerGroup: 3
			},
			'@2': {
				slidesPerView: 6,
				slidesPerGroup: 5
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
}
swiperJs('.mySwiper');
swiperJs('.mySwiperr');
