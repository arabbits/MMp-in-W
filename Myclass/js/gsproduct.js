$(function(){

  // 渲染第一个
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getgsshop',
    success:function(data){
      console.log(data);
      $('.jd-select').html(template("tmp2",data));
    }
  });

  // 京东下拉框显示
  $('.shit0').on('click',function(){
    $('.jd-select').toggleClass("on");
  })
  // huabei-select
// 华北下拉框显示
  $('.shit1').on('click',function(){
    $('.huabei-select').toggleClass("on");
  })
// 全部价格下拉框显示
  $('.shit2').on('click',function(){
    $('.all-select').toggleClass("on");
  })
  // 点击全部价格的下拉框是 让其隐藏
  $('.all li').on('click',function(){
    $(this).toggleClass('on');
    $('.all-select').removeClass("on");
  })


  // 第二次渲染
  function render(){
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getgsshoparea',
      success:function(data){
        console.log(data);
        $('.huabei-select').html(template("tmp",data));
      }
    });
  }
  render()
 // 第三次渲染 封装一下
  function renderone(shopid,areaid){
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getgsproduct',
      data:{
        shopid :shopid||0,
        areaid :areaid||0
      },
      success:function(data){
        console.log(data);
        $('.gsproduct-list').html(template("tmp3",data));
      }
    })
  }
  renderone();
  // 定义两个值
  // var shopid;


  // 点击京东下拉框是 获取shopid 重新渲染页面
  $('.jd-select').on('click','li',function(){
    $(this).toggleClass('on').siblings().removeClass('on').parents('.jd-select').removeClass('on');
    var shopid=$(this).data("shopid");
    // console.log(shopid)
    renderone(shopid);
  })

  // 点击华北下拉框是 获取areaid 重新渲染页面
  $('.huabei-select').on('click','li',function(){
    $(this).toggleClass('on').siblings().removeClass('on').parents('.huabei-select').removeClass('on');
    var areaid = $(this).data('areaid');
    // console.log(areaid)
    renderone(areaid);
  })
  
})