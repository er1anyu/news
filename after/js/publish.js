$(function(){
 //ajax请求


  $('main form').on('submit',function(e){
    e.preventDefault()
    let fd = new FormData($('main form')[0])
    $.ajax({
        type:'POST',
        url:'http://127.0.0.1:3007/publish',
        data:fd,
        contentType:false,
        processData:false,
        success:function(res){
          console.log(res);
        }
        
    })

  })

  //结尾
})