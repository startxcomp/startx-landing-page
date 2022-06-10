var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  // separateDialCode:true,
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
});
window.iti = iti;

var st = $('#startProjectModal');
st.find('.result p').text('Null');
st.find('.send,.prev,.close').hide();
st.find('.icons>li').click(function(){
  var t = $(this),
      i = t.index();

  st.find('.index').text(i);
  st.find('.steps>div').slideUp();
  st.find('.steps>div').eq(i).slideDown();

  st.find('.icons>li').removeClass('active');
  for (let f = 0; f <= i; f++) {
    st.find('.icons>li').eq(f).addClass('active');
  }
  if(i == 0 ){
    st.find('.prev').hide();
  }else{
    st.find('.prev').show();
  }
  if(i < 5 ){
    st.find('.send').hide();
    st.find('.next').show();
  }else{
    st.find('.send').show();
    st.find('.next').hide();
  }

})

$('body').on('click','#startProjectModal .next, #startProjectModal .prev', function(){
  var t = $(this)
      c = t.attr('class'),
      //i = parseInt(st.find('.icons').attr('data-index'));
      i = parseInt(st.find('.index').text());

  var totalEmpty = 0;


  // Input
  st.find('.steps>div').eq(i).find('input[required]').each(function(){
    if($(this).val().length == 0){
      totalEmpty = totalEmpty + 1;
      $(this).addClass('empty');
    }else if($(this).val() == 0){
      totalEmpty = totalEmpty + 1;
      $(this).addClass('empty');
    }else{
      $(this).removeClass('empty');
    }
  })
  // Input
  st.find('.steps>div').eq(i).find('textarea[required]').each(function(){
    if($(this).val().length == 0){
      totalEmpty = totalEmpty + 1;
      $(this).addClass('empty');
    }else{
      $(this).removeClass('empty');
    }
  })






  if(totalEmpty){
    Swal.fire({
      icon: 'info',
      title: 'You left '+totalEmpty+' fields blank',
      text: 'Please fill in the blanks to proceed to the next step.',
      //footer: '<a href="">Why do I have this issue?</a>'
    })
  }else{
    if(c == 'next'){
      i = i + 1;
    }else{
      i = i - 1;
    }
    $('.index').text(i)
    st.find('.icons>li').removeClass('active');
    for (let f = 0; f <= i; f++) {
      st.find('.icons>li').eq(f).addClass('active');
    }

    st.find('.steps>div').slideUp();
    st.find('.steps>div').eq(i).slideDown();


    if(i == 0 ){
      st.find('.prev').hide();
    }else{
      st.find('.prev').show();
    }
    if(i < 5 ){
      st.find('.send').hide();
      st.find('.next').show();
    }else{
      st.find('.send').show();
      st.find('.next').hide();
    }
  }
})

st.find('.steps>div').each(function(){
  var t = $(this),
      i = t.index(),
      v = t.find('.head h3').text();
  st.find('.icons>li').eq(i).find('span').attr('data-tooltip',v);
})

st.find('.send').click(function(){
  // Success
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'We have received your project information, we will contact you as soon as possible.',
    //footer: '<a href="">Why do I have this issue?</a>'
  })
/*
//  Error
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="">Why do I have this issue?</a>'
})
*/

  st.fadeOut();

  // Reset
  var i = 0;
  st.find('.index').text(i);
  st.find('.steps>div').slideUp();
  st.find('.steps>div').eq(i).slideDown();
  st.find('.icons>li').removeClass('active');
  st.find('.icons>li').eq(i).addClass('active');
  st.find('.send,.prev,.close').hide();
  st.find('.next').show();

  st.find('form')[0].reset();
  st.find('.result p').text('Null');
})

var a = st.find('.icons>.active'),
    i = a.index();
st.find('.steps>div').slideUp();
st.find('.steps>div').eq(i).slideDown();

const formatToCurrency = amount => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
//
st.find('input,textarea').change(function(){
  var t = $(this),
      n = t.attr('name'),
      v = t.val();

  if(n=="services"){
    var v = "";
    st.find("input[name='services']").each(function(e){
      if ($(this).is(":checked"))
      {
         v += $(this).val()+', ';
      }
    })
    st.find('.DATA'+n).text(v);
  }else if(n=='budget'  || n == 'equity'){

  }else{
    st.find('.DATA'+n).text(v);
  }

})




//$("input[type='checkbox']").val();
//
const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')
function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  }
  const min = target.min
  const max = target.max
  const val = target.value
  const name = target.name

  target.classList.remove("empty")


  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
  $("#"+name+"Result span").text(val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
  if(name == 'budget'){
    $(".DATAbudget").text('€'+val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
  }else{
    $(".DATAequity").text('%'+val);
  }


}
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
numberInput.addEventListener('input', handleInputChange)




// Click
st.find('.exit').click(function(){
  $('#startProjectModal').fadeOut();
  return false;
});
$('a[href="#startaproject"]').click(function(){
  $('#startProjectModal').fadeIn();
  return false;
});
