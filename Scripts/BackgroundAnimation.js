window.onload = function(){
	var imgs = ["0.jpg", "1.jpg", "2.jpg"];
	var imgPath = "Images/Background/"
	var count = 0;
	var bgObj1 = document.getElementById("bgObj1");
	var bgObj1Style = getComputedStyle(bgObj1);
	var bgObj2 = document.getElementById("bgObj2");

	t = getComputedStyle(document.documentElement).getPropertyValue("--bg-ani-time");
	t = t.replace(' ', '');
	t = parseInt(t.replace('s', ''));
	t *= 2000/3;


	function ChangeImg(obj){
		console.log("ChangeImg: " + obj);
		count++;
		count %= imgs.length;
		console.log("ChangeImg - count: "+count)
		obj.setAttribute('src', imgPath + imgs[count]);
	}

    function Main(){
    	console.log("Start-Main");

    	opacity = bgObj1Style.getPropertyValue("opacity");
    	console.log("Opacity: " + opacity);

    	if (opacity == 1){
    		ChangeImg(bgObj2);
    	}
    	if (opacity == 0) {
    		ChangeImg(bgObj1);
    	}
    }

    function GetOpacity(){
    	return bgObj1Style.getPropertyValue("opacity");
    }

    function Delay(){
    	console.log("delayFinish, setInterval, time: " + t);
    	setInterval(Main, t);
    }


    ChangeImg(bgObj1);
    ChangeImg(bgObj2);
    setTimeout(Delay, 2000);
}
