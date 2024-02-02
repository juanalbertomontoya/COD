$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 2) {
    $(".logo-menu a").addClass("scroll");
    $(".logo-menu img").addClass("scroll");
    $(".menu").addClass("scroll");
  } else {
    $(".logo-menu a").removeClass("scroll");
    $(".logo-menu img").removeClass("scroll");
    $(".menu").removeClass("scroll");
  }
});
