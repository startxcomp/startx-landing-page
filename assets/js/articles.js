$(function(){
  // slider
  var swiper = new Swiper("#articles .mySwiper", {
     spaceBetween: 30,
     centeredSlides:true,
     loop:true,
     pagination: {
       el: "#articles .swiper-pagination",
     },
     navigation: {
       nextEl: "#articles .swiper-button-next",
       prevEl: "#articles .swiper-button-prev",
     },
     breakpoints: {
       640: {
         slidesPerView: 1,
         spaceBetween: 20,
       },
       1024: {
         slidesPerView: 3,
         spaceBetween: 50,
       },
     },
   });
   // Title Animation
   gsap.to("#articles .title h2:first-child", {
     scrollTrigger: {
       trigger: "#articles .title h2:first-child",
       scrub: 0.5,
       start: "top bottom",
       end: "bottom -300%",
       ease: "power2",
       opacity:0
     },
     x: "-60%"
   });
   gsap.to("#articles .title h2:last-child", {
     scrollTrigger: {
       trigger: "#articles .title h2:last-child",
       scrub: 0.5,
       start: "top bottom",
       end: "bottom -300%",
     },
     x: "10%"
   });
});
