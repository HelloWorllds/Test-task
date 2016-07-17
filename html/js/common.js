$(document).ready(function() {

	// Start MICROSOFT Nav

	$(".main-menu>li>a").click(function () {
		var li = $(this).parent(),
			subMenu = li.find(".sub-menu");
		li.toggleClass("opened");
		subMenu.stop().slideToggle(300)

		var close = function(e){
			if(!$(e.target).closest(li).length){
				subMenu.removeClass("opened").hide();
				li.removeClass("opened");
				$(document).unbind("click", close)
			}
		}

		$(document).bind("click", close)
	});

	$(".small-screen .search-container").click(function() {
		$(".search-wrapper").slideToggle(300);
		$(".small-screen .search-container").removeClass("opened").eq($(this).index()).addClass("opened");
	});

	$(".small-main-menu>li>a").click(function () {
		var li = $(this).parent(),
			subMenu = li.find(".small-sub-menu");
		li.toggleClass("opened");
		subMenu.stop().slideToggle(300)

		var close = function(e){
			if(!$(e.target).closest(li).length){
				subMenu.removeClass("opened").hide();
				li.removeClass("opened");
				$(document).unbind("click", close)
			}
		}

		$(document).bind("click", close)
	});

	$(".small-sub-menu>li>a").click(function () {
		var li = $(this).parent(),
			subMenu = li.find(".small-sub-sub-menu");
		li.toggleClass("opened");
		subMenu.stop().slideToggle(300)

		var close = function(e){
			if(!$(e.target).closest(li).length){
				subMenu.removeClass("opened").hide();
				li.removeClass("opened");
				$(document).unbind("click", close)
			}
		}

		$(document).bind("click", close)
	});
	
	$(".menu-button").click(function() {
		$(".small-main-menu").toggle(
	        function() {
	            $("#slide").hide("slide", { direction: "right" }, 1000); 
	        }, 
	        function() { 
	            $("#slide").show("slide", { direction: "right" }, 500); 
	        } 
	    );

	    $(".small-main-menu").height(Math.max($(".small-main-menu").height(), $("body").height()));
	});

	//End MICROSOFT Nav

	//Start Dropbox hero

	function heroResize() {
		var height = $(window).height() * 0.74,
			width = $(window).width();

		$(".hero").css("min-height", height);

		if (width <= 1440 && width > 481) {
			var height = $(window).height() - 50;
			$(".hero").css("min-height", height);
		}
	};

	heroResize();

	$(window).resize(function() {
		heroResize()
	});

	//End Dropbox hero
});

$(".main-menu>li .sub-menu>li").hover(
function(){
	var subMenu = $(this).find(".sub-sub-menu");
	var height = Math.max(subMenu.height(), $(this).parent().height());
	if(height){
		$(this).closest(".sub-menu").height(height);
		subMenu.height(height);
	} 
},
function(){
	var subMenu = $(this).find(".sub-sub-menu");
	$(this).closest(".sub-menu").height("auto");
});
