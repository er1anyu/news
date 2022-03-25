$(function(){
  $('ul a').on('click',function(){
      $(this).addClass('current').siblings().removeClass('current')
  })

$('.file').on('click',function(){
  $('#file').click()
})
})