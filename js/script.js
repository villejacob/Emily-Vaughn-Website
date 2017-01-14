var video = $('video')[0];

// Attach a "timeupdate" event to the video
video.addEventListener("timeupdate", getCurrentTime);

// Transition based on the playback time
function getCurrentTime() { 
	// Display Emily's name at the dope slow motion bat swing
	if (video.currentTime > 2.2){ $('#emily-name').css('visibility', 'visible'); }
	// Fade to pink before reaching end of video
	if (video.currentTime > 4.8){ $('video').css('opacity', '0'); }
};

// Animate text once video ends
$('video').bind('ended', function(){
	$('#emily-name').css('top', '15.4vh');
	$('.landing-inner')
		.delay(2400)
		.queue(function(next){
			$(this).css('visibility', 'visible');
			next();
		});
	// $('a#spotify').css('margin', 'auto 40.7vw');
});

// Fix iOS bugs
var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}