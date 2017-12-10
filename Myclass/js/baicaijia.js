
$(function(){
  var titleid =$Tools.getParma('titleid')|| 0;


  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
    success:function(data){
      console.log(data);
      $('.bcj-wrap').html(template('tmp',data));
      


      var lis = $('.bcj-wrap ul').children('li');
      console.log(lis);
      //动态设置ul 的宽度
      var ulWidth = 0;
      var id = $Tools.getParma('titleid')|| 0;
      lis.each(function(){
        ulWidth += this.clientWidth; 
        //给li添加active的类 点击的时候
        if($(this).data('titleid') ==id){
          $(this).addClass("active").siblings().removeClass('active');
        }
      })
      console.log(ulWidth);
      //重新给ul设置宽度
      var x = $('.bcj-nav .icon-search').width(); //加上search的宽度 不然覆盖
      // 获取不到
      ulWidth+=x;
      // $('.bcj-nav .icon-search').width
      $('.bcj-wrap ul').css('width',ulWidth);
      $('.bcj-wrap').css('width',ulWidth);
    }
  })

  //第二次渲染

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
    data:{
      titleid:titleid
    },
    success:function(data){
      // console.log(data);
      $('.bcj-list').html(template('tmp2',data));
    }
  })

  //区域滚动初始化
  mui(".mui-scroll-wrapper").scroll({
    indicators: false,
    scrollY: false,
    scrollX: true,
    bounce: true
  });
})