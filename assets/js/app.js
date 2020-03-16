// Initialise FlexSlider for Carousels
$(window).load(function () {
  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: true,
    slideshowSpeed: 5000,
    animationSpeed: 600,
    pauseText: 'Pause',
    playText: 'Play',
    keyboard: true,
    touch: true
  });
});
