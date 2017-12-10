$(function () {

  //获取地址栏中的参数
  var categoryid = getParam("categoryid") || 0;
  var pageid = getParam("pageid") || 1;

  //发送ajax，渲染商品列表
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getproductlist",
    data: {
      pageid: pageid,
      categoryid: categoryid
    },
    success: function (data) {
      console.log(data);
      $(".product").html(template("productTpl", data));

      //渲染下拉列表
      total = Math.floor(data.totalCount / data.pagesize);

      var id = getParam("pageid");
      for (var i = 1; i <= total; i++) {
        if (i == id) {
          $("select").append("<option value=" + i + " selected>" + i + "/" + total + "</option>");
        } else {
          $("select").append("<option value=" + i + ">" + i + "/" + total + "</option>");
        }
      }
    }
  })

  //渲染导航栏
  function renderNav() {
    $.ajax({
      type: "get",
      url: "http://192.168.191.1:9090/api/getcategorybyid",
      data: {
        categoryid: categoryid
      },
      success: function (data) {
        console.log(data);
        $(".m-nav li").html(template("navTpl", data));
      }
    })
  }

  renderNav();

  //通过下拉列表控制页面
  $("select").on("change", function () {

    var value = $(":selected").val();
    location.href = "productlist.html?categoryid=" + categoryid + "&pageid=" + value;

  })

  //上一页
  $(".prevpage").click(function () {
    var pageid = $(":selected").val();
    pageid = parseInt(pageid);

    pageid -= 1;
    if (pageid <= 0) {
      pageid = 1;
    }
    location.href = "productlist.html?categoryid=" + categoryid + "&pageid=" + pageid;
    // $(this).attr("href", "productlist.html?categoryid=" + categoryid + "&pageid=" + value);
  })


  //下一页
  $(".nextpage").click(function () {
    var pageid = $(":selected").val();
    pageid = parseInt(pageid);

    pageid += 1;
    if (pageid >= total) {
      pageid = total;
    }

    location.href = "productlist.html?categoryid=" + categoryid + "&pageid=" + pageid;
    // $(this).attr("href", "productlist.html?categoryid=" + categoryid + "&pageid=" + value);
  })


})