$(function(){

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//   markers: false,
// })

$('#menu .mobile').click(function(){
  $('#menu .mobileBox').slideToggle();
})

// Menu Link Created
let menus = [];
$('#menu li').each(function(){
  var link = $(this).find('a').attr('href');
  menus.push(link);
})





function scroll(){
  var $height = $(window).scrollTop();
  if($height > 50) {
		$('#menu').addClass('active');
	} else {
		$('#menu').removeClass('active');
	}
  if($('#popup .result').scrollTop() > 80) {
		$('#popup').addClass('active');
	} else {
		$('#popup').removeClass('active');
	}

  var fixedBar = $('#menu').height() + 85;
  var services = $('#howWeWork').offset().top - fixedBar;
  var rippleBox = $('#howWeWork .rippleBox').offset().top  - 250;
  if($height > services &&  $height < rippleBox ) {
		$('#services').addClass('active');
	} else {
		$('#services').removeClass('active');
	}
  $('section').each(function(){
    var t = $(this),
        p = t.position().top;
    t.attr('data-top',p);
    if(p < $height){

    }
  })

  if($('#services.active').hasClass('active')){
    $('#services .items .item').each(function(){
      var t = $(this)
          b = t.children(),
          c = b.attr('data-color-1');
      b.css({
        backgroundColor:c,
        color:'white'
      });
      b.find('a').css({
        color:'white'
      });
    })
  }else{
    $('#services .items .item>div').css({
      backgroundColor:'white',
      color:'black'
    });
    $('#services .items .item a').css({
      color:'black'
    });
  }
}

$(window).scroll(function(){
  scroll();

  var services = $("#services").offset().top - $('#menu').height()  ;
  var footer = $("#contact").offset().top - 10;
  var position = $(document).scrollTop();
  if(services <= position){
   //$("#services").addClass('active');
  }
  if(footer <= position){
    $("#menu").addClass('footer');
  }else{
    $("#menu").removeClass('footer');
  }
});

$('.accordion li').click(function(){
  var t = $(this),
      c = t.attr('class');
  t.toggleClass('active');
  t.find('div').slideToggle();
})


});
