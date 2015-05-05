$(document).ready(function() {
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-title i').removeClass('fa-minus active');
		$('.accordion .accordion-section-title i').addClass('fa-plus');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}
 	
 	function close_settings_section() {
		$('.accordion .settings-cog').removeClass('active');
		$('.accordion .settings-cog i').removeClass('fa-chevron-up active');
		$('.accordion .settings-cog i').addClass('fa-cog');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
 
		if($(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();
 
			// Add active class to section title
			$('i', this).removeClass('fa-plus');
			$('i', this).addClass('fa-minus active');
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}
 
		e.preventDefault();
	});

	$('.section').on('click', '.settings-cog', function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
 
		if($(e.target).is('.active')) {
			close_settings_section();
		}else {
			close_settings_section();
 
			// Add active class to section title

			$('i', this).removeClass('fa-cog');
			$('i', this).addClass('fa-chevron-up active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
			$(this).addClass('active');
		}
 
		e.preventDefault();
	})
});