var slider = $('.container');
$(document).ready(function(){
var autoSlide = setInterval(function(){
		$("#carousel ul").animate({marginLeft:"-100%"},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},8000);
  function slideRight() {
    slider.animate({marginLeft:"-100%"},700,function(){
      $('.container ul li:first-child').insertAfter('.container ul li:last-child');
      slider.css({marginLeft:""});
    });
  }
  function slideLeft() {
    slider.animate({marginLeft:"0"},700,function(){
      $('.container ul li:last-child').insertBefore('.container ul li:first-child');
      slider.css({marginLeft:"-100%"});
    });
  }
  $("#btn-before").click(function (e) {
    e.preventDefault();
    slideLeft();
  });
  $("#btn-after").click (function (e) {
    e.preventDefault();
    slideRight();
  });
});
