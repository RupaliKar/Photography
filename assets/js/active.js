$(document).ready(function(){


   
	$('.view').magnificPopup({
	type: 'image',
	gallery: {
	enabled: true
	},
	});
	  

	
	 ityped.init(document.querySelector(".ityped"), {
      /* showCursor: false, */
      strings: ['Special Moments. ', 'Deep Emotions.', 'Anything About You.'],
	  typeSpeed: 55,
		startDelay: 200,
		backSpeed: 20,
		backDelay: 2000,
		loop: true,
		cursorChar: "|",
		
    });
	$('.active_slide').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	animateIn:'fadeIn',
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


         /* Onepage Active  */    
        $('.onepage_nav').onePageNav({
            currentClass : 'active',
            scrollSpeed : 1000,
            filter: ':not(.url)'
        }); 
		
		
		$('.portfolio_active').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateIn:'fadeIn',
			autoplay:true,
			autoplayTimeout:3000, 
			dots:false,
			responsive:{
				0:{
					items:3
				},
				600:{
					items:3
				},
				1000:{
					items:3
				}
			}
});

$('.active_personal').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			animateIn:'fadeIn',
			dots:true,
			responsive:{
				0:{
					items:3
				},
				600:{
					items:3
				},
				1000:{
					items:3
				}
			}
});


  /* 	 var mixer = mixitup('.work_items');
		 var mixer = mixitup();
		  {
			   animation: {
				duration: 300
			}
		  } */
  
  var mixer = mixitup('.work_items');
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
  
  
  $('.work_btn button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	

 
	
	
	
});	


	
	
		/* Sticky Header */
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 20) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  }); 
  
  
		/* Onepage Active     
        $('.onepage_nav').onePageNav({
            currentClass : 'active',
            scrollSpeed : 1000,
            filter: ':not(.url)'
        }); 
	
	
	
			
$('.active_feature').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	animateIn:'fadeIn',
	navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	
	
		/* Barfiller  
  $('#bar1').barfiller({
		barColor:"tomato",
		
	});
	$('#bar2').barfiller({
		barColor:'tomato'
	});
	$('#bar3').barfiller({
		barColor:'tomato'
	});
	$('#bar4').barfiller({
		barColor:'tomato'
	});
	
		//Counter Up
	$('.counter').counterUp({
		delay: 10,
		time: 1000,
	});
	
		
		/* Work Area Isotope Masonry 
		
		var $grid = $('.project_active').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: 1
		  }
		});		
	
		/* Work Menu Isotope 
		$('.project_menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
			
	   /* Active Js

		$('.project_menu button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	


		/* Work Area Magnific PoPUp Js 
		$('.project_active').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		});

	
	ityped.init(document.querySelector("#ityped"), {
      /* showCursor: false, 
      strings: ['DESIGNER', 'LANDING PAGES', 'ECOMMORECR.'],
	  typeSpeed: 55,
		startDelay: 200,
		backSpeed: 20,
		backDelay: 2000,
		loop: true,
		cursorChar: "|",
		
    });
	
	
	$('.vedio').magnificPopup({
            type: 'iframe',
        });
		

		//Counter Up
	$('.counter').counterUp({
		delay: 10,
		time: 1000,
	});
		
	
	   $(".single_blog").hover3d({
  selector: ".blog_img",
  shine: false,
  sensitivity   : 30,
});

	
});





	//Sticky Header
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 20) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  }); 
  */
 