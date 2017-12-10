$(function(){

  function render(){
    //渲染商品
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getindexmenu',
      success:function(data){
        console.log(data);
        $('.row').html(template("tmp",data));
      }
    });
    //渲染折扣商品
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getmoneyctrl',
      success:function(data){
        console.log(data);
        $(".product-list").html(template("tmp2",data));
      }
    })

  }
  render();

  // var $lastFour;
  $('.row').on('click','.fash',function(){
    var $lastFour = $('.row').children('.menu-item:nth-last-child(-n+4)')
    // $(this).siblings().removeClass('hide');
    $lastFour.toggleClass("hide");
  })


})