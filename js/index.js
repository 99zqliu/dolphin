$(document).ready(function(){
  var sub=$('#sub');
  var activeRow;
  var activeMenu;
  $('.allmenu')
  .on('mouseenter',function(e){
    sub.removeClass('none')
  })
  .on('mouseleave',function(e){
    sub.addClass('none')
    if (activeRow){
    activeRow.removeClass('active2')
    activeRow=null;
    }
    if(activeMenu){
      activeMenu.addClass('none')
      activeMenu=null;
    }
  })
  .on('mouseenter','li',function(e){
    if(!activeRow){
      activeRow=$(e.currentTarget).addClass('active2')
      activeMenu=$('#'+activeRow.data('id'))
      activeMenu.removeClass('none')
      return
    }
    activeRow.removeClass('active2')
    activeMenu.addClass('none')
    
    activeRow=$(e.currentTarget)
    activeRow.addClass('active2')
    activeMenu=$('#'+activeRow.data('id'))
    activeMenu.removeClass('none')
  });




$('.goos1-nav .vl li').on('click',function(){
  //alert($(this).attr('id'));
  $(this).removeClass('gg').addClass('bg').siblings().removeClass('bg').addClass('gg');
});
$('.pictures #pic1').hover(function(){
  $('.pictures #pic1 a').css('display','block');
},function(){
  $('.pictures #pic1 a').css('display','none')
});
$('.pictures #pic1').hover(function(){
  $('.pictures #pic1 img').css('display','none');
},function(){
  $('.pictures #pic1 img').css('display','block')
});
$('.pictures #pic2').hover(function(){
  $('.pictures #pic2 a').css('display','block');
},function(){
  $('.pictures #pic2 a').css('display','none')
});
$('.pictures #pic2').hover(function(){
  $('.pictures #pic2 img').css('display','none');
},function(){
  $('.pictures #pic2 img').css('display','block')
});
$('.pictures #pic3').hover(function(){
  $('.pictures #pic3 a').css('display','block');
},function(){
  $('.pictures #pic3 a').css('display','none')
});
$('.pictures #pic3').hover(function(){
  $('.pictures #pic3 img').css('display','none');
},function(){
  $('.pictures #pic3 img').css('display','block')
});
$('.pictures #pic4').hover(function(){
  $('.pictures #pic4 a').css('display','block');
},function(){
  $('.pictures #pic4 a').css('display','none')
});
$('.pictures #pic4').hover(function(){
  $('.pictures #pic4 img').css('display','none');
},function(){
  $('.pictures #pic4 img').css('display','block')
});
$('.pictures #pic5').hover(function(){
  $('.pictures #pic5 a').css('display','block');
},function(){
  $('.pictures #pic5 a').css('display','none')
});
$('.pictures #pic5').hover(function(){
  $('.pictures #pic5 img').css('display','none');
},function(){
  $('.pictures #pic5 img').css('display','block')
});
$('.pictures #pic6').hover(function(){
  $('.pictures #pic6 a').css('display','block');
},function(){
  $('.pictures #pic6 a').css('display','none')
});
$('.pictures #pic6').hover(function(){
  $('.pictures #pic6 img').css('display','none');
},function(){
  $('.pictures #pic6 img').css('display','block')
});
$('.pictures #pic7').hover(function(){
  $('.pictures #pic7 a').css('display','block');
},function(){
  $('.pictures #pic7 a').css('display','none')
});
$('.pictures #pic7').hover(function(){
  $('.pictures #pic7 img').css('display','none');
},function(){
  $('.pictures #pic7 img').css('display','block')
});
$('.pictures #pic8').hover(function(){
  $('.pictures #pic8 a').css('display','block');
},function(){
  $('.pictures #pic8 a').css('display','none')
});
$('.pictures #pic8').hover(function(){
  $('.pictures #pic8 img').css('display','none');
},function(){
  $('.pictures #pic8 img').css('display','block')
});
$('.pictures #pic9').hover(function(){
  $('.pictures #pic9 a').css('display','block');
},function(){
  $('.pictures #pic9 a').css('display','none')
});
$('.pictures #pic9').hover(function(){
  $('.pictures #pic9 img').css('display','none');
},function(){
  $('.pictures #pic9 img').css('display','block')
});
$('.pictures #pic10').hover(function(){
  $('.pictures #pic10 a').css('display','block');
},function(){
  $('.pictures #pic10 a').css('display','none')
});
$('.pictures #pic10').hover(function(){
  $('.pictures #pic10 img').css('display','none');
},function(){
  $('.pictures #pic10 img').css('display','block')
});
$('.pictures #pic11').hover(function(){
  $('.pictures #pic11 a').css('display','block');
},function(){
  $('.pictures #pic11 a').css('display','none')
});
$('.pictures #pic11').hover(function(){
  $('.pictures #pic11 img').css('display','none');
},function(){
  $('.pictures #pic11 img').css('display','block')
});
$('.pictures #pic12').hover(function(){
  $('.pictures #pic12 a').css('display','block');
},function(){
  $('.pictures #pic12 a').css('display','none')
});
$('.pictures #pic12').hover(function(){
  $('.pictures #pic12 img').css('display','none');
},function(){
  $('.pictures #pic12 img').css('display','block')
});
$('.pictures #pic13').hover(function(){
  $('.pictures #pic13 a').css('display','block');
},function(){
  $('.pictures #pic13 a').css('display','none')
});
$('.pictures #pic13').hover(function(){
  $('.pictures #pic13 img').css('display','none');
},function(){
  $('.pictures #pic13 img').css('display','block')
});
$('.pictures #pic14').hover(function(){
  $('.pictures #pic14 a').css('display','block');
},function(){
  $('.pictures #pic14 a').css('display','none')
});
$('.pictures #pic14').hover(function(){
  $('.pictures #pic14 img').css('display','none');
},function(){
  $('.pictures #pic14 img').css('display','block')
});
$('.pictures #pic15').hover(function(){
  $('.pictures #pic15 a').css('display','block');
},function(){
  $('.pictures #pic15 a').css('display','none')
});
$('.pictures #pic15').hover(function(){
  $('.pictures #pic15 img').css('display','none');
},function(){
  $('.pictures #pic15 img').css('display','block')
});
$('.pictures #pic16').hover(function(){
  $('.pictures #pic16 a').css('display','block');
},function(){
  $('.pictures #pic16 a').css('display','none')
});
$('.pictures #pic16').hover(function(){
  $('.pictures #pic16 img').css('display','none');
},function(){
  $('.pictures #pic16 img').css('display','block')
});
$('.pictures #pic17').hover(function(){
  $('.pictures #pic17 a').css('display','block');
},function(){
  $('.pictures #pic17 a').css('display','none')
});
$('.pictures #pic17').hover(function(){
  $('.pictures #pic17 img').css('display','none');
},function(){
  $('.pictures #pic17 img').css('display','block')
});
$('.pictures #pic18').hover(function(){
  $('.pictures #pic18 a').css('display','block');
},function(){
  $('.pictures #pic18 a').css('display','none')
});
$('.pictures #pic18').hover(function(){
  $('.pictures #pic18 img').css('display','none');
},function(){
  $('.pictures #pic18 img').css('display','block')
});
$('#goods5-title1').on('click',function(){
  //alert($(this).attr('id'));
  $('#sweety').removeClass('none').addClass('active').siblings('.active').removeClass('active').addClass('none');
});
$('#goods5-title2').on('click',function(){
  //alert($(this).attr('id'));
  $('#slim').removeClass('none').addClass('active').siblings('.active').removeClass('active').addClass('none');
});
$('img').mouseover(function(){
 $(this).addClass('shake');
});
$('img').mouseleave(function(){
  $(this).removeClass('shake');
 });
});

