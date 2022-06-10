$(function(){
  // Background Animation
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
});
