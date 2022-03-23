$(function () {
    //轮播图特效
    //插入首位元素
    let current = 1
    $('nav ul').prepend($('nav ul  li').eq(4).clone(true))
    $('nav ul').append($('nav ul li').eq(1).clone(true))
    $('nav ul').css('left', -9.5 * current + 'rem')

    let  timer = setInterval(function(){
        $('nav ul').stop().animate({
            left:'-9.5'*current+'rem'
        })
        changeBar(current-1)
       current++
        if(current==6) current=1   
    },5000)
    let startX = 0
    let x = 0
    let moveX = 0
    let half = 0
    $('nav ul').on('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        x = this.offsetLeft
    })

    $('nav ul').on('touchmove', function (e) {
        clearInterval(timer)
        moveX = e.targetTouches[0].pageX - startX
        half = $(this).innerWidth() * 0.4
        $(this).css('left', x + moveX + 'px')
        e.preventDefault()
    })

    $('nav ul').on('touchend', function (e) {
     timer = setInterval(function(){
            $('nav ul').stop().animate({
                left:'-9.5'*current+'rem'
            })
            changeBar(current-1)
           current++
            if(current==6) current=1
        },5000)
        if (Math.abs(moveX)>half ) {
            if (moveX<0) {
  
                changeBar(current)
                current++
                $(this).stop().animate({
                    left:'-9.5'*current+'rem'
                },function(){
                    if(current==6){
                        current=1
                        $(this).css('left',-9.5*current+'rem')
                    }
                })
            }else{
                console.log('current'+current);
                changeBar(current-2)
                current--
                $(this).stop().animate({
                    left:'-9.5'*current+'rem'
                },function(){
                    if(current==0){
                        current=5
                        $(this).css('left',-9.5*current+'rem')
                    }
                })
            } 
        }else{
            $(this).stop().animate({
                left:'-9.5'*current+'rem'
            })
        }
    }
    )

    function changeBar(current){
        $('.bar li').eq(current).addClass('current').siblings().removeClass('current')
    }




    //为文章绑定点击事件
    $('article li').on('click',function(){
        location.assign('article.html')
    })





    //页脚代码
        $('footer ul li').eq(0).on('click',function(){
           $(this).children('img').prop('src','images/首页_填充.png') 
           $(this).children('span').css('color','#1296DB')

           $(this).parent().children('li').eq(1).children('img').prop('src','images/应用中心.png') 
           $(this).parent().children('li').eq(1).children('span').css('color','black')
        })
        $('footer ul li').eq(0).click()

        $('footer ul li').eq(1).on('click',function(){
            $(this).children('img').prop('src','images/分类.png') 
            $(this).children('span').css('color','#1296DB')
 
            $(this).parent().children('li').eq(0).children('img').prop('src','images/首页.png') 
            $(this).parent().children('li').eq(0).children('span').css('color','black')
         })
    //结尾
})