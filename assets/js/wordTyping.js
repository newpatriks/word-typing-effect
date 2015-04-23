var WordTyping = function(element, speed, callback)
{
// B.I
// added support for callbacks to trigger consecutive animations without the hassle of keeping track of setTimeouts.
	callback = callback || null;
	var container = document.getElementById(element);
	var mainText = container.innerHTML;
	var res = mainText.split(" ");
	var i = 0;
	var defaultSpeed = 200;

	container.innerHTML = "";
	runAllWords(c);

	function runAllWords(c)
	{
		if (i < res.length)
		{
			var a = (i==0) ? i : i-1;
			setTimeout(function(){ showWord(res[i],0) }, res[a].length * defaultSpeed * 1/speed);
		}else{
			complete(c);
		}
	}

	function showWord(word, counterWord)
	{
		if (counterWord < word.length)
		{
			setTimeout(function(){ showLetter(word,counterWord) }, defaultSpeed * 1/speed);
		}
		else
		{
			container.innerHTML += " ";
			i+=1;
			runAllWords();
		}
	}

	function showLetter(word, counterWord)
	{
		container.innerHTML += word[counterWord];
		showWord(word,counterWord+1);
	}

	function complete(c)
	{
		try{
			c();
			return true;
		}catch(e){
				console.error(e);
		}
	}

	return
	{
		complete;
	}
}
