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
    $('a.expand[data-modal-images]').click(function () {
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


/***************** Mustache Templates for Modals ***************** */

var template = $('#galeria-template').html();
var slidersLiquida = new Array();

slidersLiquida.push(galleryItem('Sopa de Carne com Lentilha', 'img/liquida/sopa-carne-lentilha-1.jpg', 'img/liquida/sopa-carne-lentilha-1.jpg,img/liquida/sopa-carne-lentilha-2.jpg', 'Deliciosa Sopa de Carne com Lentilha'));
slidersLiquida.push(galleryItem('Caldo de Frango', 'img/liquida/caldo-frango-1.jpg', 'img/liquida/caldo-frango-1.jpg,img/liquida/caldo-frango-2.jpg', 'Delicioso Caldo de Frango'));
slidersLiquida.push(galleryItem('Sopa de Frango com Feijão', 'img/liquida/sopa-frango-feijao-1.jpg', 'img/liquida/sopa-frango-feijao-1.jpg,img/liquida/sopa-frango-feijao-2.jpg', 'Deliciosa Sopa de Frango com Feijão'));

var rendered = Mustache.render(template, {'produtos': slidersLiquida});
$('#produtos-fase-liquida').html(rendered);

var slidersPastosa = new Array();

slidersPastosa.push(galleryItem('Estrogonofe de Carne ', 'img/pastosa/estrogonofe-carne-1.jpg', 'img/pastosa/estrogonofe-carne-1.jpg,img/pastosa/estrogonofe-carne-2.jpg,img/pastosa/estrogonofe-carne-3.jpg', 'Delicioso Estrogonofe carne da fase pastosa'));
slidersPastosa.push(galleryItem('Risoto de bacalhau ', 'img/pastosa/risoto-bacalhau-1.jpg', 'img/pastosa/risoto-bacalhau-1.jpg,img/pastosa/risoto-bacalhau-2.jpg', 'Delicioso Risoto bacalhau da fase pastosa'));
slidersPastosa.push(galleryItem('Escondidinho de Carne ', 'img/pastosa/escondidinho-carne-1.jpg', 'img/pastosa/escondidinho-carne-1.jpg,img/pastosa/escondidinho-carne-2.jpg', 'Delicioso Escondidinho carne da fase pastosa'));
slidersPastosa.push(galleryItem('Lasanha de Carne e beringela ', 'img/pastosa/lasanha-carne-beringela-1.jpg', 'img/pastosa/lasanha-carne-beringela-1.jpg,lasanha-carne-beringela-2.jpg,lasanha-carne-beringela-3.jpg,img/pastosa/lasanha-carne-beringela-4.jpg', 'Delicioso Lasanha carne beringela da fase pastosa'));
slidersPastosa.push(galleryItem('Bobó de Frango ', 'img/pastosa/bobo-frango-1.jpg', 'img/pastosa/bobo-frango-1.jpg,img/pastosa/bobo-frango-2.jpg,img/pastosa/bobo-frango-3.jpg', 'Delicioso Bobo frango da fase pastosa'));
slidersPastosa.push(galleryItem('Lasanha de Frango e abobrinha ', 'img/pastosa/lasanha-frango-abobrinha-1.jpg', 'img/pastosa/lasanha-frango-abobrinha-1.jpg,img/pastosa/lasanha-frango-abobrinha-2.jpg,img/pastosa/lasanha-frango-abobrinha-3.jpg', 'Delicioso Lasanha frango abobrinha da fase pastosa'));
slidersPastosa.push(galleryItem('Escondidinho de Frango ', 'img/pastosa/escondidinho-frango-1.jpg', 'img/pastosa/escondidinho-frango-1.jpg,img/pastosa/escondidinho-frango-2.jpg', 'Delicioso Escondidinho frango da fase pastosa'));
slidersPastosa.push(galleryItem('Risoto de Frango ', 'img/pastosa/risoto-frango-1.jpg', 'img/pastosa/risoto-frango-1.jpg,img/pastosa/risoto-frango-2.jpg,img/pastosa/risoto-frango-3.jpg', 'Delicioso Risoto frango da fase pastosa'));
slidersPastosa.push(galleryItem('Risoto de Carne ', 'img/pastosa/risoto-carne-1.jpg', 'img/pastosa/risoto-carne-1.jpg,img/pastosa/risoto-carne-2.jpg,img/pastosa/risoto-carne-3.jpg', 'Delicioso Risoto carne da fase pastosa'));

var rendered = Mustache.render(template, {'produtos': slidersPastosa});
$('#produtos-fase-pastosa').html(rendered);


function galleryItem(title, image, modalImages, description) {
	return { 
		'title': title,
		'image': image,
		'modal-images': modalImages,
		'description': description
	};
}