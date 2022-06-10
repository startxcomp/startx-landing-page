$(function(){
    $('body').on('click','.popupMore',function(){
      var t = $(this),
          l = t.attr('href');

      $( "#popup .result" ).load( l, function() {
        $('#popup').fadeIn();
      });
      return false;
    })
    $('body').on('click','#popup .exit',function(){
      $( "#popup" ).fadeOut();
      $( "#popup .result" ).text('');
    })
})
