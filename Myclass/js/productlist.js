


$(function () {
  var titleid = $Tools.getParma('categoryid');
  var pageid = $Tools.getParma('pageid');
  // console.log(pageid);
  // var total;

  // 第二次渲染
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductlist',
    data: {
      categoryid: titleid,
      pageid: pageid
    },
    success: function (data) {
      console.log(data);
      $('.conters').html(template('tmp2', data))

      //渲染下拉列表
      total = Math.ceil(data.totalCount / data.pagesize);

      var id = $Tools.getParma('pageid');
      console.log(total);
      for (var i = 1; i <= total; i++) {
        if (i == id) {
          $('select').append("<option value=" + i + " selected>" + i + " / " + total + "</option>")
        } else {
          $('select').append("<option value=" + i + ">" + i + " / " + total + "</option>")
        }
      }
    }
  })
  // 第一次渲染 分类id
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorybyid',
    data: {
      categoryid: titleid
    },
    success: function (data) {

      // console.log(data);
      $('.main-head').html(template('tmp', data))
    }
  })

  //通过下拉列表控制页面
  $("select").on('change',function(){
    var value = $(':selected').val();
    console.log(value)
    location.href='productlist.html?categoryid='+titleid+'&pageid='+value+'';
  })

  //上一页
  $('.prev').on('click',function(){
    var value = $(':selected').val();
    value--;
    if(value<=0){
      value=1;
    }
    location.href='productlist.html?categoryid='+titleid+'&pageid='+value+'';
    
  })
  //next
  $('.next').on('click',function(){
    var value = $(':selected').val();
    value++;
    if(value>=total){
      value=total;
    }
    location.href='productlist.html?categoryid='+titleid+'&pageid='+value+'';
    
  })

})