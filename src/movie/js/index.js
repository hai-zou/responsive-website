$(function () {


  // 首页下拉
  $('#home i').click(function () {
    $("html,body").animate({
      scrollTop: $("#about").offset().top - 80
    }, 1000);
  })




  //导航条固定设置
  $(window).scroll(function () {
    let Top = $('#zh_header').offset().top
    let scrollTop = $(document).scrollTop()
    if (scrollTop >= Top) {
      $('nav').css({
        position: 'fixed'
      })
      $('#about').css({
        marginTop: '80px'
      })
    } else {
      $('nav').css({
        position: 'relative'
      })
      $('#about').css({
        marginTop: '0'
      })
    }
  })



  // 4. 导航对应处理
  let allLis = $("#zh_header nav ul li");
  $(allLis[0]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#home").offset().top,
    }, 1000);
  });
  $(allLis[1]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#about").offset().top - 80
    }, 1000);
  });
  $(allLis[2]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#team").offset().top - 80
    }, 1000);
  });
  $(allLis[3]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#works").offset().top - 140
    }, 1000);
  });
  $(allLis[4]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#news").offset().top - 140
    }, 1000);
  });

  $(window).trigger("resize");

  $('#zh_header nav ul li').click(function () {
    $('#check~ul').toggleClass('slide')
  })
  $('#zh_header nav .checkbtn').click(function () {
    $('#check~ul').toggleClass('slide')
  })



  // 选项卡动画
  $('.jq22').filterizr();

  // 切换类
  $('#works li').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });

});