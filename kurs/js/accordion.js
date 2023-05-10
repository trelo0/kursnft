(function($) {
  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

  $('.accordion a').click(function(j) {
      var dropDown = $(this).closest('li').find('p');

      $(this).closest('.accordion').find('p').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
      } else {
          $(this).closest('.accordion').find('a.active').removeClass('active');
          $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
  });
})(jQuery);

$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  });
  