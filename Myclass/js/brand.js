


$(function(){
  var brandtitleid =$Tools.getParma('brandtitleid');

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbrand',
    data:{
      brandtitleid:brandtitleid
    },
    success:function(data){
      console.log(data);
      $('.brand-tv').html(template('tmp',data));
    }
  })

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbrandproductlist',
    data:{
      brandtitleid:brandtitleid,
      pagesize :4
    },
    success:function(data){
      console.log(data);
      $('.brand-top').html(template('tmp2',data));
      var productid =  $('.brand-top').find('li').eq(0).data('id');
      console.log(productid) ; 
      render(productid);  
    }
  })
  function render(productid){
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{
        productid :productid 
      },
      success:function(data){
        console.log(data);
        $('.brand-bb').html(template('tmp3',data))



        //获取到图片的id地址 上传到评论图片的地址
        var src = $('.brand-top ul').find('li').eq(0).find('img').attr('src');
        var info = $('.brand-top .brand-top-info').find('.top-tit').text();
        console.log(info);
        $('.brand-bb .bb-pic').find('img').attr("src",src);
        $('.brand-bb .bb-info').find('.bb-tit').text(info);
      }
    })
  }
  // render();


})