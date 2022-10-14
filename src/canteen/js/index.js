/**
 Made By 旋之华(www.it666.com)
 */
$(function () {

    // 4. 导航处理
    let allLis = $("#zh_header nav ul li");
    $(allLis[1]).on("click", function () {
        $("html,body").animate({
            scrollTop: $("#welcome").offset().top
        }, 1000);
    });
    $(allLis[2]).on("click", function () {
        $("html,body").animate({
            scrollTop: $("#banner-text").offset().top
        }, 1000);
    });
    $(allLis[3]).on("click", function () {
        $("html,body").animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    });
    $(allLis[4]).on("click", function () {
        $("html,body").animate({
            scrollTop: $("#people").offset().top
        }, 1000);
    });

    $(window).trigger("resize");
});