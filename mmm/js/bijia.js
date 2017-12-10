$(function () {

  var categoryid = getParam("categoryid");

   //渲染导航栏
  function renderNav() {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getcategorybyid",
      data: {
        categoryid: categoryid
      },
      success: function (data) {
        // console.log(data);
        $(".m-nav li").html(template("navTpl", data));
        var proname = getParam("productname").split(" ")[0];
        // console.log(proname);
        $(".m-nav li").append('<a href="javascript:;">'+proname+' ></a>');        
      }
    })
  }
 
  renderNav();

//1. 导航栏的三级分类没有出来，通过productlist页面的每个商品点击时，a标签跳转可地址栏传值
//2. 或者ajax发送，请求本页面的商品详情回来的值

  var productid = getParam("productid");

  //获取商品详情的ajax
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getproduct",
    data: {
      productid: productid
    },
    success: function(data){
      // console.log(data);
      $(".detail").html(template("detailTpl",data));
    }
  })

  //获取商品评论的数据，渲染页面
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getproductcom",
    data: {
      productid: productid
    },
    success: function(data){
      console.log(data);
      $(".comments ul").html(template("commentTpl",data));
    }
  })

})