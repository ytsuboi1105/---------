
//スライダー
$('#pk .slider').slick({
  centerMode: true,
  centerPadding: '29.42%',
  slidesToShow: 1,
	dots: true,
	prevArrow: '<img src="<$mt:BlogRelativeURL$>img/pk/arrow_left.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="<$mt:BlogRelativeURL$>img/pk/arrow_right.png" class="slide-arrow next-arrow">',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        centerPadding: '5.33%'
      }
    }
  ]
});
