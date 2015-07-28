/************ Collapse Mobile Menu *************/
$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});


/***************** Waypoints ***************** */
$(document).ready(function () {

    $('.waypoint1').waypoint(function () {
        $('.waypoint1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.waypoint2').waypoint(function () {
        $('.waypoint2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.waypoint3').waypoint(function () {
        $('.waypoint3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $('.waypoint4').waypoint(function () {
        $('.waypoint4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.waypoint5').waypoint(function () {
        $('.waypoint5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.waypoint6').waypoint(function () {
        $('.waypoint6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

});


/***************** Smooth Scrolling ******************/

$(function () {

    $('a[href*=#]:not([href=#], div.modal a)').click(function () {
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

$(document).ready(function () {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function () {
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function () {
                $(this).removeClass("hover");
            });
    }
});

/***************** Flexsliders ******************/

$(window).load(function () {
    if (jQuery().flexslider) {
        $('.slider').flexslider({
            animation: "slide",
            directionNav: false,
            controlNav: true,
            touch: false,
            pauseOnHover: true,
            start: function () {
                $.waypoints('refresh');
            }
        });
    }
});

/***************** Modal Carousel ******************/
$(function () {
    $('#gallery a.expand').click(function () {
        $('.carousel-inner').html('');
        var dataModalImgs = $(this).data('modalImages');
        var modalImgs = [];
        if (dataModalImgs == null || dataModalImgs == undefined) {
            modalImgs.push($(this).parent().parent().find('img').attr('src'));
        } else {
            modalImgs = dataModalImgs.split(',');
        }
        $.each(modalImgs, function (index, el) {
            var div=$('<div/>').appendTo($('.carousel-inner')).addClass('item');
            if (index == 0 ) {
                div.addClass('active');
                $('<img/>').appendTo(div).attr('src', el).addClass('img-responsive');
            } else {
                $('<img/>').appendTo(div).attr('data-src', el).addClass('img-responsive');
            }
        });
            
        
        $('#lazycarouselmodal').modal();
    });
});

$(function () {
    $('div.modal').on('show.bs.modal', function (e) {
        var carousel = $(this).find('.carousel').hide(),
            deferreds = [],
            imgs = $('.carousel', this).find('img');
        
        // loop over each img
        imgs.each(function () {
            var self = $(this),
                datasrc = self.attr('data-src');
            
            if (datasrc) {
                var d = $.Deferred();
                self.one('load', d.resolve).attr("src", datasrc).attr('data-src', '');
                deferreds.push(d.promise());
            }
        });

        $.when.apply($, deferreds).done(function () {
            $('#ajaxloader').hide();
            carousel.fadeIn(1000);
        });
    });
});