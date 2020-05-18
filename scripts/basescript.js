
/* This function provide waiting time till content loaded */

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('#navigation').slideToggle();
    });
	
	var $doc = $(document),
    $win = $(window),
    $svg = $('#svg4540').drawsvg(),
    max = $doc.height() - $win.height();
	
	$win.on('scroll', function() {
		var p = $win.scrollTop() / max;
		$svg.drawsvg('progress', p);
		$('.container').css('bottom', 10 - p*50 + '%');	//Bring arrows down
	});
	$('#sticky').ripples({});
});


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
