/************ Set Current Menu *************/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + 90,

            currentArea = $("section").filter(function () {
                return scroll <= $(this).offset().top + $(this).height();
            });
        $(".nav a").removeClass("selected");
        $(".nav a[href=#" + currentArea.attr("id") + "]").addClass("selected");
    });
});