$(function(){
  function scroll(){
    var $height = $(window).scrollTop();
    if($height > 50) {
  		$('#menu').addClass('active');
  	} else {
  		$('#menu').removeClass('active');
  	}
  }

  $(window).scroll(function(){
    scroll();

   var services = $("#services").offset().top - 200;
   var position = $(document).scrollTop();
   if(services <= position){
     //$("#services").addClass('active');
   }
   $('.scroll').text(position + ' ' + services)


  });

// Services Slider
var services = $('#services'),
    service = services.find('.item'),
    serviceActive = 0;
services.attr('data-active',serviceActive);
service.each(function(){
  var t = $(this),
      i = t.index(),
      p = t.position(),
      l = p.left;
  t.attr('data-index',i)
  t.attr('data-position',l)
})

$('body').on('click','#services .item',function(){

      $('#services .item').each(function(){
        var t = $(this),
            i = t.index(),
            p = t.position(),
            l = p.left;

            t.animate({
              marginLeft:  l - 460  ,
            },500)
      })

})
var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
/*

$(document).ready(function () {
    var $horizontal = $('#horizontal');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $horizontal.width()));

        $horizontal.css({
            'left': position
        });
    });
});
*/


  gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true,
})
  gsap.to("#services .title h2:first-child", {
    scrollTrigger: {
      trigger: "#services .title h2:first-child",
      scrub: 0.5,

      ease: "power2",
      opacity:0
    },
    x: "-50%"
  });
  gsap.to("#services .title h2:last-child", {
    scrollTrigger: {
      trigger: "#services .title h2:last-child",
      scrub: 0.5,

      ease: "power2"
    },
    x: "50%"
  });
  gsap.to("#welcome .left", {
    scrollTrigger: {
      trigger: "#welcome .left",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    x: "-100%"
  });
  gsap.to("#welcome .right", {
    scrollTrigger: {
      trigger: "#welcome .right",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    x: "100%"
  });
  gsap.to("#welcome .bottom", {
    scrollTrigger: {
      trigger: "#welcome .bottom",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    y: -300
  });


})
