$(function() {
	/* Intro */
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	

	/* Features */
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/* Experience */
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeIn');
		$('.skills-bar-container').addClass('animated fadeIn');
        $('.wp3-1').addClass('progress1-delay');
        $('.wp3-2').addClass('progress2-delay');
        $('.wp3-3').addClass('progress3-delay');
        $('.wp3-4').addClass('progress4-delay');
        $('.wp3-5').addClass('progress5-delay');
	}, {
		offset: '50%'
	});

	/* Resume Button */
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated bounceIn');
	}, {
		offset: '75%'
	});

	/* Portfolio */
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/* Paper Plane */
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});


	// for preloader
	$(document).ready(function() {
		var counter = 0;
	  
		// Start the changing images
		setInterval(function() {
		  if(counter == 9) { 
			counter = 0; 
		  }
	  
		  changeImage(counter);
		  counter++;
		}, 3000);
	  
		// Set the percentage off
		loading();
	  });
	  
	  function changeImage(counter) {
		var images = [
		  '<i class="fa fa-fighter-jet"></i>',
		  '<i class="fa fa-gamepad"></i>',
		  '<i class="fa fa-headphones"></i>',
		  '<i class="fa fa-cubes"></i>',
		  '<i class="fa fa-paw"></i>',
		  '<i class="fa fa-rocket"></i>',
		  '<i class="fa fa-ticket"></i>',
		  '<i class="fa fa-pie-chart"></i>',
		  '<i class="fa fa-codepen"></i>'
		];
	  
		$(".loader .image").html(""+ images[counter] +"");
	  }
	  
	  function loading(){
		var num = 0;
	  
		for(i=0; i<=100; i++) {
		  setTimeout(function() { 
			$('.loader span').html(num+'%');
	  
			if(num == 100) {
			  loading();
			}
			num++;
		  },i*120);
		};
	  
	  }
	// setTimeout(function(){
	// 	$('body').addClass('loaded');
	// }, 2800);

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            // $(".navbar").addClass("navbar-shadow");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            // $(".navbar").removeClass("navbar-shadow");
        }
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $("#to-top").mouseover(function() {
        $("#to-top-copy").animate({opacity: "1"}, "slow");
    });
    $("#to-top").mouseout(function() {
        $("#to-top-copy").animate({opacity: "0"}, "slow");
    });

});
