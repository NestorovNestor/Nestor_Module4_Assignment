(function (window) {
	var byeSpeaker = {};
	var speakWord = "Goodbye";
	byeSpeaker.sayBye = function (names) {
		console.log(speakWord + " " + names);
	}

	window.byeSpeaker = byeSpeaker;
})(window);