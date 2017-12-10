$(function () {

  //渲染导航栏
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
    success: function (data) {
      console.log(data);
      $(".m-nav ul").html(template("titleTpl", data));


      //动态设置ul的宽度
      var lis = $(".m-nav ul").children("li");
      var ulWidth = 0;
      lis.each(function () {
        ulWidth += this.clientWidth;//获取盒子实际大小，包括内边距
      })
      console.log(ulWidth);
      $(".m-nav ul").css("width", ulWidth);
      $(".mui-scroll").css("width", ulWidth);

      //给对应titleid的a标签添加now类
      var aS = lis.children("a");
      var titleid = Tools.getParam("titleid") || 0;
      titleid = parseInt(titleid);

      //遍历所有的a，如果titleid 等于data-id的值，说明是对应标题下的内容
      aS.each(function () {
        if (titleid === $(this).data("titleid")) {
          $(this).addClass("now").parent().siblings().find("a").removeClass("now");
        }
      })
    }
  })

  //渲染商品列表
  var titleid = Tools.getParam("titleid") || 0;
  // var titleid = 1;
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
    data: {
      titleid: titleid
    },
    success: function (data) {
      console.log(data);
      $(".m-product").html(template("productTpl", data));
    }
  })
  


  //区域滚动初始化
  mui(".mui-scroll-wrapper").scroll({
    indicators: false,
    scrollY: false,
    scrollX: true,
    bounce: true
  });



})