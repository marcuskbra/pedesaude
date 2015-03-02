/************ Collapse Mobile Menu *************/
$(document).ready(function() {
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});
});


/************ Set Current Menu *************/
$(function() {
    $(window).scroll(function() {
    	var scroll = $(window).scrollTop() + 90;
    	var currentArea = $("section").filter(function() {
    		return scroll <= $(this).offset().top + $(this).height();
    	});
    	$(".nav a").removeClass("selected");
    	$(".nav a[href=#" + currentArea.attr("id") + "]").addClass("selected");
    });
});

/** *************** Waypoints ***************** */
$(document).ready(function() {
	
	$('.waypoint1').waypoint(function() {
		$('.waypoint1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.waypoint2').waypoint(function() {
		$('.waypoint2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.waypoint3').waypoint(function() {
		$('.waypoint3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.waypoint4').waypoint(function() {
		$('.waypoint4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.waypoint5').waypoint(function() {
		$('.waypoint5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.waypoint6').waypoint(function() {
		$('.waypoint6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});


/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#portfolioSlider2').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

