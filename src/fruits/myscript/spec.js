$(function () {

  //获取session中存储的key
  var index = sessionStorage.getItem("key")
  // console.log(index)

  //定义一个数组存放json数据
  var fruitDate = []
  $.ajax({
    type: "get",
    url: "../fruits.json",
    data: "data",
    dataType: "json",
    async: false, //使用同步
    success: function (response) {
      // console.log(response);
      fruitDate = response
    }

  })

  //将数据渲染到页面上
  $('.item h4').text(fruitDate[index].title)
  $('.item h6 span').text("时间：" + fruitDate[index].time)
  $('.item .tag1').text(fruitDate[index].tag[0])
  $('.item .tag2').text(fruitDate[index].tag[1])
  $('.item .tag3').text(fruitDate[index].tag[2])
  $('.item p').text(fruitDate[index].content)
  $(".item img").attr('src', fruitDate[index].imgUrl);
})