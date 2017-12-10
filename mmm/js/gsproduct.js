$(function () {

  //渲染导航栏 店铺
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getgsshop",
    success: function (data) {
      console.log(data);
      $(".shop").html(template("shopTpl", data));
    }
  })


  //渲染导航栏 地区
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getgsshoparea",
    success: function (data) {
      console.log(data);
      $(".area").html(template("areaTpl", data));

      //点击显示导航栏的二级菜单
      var mNav = document.querySelector(".m-nav");
      var nexts = mNav.querySelectorAll(".next");

      $(".one").click(function () {
        var index = $(".one").index($(this));
        $(nexts[index]).toggleClass("now").siblings().removeClass("now");

      })
    }
  })


  //页面一进来，就会有一个默认的商品列表渲染出来

  var shopid = 0;
  var areaid = 0;
  renderProduct();



  //选择店铺，渲染对应的商品  
  $(".shop").on("click", "a", function () {
    shopid = $(this).data("shopid");
    areaid = $(".area").attr("areaid")
    $(this).parent().removeClass("now").attr("shopid",shopid);
    //让对应的对号显示
    $(this).find("span").addClass("show").parent().siblings().find("span").removeClass("show");
    $(".one").eq(0).html($(this).text() + "<i></i>");
    console.log(+shopid,+areaid);
    renderProduct();
  })

  //选择地区，渲染对应的商品
  $(".area").on("click", "a", function () {
    areaid = $(this).data("areaid");
    shopid = $(".shop").attr("shopid")
    $(this).parent().removeClass("now").attr("areaid",areaid);

    //让对应的对号显示
    $(this).find("span").addClass("show").parent().siblings().find("span").removeClass("show");
    var str = $(this).text();    
    str = str.substr(0, str.indexOf("（"));
    $(".one").eq(1).html(str + "<i></i>");
    console.log(+shopid,+areaid);
    renderProduct();
  })


  //渲染商品函数
  function renderProduct() {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getgsproduct",
      data: {
        shopid: shopid,
        areaid: areaid
      },
      success: function (data) {
        console.log(data);
        $(".m-product").html(template("productTpl", data));
      }
    })
  }

})