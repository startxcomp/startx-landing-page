$(function(){
	// Works
	var w = $(window).width(),
			itemWidth = 360;
	if(w < 960){
		itemWidth = w / 2  - 15;
	}
	$("#projects .items").NewWaterfall({
		width: itemWidth,
		// delay: 100
	});
	// Work Load More
  $('#projects .add').click(function(){
		for(var i = 1; i < 2; i ++){
			// https://dummyimage.com/520x360/eee/aaa
			// https://picsum.photos/360/?random
			var w =   Math.floor((Math.random() * 700) + 1);
			var h =   Math.floor((Math.random() * 500) + 1);
			$("#projects .items").append(
				'<li><div><img src="https://dummyimage.com/400x300/eee/aaa"></div></li>'
			);
		}

  })
	// Title Animation
  gsap.to("#projects .title h2:first-child", {
    scrollTrigger: {
      trigger: "#projects .title h2:first-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2",
      opacity:0
    },
    x: "-30%"
  });
  gsap.to("#projects .title h2:last-child", {
    scrollTrigger: {
      trigger: "#projects .title h2:last-child",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
    },
    x: "300%"
  });
});
