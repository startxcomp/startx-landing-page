$(function(){
  // Title Animation
  gsap.to("#company .title h2:first-child", {
    scrollTrigger: {
      trigger: "#company .title h2:first-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2",
      opacity:0
    },
    x: "-100%"
  });
  gsap.to("#company .title h2:last-child", {
    scrollTrigger: {
      trigger: "#company .title h2:last-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    x: "50%"
  });
  // Image Effect
  gsap.to("#company .image span", {
    scrollTrigger: {
      trigger: "#company .image span",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -400%",
      ease: "power2"
    },
    y: "200px",
    x: "-200px"
  });
  gsap.to("#company img", {
    scrollTrigger: {
      trigger: "#company img",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -400%",
      ease: "power2"
    },
    y: "200px",
    x: "-200px"
  });
});
