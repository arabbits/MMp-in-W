$(function () {

  //获取地址栏参数，渲染头部的标题
  var coupontitle = getParam("coupontitle");
  // console.log(coupontitle);
  $(".m-header h3").text(coupontitle + "优惠券");


  //渲染商品列表
  var couponid = getParam("couponid");
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcouponproduct",
    data: {
      couponid: couponid
    },
    success: function (data) {
      console.log(data);
      $(".m-product").html(template("productTpl", data));

      //注册点击事件，让对应的图片蒙层显示
      $(".item").click(function () {

        //屏幕滚动的时候，覆盖层随着屏幕滚动
        $(window).scroll(function () {
          var top = $(window).scrollTop();
          // console.log(top);
          $(".cover").css("top", top);
        })

        //获取点击的item下对应的data-index
        var indexBegin = $(this).data("index");

        //获取点击的商品，对应的图片地址，赋值给覆盖层的img地址
        var src = $(this).find("img").attr("src");
        $(".cover").addClass("now").css("top", top);
        $(".cover img").attr("src", src);
        $(".cover img").data("id", indexBegin);

        $(".cover").off().click(function () {
          $(this).removeClass("now");
        })

        //获取所有的item
        var items = document.querySelectorAll(".item");

        //上一张
        $(".cover").on("click", ".left", function (e) {
          e.stopPropagation();
          var index = $(".cover img").data("id");

          index--;

          if (index <= 0) {
            index = 0;
          }

          var src = $(items[index]).find("img").attr("src");
          $(".cover img").attr("src", src);
          $(".cover img").data("id", index);

          // console.log( $(".cover img").data("id"));
        });

        //下一张
        $(".cover").on("click", ".right", function (e) {
          e.stopPropagation();
          var count = $(".cover img").data("id");

          count++;          

          if (count >= data.result.length - 1) {
            count = data.result.length - 1;
          }


          var src = $(items[count]).find("img").attr("src");
          $(".cover img").attr("src", src);
          $(".cover img").data("id", count);

          // console.log( $(".cover img").data("id"));
        })

      })
    }
  })


})