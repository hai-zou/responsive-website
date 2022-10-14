$(function () {
  var index = true;
  $(".header-top-three-ul").click(function () {
    if (index == true) {
      index = false;
      $(".header-top-three-ul>li").css("border", "1px solid #F97816");
      $(".header-top-four").stop(true, true).slideDown(100);
    } else {
      index = true;
      $(".header-top-three-ul>li").css("border", "1px solid #8A8A8A");
      $(".header-top-four").stop(true, true).slideUp(100);
    }
  });

  // $('#myTabs a').click(function (e) {
  //   e.preventDefault()
  //   $(this).tab('show')
  // })
})