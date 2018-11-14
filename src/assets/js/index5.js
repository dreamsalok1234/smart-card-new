$(document).ready(function(){
  for(var n = 1; n <=25; n++){    
    $('#box ul').append('<li><span>image '+n+' </span><img src="http://unsplash.it/280/180?image='+n+'"></li>');
  }
  $('#box').mCustomScrollbar({
    theme: "inset",    
    scrollButtons:{ enable: true }   
  });
});