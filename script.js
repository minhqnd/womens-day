$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});

let params = new URLSearchParams(location.search);
var name = params.get('to');

if (name) {
  $('.name').text(name)
}