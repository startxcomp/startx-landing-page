$(function(){
  // Title Animation
  gsap.to("#howWeWork .title h2:first-child", {
    scrollTrigger: {
      trigger: "#howWeWork .title h2:first-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2",
      opacity:0
    },
    y: "-50%",
    x: "-50%"
  });/*
  gsap.to("#howWeWork .title h2:last-child", {
    scrollTrigger: {
      trigger: "#howWeWork .title h2:last-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    x: "150%"
  });
  */

  $('#howWeWork ul li').click(function(){
    $(this).toggleClass('active');
    $(this).find('.body').slideToggle();
  })
});
