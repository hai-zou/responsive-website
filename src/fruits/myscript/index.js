$(function () {


  //遍历数组，获取到索引，然后赋值给session
  $('.fruitItem').each(function (key) {
    $(this).click(function () {
      sessionStorage.setItem('key', key);
      var index = sessionStorage.getItem('key')
      // console.log(index);

      //点击跳转页面
      window.location.href = "../special.html";

    })
  })


})