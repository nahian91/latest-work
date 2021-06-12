(function ($) {
  "use strict";

  let sticky_id = $(".header-area");
  $(window).on("scroll", function () {
    let scroll = win.scrollTop();
    if (scroll < 245) {
      sticky_id.removeClass("sticky-header");
    } else {
      sticky_id.addClass("sticky-header");
    }
  });

  // One Page Nav
  if ($(".header-area").length) {
    var top_offset = $(".header-area").height() - 10;
    $(".header-menu ul").onePageNav({
      currentClass: "active",
      scrollOffset: top_offset,
    });
  }

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("sticky-bar");
    } else {
      $("#header-sticky").addClass("sticky-bar");
    }
  });
  // data background
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ") "
    );
  });

  $('.image-popup').magnificPopup({
    type:'image',
    gallery: {
      enabled: true
    }
  });

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
})(jQuery);
