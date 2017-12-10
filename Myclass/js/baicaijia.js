
$(function(){
  var titleid =$Tools.getParma('titleid')|| 0;


  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
    success:function(data){
      console.log(data);
      $('.bcj-wrap').html(template('tmp',data));
      
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
      console.log(data);
      $('.bcj-list').html(template('tmp2',data));
    }
  })
})