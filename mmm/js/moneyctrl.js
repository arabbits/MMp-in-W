$(function () {

  var pageid = getParam("pageid") || 0;

  var total = 0;
  function render() {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getmoneyctrl",
      data: {
        pageid: pageid
      },
      success: function (data) {
        console.log(data);
        //渲染商品
        $(".product").html(template("productTpl", data));

        //渲染下拉列表
        total = Math.ceil(data.totalCount / data.pagesize);

        var id = getParam("pageid");
        for (var i = 0; i <= total -1; i++) {
          if(i == id){
            $("select").append("<option value=" + i + " selected>" + (i+1) + "/" + total + "</option>");
          }else{
            $("select").append("<option value=" + i + ">" + (i+1) + "/" + total + "</option>");
          }
        }
      }

    })
  }

  render();

  //通过下拉列表控制页面
  $("select").on("change",function(){

    var value = $(":selected").val();
    location.href = "moneyctrl.html?pageid=" + value;

  })
  

  //上一页
  $(".prevpage").click(function () {
    var pageid = $(":selected").val();
    pageid = parseInt(pageid);

    pageid -= 1;
    if (pageid <= 0) {
      pageid = 0;
    }
    $(this).attr("href", "moneyctrl.html?pageid=" + pageid);
  })


  //下一页
  $(".nextpage").click(function () {
    var pageid = $(":selected").val();
    pageid = parseInt(pageid);
    pageid += 1;
    if (pageid >= total) {
      pageid = total-1;
    }
    $(this).attr("href", "moneyctrl.html?pageid=" + pageid);
  })

})
 