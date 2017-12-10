$(function(){

    var productid = $Tools.getParma('productid');
    var category = $Tools.getParma('brandName');
    console.log(productid)
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproduct',
      data:{
        productid:productid 
      },
      success:function(data){
        // console.log(data);

        $('.product-bijia').html(template('tmp',data))
        // 
      }
    })

    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{
        productid:productid
      },
      success:function(data){
        console.log(data);

        $('.biji-commit ul').html(template('tmp2',data))
      }
    })


    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getcategorybyid',
      data:{
        categoryid:productid
      },
      success:function(data){
        console.log(data);
        $('.main-head').html(template('tmp3',data))
        $('.product-cate').html(category);
      }
    })
})