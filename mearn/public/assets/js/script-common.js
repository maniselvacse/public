(function() {
	if (typeof _bsa !== 'undefined' && _bsa) {
		_bsa.init('flexbar', 'CKYI627U', 'placement:w3layoutscom');
	}

	if (typeof _bsa !== 'undefined' && _bsa) {
		_bsa.init('fancybar', 'CKYDL2JN', 'placement:demo');
	}
	if (typeof _bsa !== 'undefined' && _bsa) {
		_bsa.init('stickybox', 'CKYI653J', 'placement:w3layoutscom');
	}
})();

window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("movetop").style.display = "block";
	} else {
		document.getElementById("movetop").style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

gtag('js', new Date());
gtag('config', 'G-98H8KRKT85');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction()
};

$(function() {
	$('.navbar-toggler').click(function() {
		$('body').toggleClass('noscroll');
	})
});

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		stagePadding: 20,
		margin: 15,
		nav: false,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
});

$('.counter').countUp();