var ser = document.getElementById('ser');
var vi = document.getElementById('vi');
var ces = document.getElementById('ces');
var servicephoto = document.getElementById('servicephoto');
var scrollTarget = 0;
var scrollPos = 0;
var scrollEase = 0.1;
var scrollEaseLimit = 0.1;

update();

window.addEventListener('scroll', function(){
	scrollTarget = window.scrollY;
}, false);


function render(){

	if (scrollTarget !== scrollPos){

		if (Math.abs(scrollPos - scrollTarget) < scrollEaseLimit){
			scrollPos = scrollTarget;
		}

		scrollPos += (scrollTarget - scrollPos) * scrollEase;
		
    var transform1 = 'translate3d(0px, ' + -(scrollPos/17) + 'px, 0px)';
   
		ser.style.webkitTransform = transform1;
		ser.style.MozTransform = transform1;
		ser.style.msTransform = transform1;
		ser.style.OTransform = transform1;
		ser.style.transform = transform1;
        
		// translate Element 2 with pos (plain speed)   

		var transform2 = 'translate3d(0px, ' + -(scrollPos/30) + 'px, 0px)';
   
		vi.style.webkitTransform = transform2;
		vi.style.MozTransform = transform2;
		vi.style.msTransform = transform2;
		vi.style.OTransform = transform2;
		vi.style.transform = transform2;

		var transform3 = 'translate3d(0px, ' + -(scrollPos/15) + 'px, 0px)';
   
		ces.style.webkitTransform = transform3;
		ces.style.MozTransform = transform3;
		ces.style.msTransform = transform3;
		ces.style.OTransform = transform3;
		ces.style.transform = transform3;

		var transform4 = 'translate3d(0px, ' + (scrollPos/25) + 'px, 0px)';
   
		servicephoto.style.webkitTransform = transform4;
		servicephoto.style.MozTransform = transform4;
		servicephoto.style.msTransform = transform4;
		servicephoto.style.OTransform = transform4;
		servicephoto.style.transform = transform4;
   
	}
}

function update(){
	render();
	window.requestAnimationFrame(update);
}





