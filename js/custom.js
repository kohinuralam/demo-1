
jQuery(document).ready(function(
	) {

	// Scroll to start
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '300px'}, 1000);
		return false;
	});

	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

// Scroll to end

//jquery for toggle sub menus
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.dropdown').toggleClass('rotate');
     });

     //jquery for expand and collapse the sidebar
     $('.menu-btn').click(function(){
       $('.side-bar').addClass('active');
       $('.menu-btn').css("visibility", "");
     });

     $('.close-btn').click(function(){
       $('.side-bar').removeClass('active');
       $('.menu-btn').css("visibility", "visible");
     });

    // carousel-1
	$("#owl-csel1").owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 3000,
		startPosition: 0,
		rtl: false,
		loop: true,
		margin: 15,
		dots: true,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content1 .custom-nav',
		responsive:{
			0: {
				items: 1,
									
			},
			767: {
				items: 2,

			},
			991: {
				items: 3,		
					
			},
			1199: {
				items: 4,		
					
			},
			1200: {
				items: 4,

			}
		}

	});

//accordion
$('.ziehharmonika').ziehharmonika({
			collapsible: true,
			prefix: ''
		});













//main
});