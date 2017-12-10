$(function(){

  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcoupon",
    success: function(data){
      console.log(data);
      $(".m-title ul").html(template("titleTpl",data));
    }
  })


})