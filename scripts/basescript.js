
/* This function provide waiting time till content loaded */

$(document).ready(function(){
    // Display navigation menu
    $('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('#navigation').slideToggle();
    });
	
    
    // Click on arrow down on main page
    if (document.location.href.match(/[^\/]+$/)[0] == 'index.html'){
        var $doc = $(document), $win = $(window);
        var $svg = $('#sticky svg').drawsvg();
        $('.container').click(function(){    
            max = $doc.height() - $win.height();
            $('.container').css('bottom', -100 + 'px');	//Bring arrows down
            $svg.drawsvg('animate');
            $(window).off('scroll');
        });
        $win.on('scroll', function() {
            $svg.drawsvg('animate');
            $('.container').css('bottom', -100 + 'px');
            $(window).off('scroll');
        });
    
    };

    // Scroll top arrow
    $(window).scroll(function(){
        //Calculate position of top window from 0 to 10 for arrow
        var position =Math.round( (10/ ($(document).height() - $(window).height()))*$(document).scrollTop());
        //If position over 2, show arrow
        if (position > 2){
            $('.fa-arrow-up').css('right', 30+'px')          //Show arrow
        }else{
            $('.fa-arrow-up').css('right', -50+'px')         //Hide arrow
        }
    });
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
    
	// Animate image in container on hover
	var verticalPositionUp = '50% 0%';
	var verticalPositionDown = '50% 100%'
	$('.inner').hover(function(){
		verticalPositionDown = $(this).css('background-position');
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
	$('#snow').click(function(e){
        $(this).append('<iframe width="1903" height="810" src="https://www.youtube.com/embed/99QlKc3m8eQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
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
