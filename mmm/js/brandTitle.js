$(function () {

  //渲染一级标题的brand
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrandtitle",
    success: function (data) {
      console.log(data);
      $(".m-category").html(template("brandTpl", data));

    }
  })

  //点击一级标题，跳转到对应标题下的品牌列表
  $(".m-category").on("click", ".title", function () {

    var brandtitle = $(this).data("brandtitle");
    brandtitle = brandtitle.substring(0,brandtitle.indexOf("十大品牌"));

    var brandtitleid = $(this).data("brandtitleid");
    location.href = "brand.html?brandtitleid=" + brandtitleid+"&brandtitle="+brandtitle;

  })



})