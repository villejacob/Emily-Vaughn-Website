// $('video').bind('ended', function(){
//    $(this).fadeOut()
// })

$('video').bind('ended', function(){
	$(this).fadeOut(1800);
});

// Fix iOS bugs
var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}