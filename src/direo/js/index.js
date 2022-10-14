$(function () {
  //导航条
  $('#home nav ul li').click(function () {
    $('#check~ ul').toggleClass('slide')
  })
  $('#home nav .checkbtn').click(function () {
    $('#check~ ul').toggleClass('slide')
  })

  // 4. 导航对应处理
  let allLis = $("#home nav ul li");
  $(allLis[0]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#home").offset().top - 80,
    }, 1000);
  });
  $(allLis[1]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#active").offset().top
    }, 1000);
  });
  $(allLis[2]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#house").offset().top - 80
    }, 1000);
  });
  $(allLis[3]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#thing").offset().top - 80
    }, 1000);
  });
  $(allLis[4]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#place").offset().top - 80
    }, 1000);
  });

  $(window).scroll(function () {
    var wst = $(window).scrollTop();
    var show = $("#active").offset().top
    if (wst >= show) {
      $('#home nav').css({
        backgroundColor: '#000'
      })
    } else {
      $('#home nav').css({
        backgroundColor: ''
      })
    }
  });

  $(window).trigger("resize");

})