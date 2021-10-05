window.onload = function () {
	const imageList = [ "0.jpg", "1.jpg", "2.jpg" ]
	const imgPath = "assets/img/background/"
	let count = 0;
	const bgObj1 = document.getElementById( "bgObj1" )
	const bgObj1Style = getComputedStyle( bgObj1 )
	const bgObj2 = document.getElementById( "bgObj2" )
	
	let t = getComputedStyle( document.documentElement ).getPropertyValue( "--bg-ani-time" );
	t = t.replace( ' ', '' );
	t = parseInt( t.replace( 's', '' ) );
	t *= 2000 / 3;
	
	
	function ChangeImg ( obj ) {
		console.log( "ChangeImg: " + obj );
		count++;
		count %= imageList.length;
		console.log( "ChangeImg - count: " + count )
		obj.setAttribute( 'src', imgPath + imageList[ count ] );
	}
	
	function Main () {
		console.log( "Start-Main" );
		
		let opacity = bgObj1Style.getPropertyValue( "opacity" );
		console.log( "Opacity: " + opacity );
		
		if ( opacity === 1 ) {
			ChangeImg( bgObj2 );
		} else if ( opacity === 0 ) {
			ChangeImg( bgObj1 );
		}
	}
	
	function Delay () {
		console.log( "delayFinish, setInterval, time: " + t );
		setInterval( Main, t );
	}
	
	
	ChangeImg( bgObj1 );
	ChangeImg( bgObj2 );
	setTimeout( Delay, 2000 );
}
