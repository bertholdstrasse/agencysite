var el1 = document.getElementById('el1');
var el2 = document.getElementById('el2');
var el3 = document.getElementById('el3');
var el5 = document.getElementById('el5');
var el6 = document.getElementById('el6');
var el7 = document.getElementById('el7');
var beschreibung2 = document.getElementById('beschreibung2');
var el8 = document.getElementById('el8');
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
		
    var transform1 = 'translate3d(0px, ' + (scrollPos/25) + 'px, 0px)';
   
		el1.style.webkitTransform = transform1;
		el1.style.MozTransform = transform1;
		el1.style.msTransform = transform1;
		el1.style.OTransform = transform1;
		el1.style.transform = transform1;
        
		// translate Element 2 with pos (plain speed)

	var transform2 = 'translate3d(0px, ' + -(scrollPos/12) + 'px, 0px)';
   
		el2.style.webkitTransform = transform2;
		el2.style.MozTransform = transform2;
		el2.style.msTransform = transform2;
		el2.style.OTransform = transform2;
		el2.style.transform = transform2;	

	var transform3 = 'translate3d(0px, ' + -(scrollPos/15) + 'px, 0px)';
   
	el3.style.webkitTransform = transform3;
	el3.style.MozTransform = transform3;
	el3.style.msTransform = transform3;
	el3.style.OTransform = transform3;
	el3.style.transform = transform3;

	var transform5 = 'translate3d(0px, ' + (scrollPos/7) + 'px, 0px)';
   
	el5.style.webkitTransform = transform5;
	el5.style.MozTransform = transform5;
	el5.style.msTransform = transform5;
	el5.style.OTransform = transform5;
	el5.style.transform = transform5;

	var transform6 = 'translate3d(0px, ' + -(scrollPos/10) + 'px, 0px)';
   
	el6.style.webkitTransform = transform6;
	el6.style.MozTransform = transform6;
	el6.style.msTransform = transform6;
	el6.style.OTransform = transform6;
	el6.style.transform = transform6;

	var transform7 = 'translate3d(0px, ' + (scrollPos/10) + 'px, 0px)';
   
	el7.style.webkitTransform = transform7;
	el7.style.MozTransform = transform7;
	el7.style.msTransform = transform7;
	el7.style.OTransform = transform7;
	el7.style.transform = transform7;

	var transform8 = 'translate3d(0px, ' + -(scrollPos/15) + 'px, 0px)';
   
	beschreibung2.style.webkitTransform = transform8;
	beschreibung2.style.MozTransform = transform8;
	beschreibung2.style.msTransform = transform8;
	beschreibung2.style.OTransform = transform8;
	beschreibung2.style.transform = transform8;

	var transform9 = 'translate3d(0px, ' + -(scrollPos/17) + 'px, 0px)';
   
	el8.style.webkitTransform = transform9;
	el8.style.MozTransform = transform9;
	el8.style.msTransform = transform9;
	el8.style.OTransform = transform9;
	el8.style.transform = transform9;


    
   
	}
}

function update(){
	render();
	window.requestAnimationFrame(update);
}





