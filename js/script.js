// Transition to links. Video -> Name -> Links
$('video').bind('ended', function(){
	function showLinks() {
		$('#emily-name').removeClass("glitch-in");
		$('.landing-inner').css('visibility', 'visible');
	}
	function glitchIn() {
		$('#emily-name').removeClass("glitch-out");
		$('#emily-name').css('top', '15.4vh');
		$('#emily-name').addClass("glitch-in");
		setTimeout(showLinks, 1500)
	}
	function glitchOut() {
		$('#emily-name').addClass("glitch-out");
		setTimeout(glitchIn, 600);
	}
	function showName() {
		$('#emily-name').css('visibility', 'visible');
		setTimeout(glitchOut, 1500);
	}
	$('video').css('opacity', '0');	
	setTimeout(showName, 400);
});

// Testing animation
// $('#emily-name').css('visibility', 'visible');

// Fix iOS bugs
var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}