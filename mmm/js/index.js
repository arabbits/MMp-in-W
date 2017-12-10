$(function () {

  //点击显示更多菜单栏导航
  $(".m-nav").on("click", ".more", function () {
    $(".m-nav li.displayNone").toggleClass("now");
  })

  //菜单栏的ajax
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getindexmenu",
    success: function (data) {
      console.log(data);
      $(".m-nav ul").html(template("menuTpl", data));
    }
  })

  //获取商品的ajax
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getmoneyctrl",
    success: function (data) {
      console.log(data);
      $(".productList").html(template("productTpl", data));
    }
  })


})