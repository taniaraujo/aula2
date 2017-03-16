/*$(document).ready(function() {
    $('.btn').on('click', function(){
    $('.list li').addClass('active')
    })
})*/

/*$(document).ready (function (){
    $('.list li'). on ('click', function (){
    $(this).addClass('active')
    })
    
})*/

$(document).ready(function (){
  $('.btn').on('click', function(){
/*  $(this).text('hello')*/
      $('.list li').fadeToggle()
  })
})
