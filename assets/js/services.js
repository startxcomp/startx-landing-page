$(function(){
  // Slider
  $.fn.services = function() {
    var container   = $(this),
        button      = container.find('.navigation'),
        active      = 0,
        items        = container.find('.items'),
        item        = container.find('.item'),
        total       = item.length,
        center      = items.position().left,
        color       = "red",
        itemWidth   = item.width();

    container.css({
      'min-height':container.height()
    });
    // Write Function
    function write(){
      container.find('.total').text(total);
      container.find('.active').text(active);
      container.find('.left').text(center);
    }
    write();
    // Data Write
    item.each(function(){
      var t = $(this),
          l = t.position().left,
          i = t.index();
      t.attr('data-index',i);
      t.attr('data-left',l);
      t.css("z-index",i);
    })
    // Animate Function
    function next(){
      $('.items>div:nth('+active+')').animate({
        marginLeft : "-"+itemWidth
      }, 1000);
    }
    function prev(){
      var s = itemWidth,
          i = active  ;
      for (let i = total; i > active; i--) {
         $('.items>div:nth('+i+')').animate({
          marginLeft : "0px"
        }, 1000);
      }

    }
    // Button Action
    button.click(function(){
      var t = $(this),
          c = t.attr('class').replace(" navigation","");
      if(c=="next"){
        if(active != total){
          active = active + 1;
        }
        next();
      }else{
        if(active != 0){
          active = active - 1;
        }
        prev();
      }
      var box = $('.items>div:nth('+active+')>div');
      var color1 = box.attr('data-color-1');
      var color2 = box.attr('data-color-2');
      container.find('.line').css('background-color',color1);
      $(':root').css('--active-color', color1);
      $(':root').css('--active-color-two', color2);
      write();
    })


  }


  $('#services').services();





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
