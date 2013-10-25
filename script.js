$(function(){
  var position = 0;
  $(window).keyup(function(event){
    if(event.keyCode === 37){
      if(position !== 0){
        position -= 1;
      }
    }else{
      position += 1;
    }
    $('section').hide();
    $('section[data-slide-id=' + position + ']').show();
  });
});