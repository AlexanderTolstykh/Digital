;(function($) {
	"use strict";


  // slider

   $(document).ready(function(){
      $('.team-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]
});

    });



   // map
	window.onload = function(){

        var creativ = {lat:-7.9507227, lng:112.5634491};
        var setCenter = {lat: -8.0451539, lng:112.4857492};

        var mapDiv = document.querySelector('#map');

          var map = new google.maps.Map(mapDiv, {
          zoom: 11,
          center: setCenter

        });

          var marker = new google.maps.Marker({
          position: creativ,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'img/map.png'
        });

        google.maps.event.addDomListener(window, 'resize', function(){

      		var center = map.getCenter();
      		google.maps.event.trigger(map, 'resize');
      		map.setCenter(center);

     	});

	};

      // scrollUp

  $('a[href*="#"]').click(function(){  });
 var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    },700);
    return false;
 });

})(jQuery);




