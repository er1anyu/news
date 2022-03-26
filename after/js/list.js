$(function(){
    addTr()
    function addTr(){
        var htmlStr = ''
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:3007/getArticle',
            success:function(res){
            for(let i = 0 ;i<res.length;i++){
                htmlStr += template('list',res[i])
            }
             console.log(htmlStr);
             $('tbody').html(htmlStr)
            }
        })
    }
    $('table').on('click','button',function(){
        let id = $(this).attr('id')
       $.ajax({
           type:'get',
           url:'http://127.0.0.1:3007/delete/'+id,
           success:function(){
               alert('删除成功！')
               addTr()
           }
       })
    })
})