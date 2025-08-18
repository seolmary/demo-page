/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Media slider (auto + dots)
		(function initMediaSlider() {
			var $slider = $('#media .slider');
			if (!$slider.length) return;
			var $slides = $slider.find('.slide');
			var $dots = $slider.find('.dot');
			var index = 0;
			var intervalMs = parseInt($slider.attr('data-interval'), 10) || 6000;
			var timer;

			function go(to) {
				index = (to + $slides.length) % $slides.length;
				$slides.removeClass('is-active').eq(index).addClass('is-active');
				$dots.removeClass('is-active').eq(index).addClass('is-active');
			}

			function start() {
				stop();
				timer = window.setInterval(function() { go(index + 1); }, intervalMs);
			}

			function stop() {
				if (timer) window.clearInterval(timer);
			}

			$dots.on('click', function() {
				var to = parseInt($(this).attr('data-index'), 10);
				go(to);
				start();
			});

			$slider.on('mouseenter', stop).on('mouseleave', start);
			start();
		})();

})(jQuery);