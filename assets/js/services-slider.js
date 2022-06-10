$(function(){

    var services = new Swiper("#services .slider", {
     spaceBetween: 0,
     slidesPerView: 5,
     centeredSlides: true,
     roundLengths: true,
     loop: true,
     loopAdditionalSlides: 30,
     navigation: {
       nextEl: "#services .swiper-button-next",
       prevEl: "#services .swiper-button-prev",
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
         spaceBetween: 80,
       },
       960: {
         slidesPerView: 3,
         spaceBetween: 60,
       },
       1024: {
         slidesPerView: 5,
       },
     },
   });

   services.on('slideChange', function (e) {
     var i = services.activeIndex,
         c = $('#services'),
         b = c.find('.item').eq(i);
       var color1 = b.attr('data-color-1');
       var color2 = b.attr('data-color-2');
       c.find('.line').css('background-color',color1);
       c.find('.swiper-button-next,.swiper-button-prev').css('color',color1);
       $(':root').css('--active-color', color1);
       $(':root').css('--active-color-two', color2);
   });
   // Title Animation
   gsap.to("#services .title h2:first-child", {
     scrollTrigger: {
       trigger: "#services .title h2:first-child",
       scrub: 0.9,
       ease: "power2",
       opacity:0
     },
     x: "10%"
   });
   gsap.to("#services .title h2:last-child", {
     scrollTrigger: {
       trigger: "#services .title h2:last-child",
       scrub: 0.9,
       ease: "power2"
     },
     x: "250%"
   });
});
