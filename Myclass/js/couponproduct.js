


$(function(){

  var couponid = $Tools.getParma('couponid');

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    data:{
      couponid:couponid
    },
    success:function(data){
      console.log(data);
      $('.content').html(template("tmp",data))
    }
  })
})