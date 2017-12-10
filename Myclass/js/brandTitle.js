
$(function(){
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbrandtitle',
    success:function(data){
      console.log(data);
      $('.father').html(template('tmp',data));
    }
  })
  

})

