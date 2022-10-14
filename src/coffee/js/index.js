$(function () {

  // 4. 导航对应处理
  let allLis = $("header nav ul li");
  $(allLis[0]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#banner").offset().top,
    }, 1000);
  });
  $(allLis[1]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#team").offset().top - 80
    }, 1000);
  });
  $(allLis[2]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#services").offset().top - 80
    }, 1000);
  });
  $(allLis[3]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#gallery").offset().top - 80
    }, 1000);
  });
  $(allLis[4]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#contact").offset().top - 80
    }, 1000);
  });

  $(window).trigger("resize");

})