function getParamObj() {
  var search = location.search;
  search = decodeURI(search);
  search = search.slice(1);

  var arr = search.split("&");
  var obj = {};
  arr.forEach(function (e, i) {
    var key = e.split("=")[0];
    var value = e.split("=")[1];
    obj[key] = value;
  })

  return obj;
}

function getParam(productid) {
  var obj = getParamObj();
  return obj[productid];
}


//返回顶部
$(window).scroll(function(){

  var top = $(window).scrollTop();
  // console.log(top);
  if(top >= 150){
    $(".goTop").fadeIn(500);
  }else {
    $(".goTop").fadeOut(500);
  }
})

$(".goTop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },500);
})


//ajax
// function getAjax(option) {
//   var dataType = option.dataType || "json"; 
//   var type = option.type || "get";
//   var url = option.url;
//   var data = option.data;
//   var callBack = option.callBack;

//   $.ajax({
//     dataType: dataType,
//     type: type,
//     url: 'http://127.0.0.1:9090/api/' + url,
//     data: data,
//     success:callBack
//   })
// }

var Tools = {
  //获取地址栏中的参数，返回一个对象
  getParamObj: function () {
    var search = location.search;
    search = decodeURI(search);
    search = search.slice(1);
  
    var arr = search.split("&");
    var obj = {};
    arr.forEach(function (e, i) {
      var key = e.split("=")[0];
      var value = e.split("=")[1];
      obj[key] = value;
    })
  
    return obj;
  },
  
  //获取地址栏参数对象中对应的值
  getParam:function (res) {
    var obj = Tools.getParamObj();
    return obj[res];
  },

  //发送ajax，请求数据
  getAjax: function (option) {
    var dataType = option.dataType || "json"; 
    var type = option.type || "get";
    var url = option.url;
    var data = option.data;
    var callBack = option.callBack;
  
    $.ajax({
      dataType: dataType,
      type: type,
      url: 'http://127.0.0.1:9090/api/' + url,
      data: data,
      success:callBack
    })
  }


}