$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $(".navbar");
        // var sec = $('.sec')
        if ($(window).scrollTop() >= ($(navbar).height() - 39)) {
            if (!navbar.hasClass("scrolled")) {
                navbar.addClass("scrolled");
            }
        } else{
            navbar.removeClass("scrolled");
        }
    })
    // Deal With Tabs
    $('.tab-switch li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        $(".tabs-section .tabs-content > div").hide();
        $($(this).data('class')).show()
        
    })
})

// let navbar = document.querySelector(".navbar");

// window.onscroll = function () {
//     if (window.pageYOffset >= navbar.clientHeight) {
//         if (!navbar.classList.contains('scrolled')) {
//             navbar.classList.add("scrolled");
//         }
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// }