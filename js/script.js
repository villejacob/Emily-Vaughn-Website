// Animate text once video ends
$('video').bind('ended', function(){
	function showPage() {
		$('#emily-name').css('top', '15.4vh');
		$('.landing-inner').css('visibility', 'visible');
	}
	$('video').css('opacity', '0');	
	$('#emily-name').css('visibility', 'visible')	
	setTimeout(showPage, 1600);
});

// Fix iOS bugs
var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}