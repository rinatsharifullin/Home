/* This function provide waiting time till content loaded */

$(document).ready(function(){
    // Click on arrow down on main page
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
    
});