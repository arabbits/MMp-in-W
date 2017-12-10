

$(function(){

  var productid =  $Tools.getParma('productid');
  console.log(productid);
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data:{
      productid:productid
    },
    success:function(data){
      console.log(data);
      $('.container').html(template('tmp',data));
    }
  })

})