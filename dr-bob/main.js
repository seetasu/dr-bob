$(document).ready(function(){

// define tooltipster
	$('.tooltip-left').tooltipster({
		theme:['tooltipster-default','tooltipster-default-customized'],
		interactive: true,
		maxWidth: 500,
		side: 'left',
	});

	$('.tooltip-right').tooltipster({
		theme:['tooltipster-default','tooltipster-default-customized'],
		interactive: true,
		maxWidth: 500,
		side: 'right',
	});

	$('.get-it').click(function(){
		$('.reminder-wrap').fadeOut(1000);
	});

	$(".visualization .pages").hide();
	$('#intro span').addClass("active-menu-title");
	$("#intro").removeClass("border-menu-title");
	$("#info").addClass("border-menu-title");
	$("#control").addClass("border-menu-title");

	$(".menu-right-intro").addClass("active-li");		
	$(".menu-right-info").removeClass("active-li");		
	$(".menu-right-control").removeClass("active-li");

	$(".sidebar-menu").accordion({heightStyle: "content"});
	$(".visualization .pages").hide();
	$(".visualization .info-wrap").hide();
	$(".visualization .panel-wrap").hide();
	$(".intro-line").hide();
	$(".hover-box-container").hide();

	$(".visualization .intro-bg .expand").click(function(){
		$(".intro-integrated-img").animate({
			top:30 
		},1000);
		setTimeout(function(){
			$(".intro-integrated-img").fadeOut(2000);
		},500);
		setTimeout(function(){
			$(".moving-pic").removeClass('hidden');
		},2000);
		setTimeout(function(){
			$(".intro-line").fadeIn(2000);
		},4000);
		setTimeout(function(){
			$(".hover-box-container").show();
		},3000);
		$(".introduction-content").fadeOut(500);	
	});

	$("#intro").click(function(){
		$("#intro span").addClass("active-menu-title");
		$("#info span").removeClass("active-menu-title");
		$("#control span").removeClass("active-menu-title");

		$(".menu-right-intro").addClass("active-li");		
		$(".menu-right-info").removeClass("active-li");		
		$(".menu-right-control").removeClass("active-li");

		$("#intro").removeClass("border-menu-title");
		$("#info").addClass("border-menu-title");
		$("#control").addClass("border-menu-title");

		$(".visualization .intro-wrap").show();
		$(".intro-integrated-img").fadeIn(2000);
		$(".moving-pic").addClass('hidden');
		setTimeout(function(){
			$(".intro-integrated-img").animate({top:-30 },1000);
			$(".introduction-content").fadeIn(2000);	
		},3000);
		$(".visualization .pages").hide();
		$(".visualization .info-wrap").hide();	
		$(".visualization .panel-wrap").hide();	
		$(".hover-box-container").hide();
		$('.reminder-wrap').hide();	
	});

	$("#info").click(function(){
		$("#intro span").removeClass("active-menu-title");
		$("#info span").addClass("active-menu-title");
		$("#control span").removeClass("active-menu-title");

		$(".menu-right-intro").removeClass("active-li");
		$(".menu-right-info").addClass("active-li");		
		$(".menu-right-control").removeClass("active-li");

		$("#intro").addClass("border-menu-title");
		$("#info").removeClass("border-menu-title");
		$("#control").css("border-bottom","1px solid #eaeaea");

		$(".visualization .intro-wrap").hide();				
		$(".visualization .info-wrap").show();	
		$(".visualization .pages").show();	
		$(".visualization .panel-wrap").hide();	
		$(".hover-box-container").show();
		$('.reminder-wrap').hide();	
	});

	$("#control").click(function(){
		$("#intro span").removeClass("active-menu-title");
		$("#info span").removeClass("active-menu-title");
		$("#control span").addClass("active-menu-title");

		$(".menu-right-intro").removeClass("active-li");
		$(".menu-right-info").removeClass("active-li");		
		$(".menu-right-control").addClass("active-li");

		$("#intro").addClass("border-menu-title");
		$("#info").addClass("border-menu-title");
		$("#control").removeClass("border-menu-title");

		$("#control").css("border-bottom","none");	
		$(".visualization .intro-wrap").hide();				
		$(".visualization .pages").hide();
		$(".visualization .info-wrap").hide();		
		$(".visualization .panel-wrap").show();
		$(".hover-box-container").show();
		$('.reminder-wrap').hide();		
	});


	$(".menu-right-intro").click(function(){
		$("#intro").click();
	});
	$(".menu-right-info").click(function(){
		$("#info").click();
	});
	$(".menu-right-control").click(function(){
		$("#control").click();
	});


	$(".menu-inside-intro-info").click(function(){
		$("#info").click();
	});
	$(".menu-inside-intro-control").click(function(){
		$("#control").click();
	});	
});

// define picture slideshow in the Control Panel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active-panel-btn", "");
			}
			slides[slideIndex-1].style.display = "block";
			dots[slideIndex-1].className += " active-panel-btn";
		}