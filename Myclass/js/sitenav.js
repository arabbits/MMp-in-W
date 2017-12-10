


$(function(){

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getsitenav',
    success:function(data){
      console.log(data);
      $('.sit-content').html(template('tmp',data))
    }
  })

})