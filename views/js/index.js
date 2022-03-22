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
    //结尾
})