window.onload = function() {
	
var stdin = document.querySelector('input[name="consoleCommand"]');
	
var caretStart = stdin.selectionStart;

var caretEnd = stdin.selectionEnd;

	var showcursorPos = setInterval(function(){
	stdin.style.backgroundPosition = (stdin.value.length - caretStart) + 'px ' + '0px';
	console.log(stdin.style.backgroundPosition);
	}, 100);

stdin.onkeydown = function(event) {

	var interval = setInterval(function(){

	   if(event.which == '13'){
		   clearInterval(interval);
		   switch(stdin.value) {
			case 'pwd':
		  	console.log('pwd');
			break;
			default:
		  	console.log('Invalid expression');
			break;
			}
	   }
	}, 100);	
}

}
