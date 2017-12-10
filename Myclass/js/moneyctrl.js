


$(function(){
  var pageid = $Tools.getParma('pageid')||1;
  $.ajax({
    type:'get',
    data:{
      pageid:pageid-1
    },
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    success:function(data){
      console.log(data);
      // var l =data.result[0].productComCount
      // console.log(l);
      // var num = l.slice(1,2)
      // console.log(num);
      $('.money ul').html(template("tmp",data));

      total = Math.floor(data.totalCount / data.pagesize);
      console.log(pageid);
      for(var i = 1 ;i<= total; i++){
        if(i == pageid){
          $('select').append('<option value='+i+' selected>'+i+'/'+total+'</option>');
        }else{
          $('select').append('<option value='+i+' >'+i+'/'+total+'</option>');
          
        }
      }

    }
  })

  //改变下拉框 刷新页面
  $('select').on('change',function(){
    // console.log('呵呵');
    var value = $(':selected').val();
    location.href = 'moneyctrl.html?pageid='+value+'';
  })
  $('.prev').on('click',function(){
    // console.log('呵呵');
    pageid--;
    if(pageid<=0){
      pageid=1;
    }
    // var value = $(':selected').val();
    location.href = 'moneyctrl.html?pageid='+pageid+'';
  })
  $('.next').on('click',function(){
    // console.log('呵呵');
    pageid++;
    if(pageid>total){
      pageid=total;
    }
    // var value = $(':selected').val();
    location.href = 'moneyctrl.html?pageid='+pageid+'';
  })

})