$(function(){
  // Slider
  var swiper = new Swiper("#services .slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop:false,
     grabCursor: true,
    centeredSlides:false,
    paginationClickable: true,
    pagination: {
      el: "#services  .swiper-pagination",
      clickable: true,
    },
  });

  // swiper-slide-active




  // const section = $('#services');
  // const w = section.width();
  // const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];


  // Title Animation
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
});
