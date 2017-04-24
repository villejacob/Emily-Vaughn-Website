vid_count = 1;
vid_src_webm = document.getElementById("src-webm");
vid_src_mp4 = document.getElementById("src-mp4");
vid = document.getElementById("bg-video");

function playNext(){
	vid.style.visibility = "hidden";
	setTimeout(function(){
		vid_count++;
		if (vid_count == 4) vid_count = 1;
		vid_src_webm.setAttribute("src","content/video/video"+vid_count+".webm");
		vid_src_mp4.setAttribute("src","content/video/video"+vid_count+".mp4");
		vid.load();
		vid.style.visibility = "visible";
		vid.play();
	}, 6000);
};
