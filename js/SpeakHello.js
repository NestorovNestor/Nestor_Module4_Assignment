(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.sayHi = function (names) {
		console.log(speakWord + " " + names);
	}

	window.helloSpeaker = helloSpeaker;
})(window);