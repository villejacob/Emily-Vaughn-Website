
$('.landing-inner').css('visibility', 'visible');

// var video = $('video')[0];

// // Attach a "timeupdate" event to the video
// video.addEventListener("timeupdate", getCurrentTime);

// // Display title once video slows
// function getCurrentTime() { 
// 	if (video.currentTime > 2.2){
// 		$('#emily-name').css('visibility', 'visible');
// 	};
// };

// // Fade to pink once video is finished
// $('video').bind('ended', function(){
// 	$(this).fadeOut(1800);
// 	$('.landing-inner a').css('visibility', 'visible');
// });

// Fix iOS bugs
var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}