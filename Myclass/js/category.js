


$(function(){

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcategorytitle',
    success:function(data){
      console.log(data);
      $('.father').html(template('tmp',data));

    
    }

  })
    //第二次渲染
    $('.father ').on('click','.temp',function(e){
      e.preventDefault();
       var id = $(this).data('id');
       console.log(id);
       var $this = $(this)
       $this.next('.sons').toggleClass('hide');
       $.ajax({
         type:'get',
         url:'http://127.0.0.1:9090/api/getcategory',
         data:{
           titleid:id
         },
         success:function(data){
           console.log(data);
           $this.next('.sons').html(template('tmp2',data));
           
         }
       })


     })


})