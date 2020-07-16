
$(document) .ready(function() {

		$('.js--section-features').waypoints(function(direction) {
				if (direction == "down") {
					$('nav').addClass('sticky');
				} 

				else{
					$('nav').removeClass('sticky');
				}
		});


			$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});
	/*

			var waypoints = $('#handler-first').waypoint(function(direction) {
		  		notify(this.element.id + ' hit 25% from top of window') 
			}, {
		  	offset: '25%'
			})

	*/

	});