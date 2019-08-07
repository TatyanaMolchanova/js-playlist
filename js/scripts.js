(function(){
	'use strict';

		var playList = [
	 {
	  author: "LED ZEPPELIN",
	  song:"STAIRWAY TO HEAVEN"
	 },
	 {
	  author: "QUEEN",
	  song:"BOHEMIAN RHAPSODY"
	 },
	 {
	  author: "LYNYRD SKYNYRD",
	  song:"FREE BIRD"
	 },
	 {
	  author: "DEEP PURPLE",
	  song:"SMOKE ON THE WATER"
	 },
	 {
	  author: "JIMI HENDRIX",
	  song:"ALL ALONG THE WATCHTOWER"
	 },
	 {
	  author: "AC/DC",
	  song:"BACK IN BLACK"
	 },
	 {
	  author: "QUEEN",
	  song:"WE WILL ROCK YOU"
	 },
	 {
	  author: "METALLICA",
	  song:"ENTER SANDMAN"
	 }
	];

		var ol = document.createElement('ol');
		console.log(ol);
		document.body.append(ol);
		

		for (var i = 0; i < playList.length; i++) {

			var li = document.createElement('li');
			li.innerText = playList[i].author + " - " + playList[i].song;
			li.classList.add('abc');
			ol.appendChild(li);

		}


}());