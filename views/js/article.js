$(function(){
    var url = location.href
    var num = url.substring(url.length-1)
    template.defaults.imports.dateFormat = function (data) {
        var date = new Date(data)
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        var d = date.getDate()
        var hh = date.getHours()
        var mm = date.getMinutes()
        var ss = date.getSeconds()
        return y + '-' + m + '-' + d+' '+hh+':' +mm +':'+ss
      }
    $.ajax({
        methor:'get',
        url:'http://127.0.0.1:3007/getById/'+num,
        success:function(res){
            // 填充内容
            const html = template('content',res[0])
            $('body').html(html)
        }
    })
    $('body').on('click','img', () => {

        history.back()
    })
})