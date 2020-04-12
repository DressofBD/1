// Clouds
$('#Klouds').Klouds({
    layerCount: 4,
    speed: 2,
    cloudColor1: '#92bad2',
    cloudColor2: '#c5e2f7',
    bgColor: '#c5e2f7'
})


//Scripts for Bootstrap Carousel and Animate.css article
  function doAnimations(elems) {
    var animEndEv = "webkitAnimationEnd animationend";
    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }
  var $myCarousel = $("#carouselStart"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");
  $myCarousel.carousel();
  doAnimations($firstAnimatingElems);
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });