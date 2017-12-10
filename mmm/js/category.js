$(function () {

  //渲染一级标题
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorytitle",
    success: function (data) {
      // console.log(data);
      $(".m-category ul").html(template("titleTpl", data));


      //点击标题，发送ajax，显示内容
      $(".m-category").on("click", ".title", function () {
        var titleid = $(this).data("id");
        renderContent(titleid);
        $(this).next().addClass("contentshow").parent().siblings().find(".content").removeClass("contentshow");
        $(this).next().stop(true).delay(50).slideToggle();
      })

    }
  })


  function renderContent(titleid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getcategory",
      data: {
        titleid: titleid
      },
      success: function (data) {
        console.log(data);
        $(".contentshow").html(template("contentTpl", data));
      }
    })
  }

  // function renderContent() {
  //   getAjax({
  //     type: "get",
  //     url: "http://127.0.0.1:9090/api/getcategory",
  //     data: {

  //     }
  //   })
  // }




})