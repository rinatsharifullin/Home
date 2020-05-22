
/* This function provide waiting time till content loaded */

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('#navigation').slideToggle();
    });
	
	var $doc = $(document),
    $win = $(window),
    $svg = $('#sticky svg').drawsvg();
    max = $doc.height() - $win.height();
	// $svg.drawsvg('animate');
	
	$win.on('scroll', function() {
		var p = $win.scrollTop() / max;
		$svg.drawsvg('progress', p);
		$('.container').css('bottom', 10 - p*50 + '%');	//Bring arrows down
		
		//Calculate position of top window from 0 to 10 for arrow
        var position =Math.round( (10/ ($(document).height() - $(window).height()))*$(document).scrollTop());
        //If position over 2, show arrow
        if (position > 2){
            $('.fa-arrow-up').css('right', 30+'px')          //Show arrow
        }else{
            $('.fa-arrow-up').css('right', -50+'px')         //Hide arrow
        }
	});
	$('#rinat').rippleEffect();
	// $('#sticky').ripples({});

	$(".chevron").click(function() {
		$('html, body').animate({
			scrollTop: $("footer div").offset().top
		}, 5000);
	});
	// Set up arrow for transition
	$('.fa-arrow-up').css({ 'position': 'fixed', 'right': -50 +'px', 'bottom': 30+'px', 'transition': 'right ease 1s'});
	// Arrow on click scroll to top
	$(".fa-arrow-up").click(function() {
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 3000);
	});
	var verticalPositionUp = '50% 0%';
	var verticalPositionDown = '50% 100%'
	// Animate image in container on hover
	$('.inner').hover(function(){
		verticalPositionDown = $(this).css('background-position');
		// console.log('verticalPositionUp ' + verticalPositionUp);
		$(this).css('background-position',verticalPositionDown);
		$(this).toggleClass('inner-img-up inner-img-down');
		
	}, function(){
		verticalPositionUp = $(this).css('background-position');
		// console.log('verticalPositionDown ' + verticalPositionDown);
		$(this).css('background-position',verticalPositionUp);
		$(this).toggleClass('inner-img-down inner-img-up')}
	);
	// About page
	$('#wraper img').hover(function(){              // Make picture bigger when hovering
        $(this).toggleClass('imgHover');
	});
	// Zoom image on click
    $('#wraper img').click(function(){
        $(".modal").css('display', 'block');
        $("#img01").attr('src', this.src);
	});
	// Close big image
    $('.close').click(function(){
        $(".modal").css('display', 'none');
	});
	$('#travel').click(function(){          // Show traveling images only
        removeAll();
        $(this).addClass('selected');
        setTimeout(function(){
            $('#wraper').addClass('travelWraper');
            $('.travel').removeClass('doNotDisplay');
        },1010);
        setTimeout(function(){
            travelsShow();
        },1100);
    });

    $('#pets').click(function(){          // Show pets images only
        removeAll();
        $(this).addClass('selected');
        setTimeout(function(){
            $('#wraper').addClass('petsWraper');
            $('.pets').removeClass('doNotDisplay');
        },1010);
        setTimeout(function(){
            petsShow();
        },1100);
    });

    $('#cycling').click(function(){          // Show cycling images only
        removeAll();                        // Scaling out and hiding all images
        $(this).addClass('selected');       // Selecting name of gallery
        setTimeout(function(){              // Whait when all images will be hidden
            $('#wraper').addClass('cyclingWraper');     // Restructure grid for our new images
            $('.cycling').removeClass('doNotDisplay');  // Make our images display
        },1010);
        setTimeout(function(){              // separate timeout to give time for remove display none class
            cyclingShow();                  // Run function that scale in back to visible state
        },1100);
    });

    $('#all').click(function(){             // Show all images
        removeAll();
        $(this).addClass('selected');
        setTimeout(function(){
            $('.travel').removeClass('doNotDisplay');
            $('.pets').removeClass('doNotDisplay');
            $('.cycling').removeClass('doNotDisplay');
            $('#wraper').addClass('all');
        },1010);
        setTimeout(function(){
            cyclingShow();
            travelsShow();
            petsShow();
        },1100);
    });

    // Append youtube video on image click
    $('#beach').click(function(e){
        $(this).append('<iframe src="https://www.youtube.com/embed/RCkGciuD8Eo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
	$('#ksjusha').click(function(e){
        $(this).append('<iframe  src="https://www.youtube.com/embed/RTDy4XLsQVI"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
	$('#cycle').click(function(e){
        $(this).append('<iframe  src="https://www.youtube.com/embed/k7JXixWT94o"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
});

// Script for about page gallery
// Hide all images
function removeAll(){
    $('#travel').removeClass('selected');   // All h tags revers to default view
    $('#pets').removeClass('selected');
    $('#cycling').removeClass('selected');
    $('#all').removeClass('selected');

    $('.travel').each(function(){$(this).css({'transform':'scale(' + 0 + ')'})});   // Scale out all batches of images
    $('.pets').each(function(){$(this).css({'transform':'scale(' + 0 + ')'})});
    $('.cycling').each(function(){$(this).css({'transform':'scale(' + 0 + ')'})});

    setTimeout(function(){                              // Whait for scale out
        $('#wraper').removeClass("all petsWraper travelWraper cyclingWraper");  // Remove all grid structures classes
        $('.travel').addClass('doNotDisplay');          // Hide all image batches
        $('.pets').addClass('doNotDisplay');
        $('.cycling').addClass('doNotDisplay');
    },1000);

};

// Scale in travel images
function travelsShow(){
    $('.travel').each(function(){$(this).css({'transform':'scale(' + 1 + ')'})});
};

// Scale in pets images
function petsShow(){
    $('.pets').each(function(){$(this).css({'transform':'scale(' + 1 + ')'})});
};

// Scale in cycling images
function cyclingShow(){
    $('.cycling').each(function(){$(this).css({'transform':'scale(' + 1 + ')'})});
};
// End script for about page gallery

// function proba(){
// 	console.log('Proba na');
// }
/* Functions starts below */

/* Define variable as global as we use in many functions */
// var iconElement;

/* Mobile nav icon click listener */
// function mobileMenu(){
// 	iconElement = document.getElementById('mobileIcon');
// 	iconElement.addEventListener('click', function(){
// 		if(iconElement.innerHTML=='☰'){
// 			navVisibility('visible');
			// document.getElementById("mymap").style.display = "none"; /* Hide map when mobile menu open */
// 		}else{
// 			navVisibility('hidden');
// 		}
// 	})
// }

/* Show or hide navigation menu */
// function navVisibility(state){
// 	if (state == 'visible'){
// 		document.getElementById('navigation').style.display = 'flex';
// 		document.getElementById('mobileIcon').innerHTML='&#88';
// 	}else{
// 		document.getElementById('navigation').style.display = 'none';
// 		document.getElementById('mobileIcon').innerHTML='&#9776';
// 	}
// }
/* In case of resizing mobile menu initial state must be display none but desktop version must be visible */
// function menuState(){
// 	window.addEventListener("resize", function(){
// 		// /* If window size over 768px - display nav menu */
// 		if (window.innerWidth > '768'){
// 			navVisibility('visible');
// 		}else{
// 			navVisibility('hidden');
// 		}
// 	});
// }

/* Open map by click social media icon - location, or close map by clicking same icon */
// function openMap(){
// 	document.getElementsByClassName("fa-map-marker-alt")[0].addEventListener('click', function(){
// 		if(document.getElementById("mymap").style.display=='block'){
// 			document.getElementById("mymap").style.display = "none";
// 		}else{	document.getElementById("mymap").style.display='block';
// 				if (window.innerWidth < '768'){navVisibility('hidden');} /* Hide nav menu if opening map to prevent overlapping */
// 		}
// 	})
// }
/* Close map by clicking X icon on top */
// function closeMap(){
// 	var xIcon = document.getElementsByClassName("close");
// 	xIcon[0].addEventListener('click', function(){
// 		document.getElementById("mymap").style.display = "none";
// 	});
// }

/* Show address by click social media icon - address, or hide address by clicking same icon */
/* function showAddress(){
	document.getElementsByClassName("fa-at")[0].addEventListener('click', function(){
		if(document.getElementById("myemail").style.display=='block'){
			document.getElementById("myemail").style.display = "none";
		}else{	document.getElementById("myemail").style.display='block';
				if (window.innerWidth < '768'){navVisibility('hidden');} /* Hide nav menu if opening to prevent overlapping */
/* 		}
	})
}  */
/* Home page text on scroll animation */
// function textAnimation(){
// 	var textElement = document.getElementsByClassName('path');
	// var myimage = document.getElementById('stickyimg');
	// var offset = 0;
	// textElement[0].style.strokeDasharray  = 2000;
	// textElement[0].style.opacity = 0;
	// window.addEventListener('scroll', function(){
	// 	offset =2000 - window.pageYOffset * 5; 
		// if (offset < 0){
		// 	offset=0;
		// 	myimage.style.opacity=1;
		// 	myimage.style.transition = 'opacity 1s ease';
		// }else{myimage.style.opacity=0;}
		
	// 	textElement[0].style.opacity = 1;
	// 	textElement[0].style.strokeDashoffset = offset; 
	// })
// }
