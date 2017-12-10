$(function () {

  //地址栏中获取参数
  var brandtitleid = getParam("brandtitleid");
  var brandtitle = getParam("brandtitle");

  //设置m-hot的内容
  $(".tip1").text(brandtitle + "哪个牌子好？");
  $(".tip2").text(brandtitle + "产品销量排行");
  $(".tip3").text(brandtitle + "最新评论");

  //发送ajax，渲染十大品牌列表
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrand",
    data: {
      brandtitleid: brandtitleid
    },
    success: function (data) {
      console.log(data);
      $(".m-category").html(template("contentTpl", data));

      var category = document.querySelector(".m-category");
      var ranks = category.querySelectorAll(".rank");

      //给序号为1，2，3的rank设置背景色
      for (var i = 0; i <= ranks.length - 1; i++) {
        if (i == 0) {
          ranks[i].style.backgroundColor = "red";
        } else if (i == 1) {
          ranks[i].style.backgroundColor = "orange";
        } else if (i == 2) {
          ranks[i].style.backgroundColor = "#8adf5b";
        } else {
          ranks[i].style.backgroundColor = "#c9c9c9";
        }
      }
    }
  })

  // var productid = 0;

  //渲染品牌的销量列表
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrandproductlist",
    data: {
      brandtitleid: brandtitleid,
      // pagesize: 4
    },
    success: function (data) {
      console.log(data);
      $('.m-sales .product').html(template("productTpl", data));
      // $(".m-newcomments .product").html(template("productwrapTpl", data.result[0]));
      // var img = data.result[0].productImg;
      // var productname = data.result[0].productName;
      // $(".m-newcomments .imgWrap").html(img);
      // $(".m-newcomments .info").text(productname);

      var productid = $(".m-sales .product").find(".item").eq(0).data("productid");
      console.log(productid);

      renderComment(productid);

    }
  })


  //渲染评论
  function renderComment(productid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getproductcom",
      data: {
        productid: productid
      },
      success: function (info) {
        console.log(info);
        $(".m-newcomments .product").html(template("commentTpl", info));

        var items = $('.m-sales .item');
        var src = items.eq(0).find("img").attr("src");
        var info = items.eq(0).find(".info").text();
        $(".m-newcomments .imgWrap").find("img").attr("src",src);
        $(".m-newcomments .info").text(info);
        console.log(src,info);
        
        
      }
    })
  }






})