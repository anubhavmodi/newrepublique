$(document).ready(function(){
	$(this).scrollTop(0);
	window.addEventListener("scroll", scrollContainer);
    scrollContainer();
	$('.gallery').slick({
			vertical: true,
		    dots: true,
		    infinite: false
		})
		.on("mousewheel", function (event) {
			var scrollTop = $(window).scrollTop();
			if (scrollTop ===0 && (event.deltaX > 0 || event.deltaY < 0)) {
				if($(".slick-slide.slick-active").next(".slick-slide").length === 0) {
				  return;
				}

				event.preventDefault();
				$(this).slickNext();
			} else if (scrollTop ===0 && (event.deltaX < 0 || event.deltaY > 0)){
				if($(".slick-slide.slick-active").prev(".slick-slide").length === 0) {
				  return;
				}
				
				event.preventDefault();
				$(this).slickPrev();
		  }
	});

	$(".menu-bar-icon").on('click', function(){
		$(".menu-item-mobile").toggleClass("display-block");
	});
});

function scrollContainer() {
    $(".animation-type").not('.animated').each(function(i) {
		var animationBox = this.getBoundingClientRect();
		var windowHeight = window.innerHeight;
		var isVisible = (animationBox.bottom - 50 > 0) && (animationBox.top - windowHeight + 50 < 0);
        if (isVisible) {
            var element = $(this);
            var animationLeftRight = element.attr('data-animation-type')
            element.addClass("img-animation");
            element.addClass('animated').addClass(animationLeftRight);
            setTimeout(function(){
                element.addClass('animated');
            },2500);
            i++;
        }
    });
}