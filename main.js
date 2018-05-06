document.getElementById('gen').onclick = function() {
	var ref = document.getElementById('ref').value;
	var format = document.getElementById('format').value;
	var counter = document.getElementById('counter').value;
	for(var i = 1; i <= counter; i++) {
		var list = document.getElementById('list');
		var acord = document.createElement('a');
		acord.setAttribute('href', ref + i + '.' + format);
		acord.setAttribute('download', '');
		list.appendChild(acord);
		acord.textContent = 'Video-' + i;
	}
};



window.onload = function() {
	document.getElementById('all').onclick = function() {
		var video = document.querySelectorAll('a');
		console.log(video);
		for(var j = 0; j < video.length; j++) {
			var lesson = video[j];
			console.log(lesson);
			lesson.click();
		}
	}
}