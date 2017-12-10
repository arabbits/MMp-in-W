


// $(function(window){
  
    var $Tools =  {
      getParmaObj:function(){
        var search = location.search;
        // console.log(search);
        // 对汉字代码解析
        search = decodeURI(search);
        // ?categoryid=0&category=电视&pageid=1
        search = search.slice(1);
        // console.log(search);
        // 去掉问号//把字符串切割成一个数组
        var search = search.split('&');
        // console.log(search)
        var obj = {};
        $(search).each(function(i,el){
          var k = el.split('=')[0];
          var v = el.split('=')[1];
          obj[k] = v;
        })
        return obj;    
      },
      getParma:function(key){
        
        var obj = this.getParmaObj();
        return obj[key];
      }
      
    }
    //window.$Tools = $Tools;// 向外暴露 Tools 的引用 想象没卵用
  // })(window);