/*!
 * prettySticky - v1 - 2014-10-26
 * https://github.com/moyamiller/prettySticky
 * Copyright (c) 2014 Moya Miller
 */

$(function () {
    function setClassByScroll() {

        if ($(window).scrollTop() > 100) {
            $('nav').addClass("navScrolling").removeClass("navTop");
            $('img.logo').addClass("logoScrolling").removeClass("logoTop");
            $('div.menu').addClass("menuScrolling").removeClass("menuTop");
        } else if ($(window).scrollTop() < 100) {
            $('nav').addClass("navTop").removeClass("navScrolling");
            $('img.logo').addClass("logoTop").removeClass("logoScrolling");
            $('div.menu').addClass("menuTop").removeClass("menuScrolling");
        }
    }
    $(window).scroll(function () {
        setClassByScroll();
    });
    $(document).ready(
        setClassByScroll()
    );
});