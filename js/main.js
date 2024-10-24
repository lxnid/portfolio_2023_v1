"use strict";

// animate marque with scroll
$(document).ready(function(){
    $(window).on("scroll", function(){
        var introL1 = $('#marque-1');
        var introL2 = $('#marque-2');
        var scrollPosition = $(window).scrollTop();
        if($(window).width() <= 600) {
            introL1.css('transform', 'translateX(' + (scrollPosition * -0.4 + 156.96) + 'px)');
            introL2.css('transform', 'translate(' + (scrollPosition * 0.6 - 293.76) + 'px,-22%)');
        } else {
            introL1.css('transform', 'translateX(' + (scrollPosition * -0.4 + 456.96) + 'px)');
            introL2.css('transform', 'translate(' + (scrollPosition * 0.6 - 293.76) + 'px,-22%)');
        }
    });
});
