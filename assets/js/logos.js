$(function(){
  // Ttile Effect
  gsap.to("#logosHead .title h2:first-child", {
    scrollTrigger: {
      trigger: "#logosHead .title h2:first-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2",
      opacity:0
    },
    y: " 0%",
    x: "-50%"
  });
  gsap.to("#logosHead .title h2:last-child", {
    scrollTrigger: {
      trigger: "#logosHead .title h2:last-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    x: "50%"
  });
  // logos Slider
  $('#logos .box').each(function(){
    var t = $(this),
        c = t.attr('class').replace('box','').replace(' ',''),
        cn = "#logos ."+c+" .items";
    if(c == "two"){
      t.scrollLeft(t.find('.items').width())
      var xVal = "50%";
    }else{
      var xVal = "-50%";
    }
    gsap.to(cn, {
      scrollTrigger: {
        trigger: cn,
        scrub: 0.5,

        ease: "power2",
        opacity:0
      },
      x:xVal
    });
  })
})
