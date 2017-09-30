window.onload = function() {

const input = document.querySelector('.stdin');
const withCaret = (value) => `${value}<span class="caret"></span>`;

let command = '';
document.onkeydown = (evt) => {
  // Handle any shortcuts you want

  switch (evt.key) {
  	case 'Enter':
  		console.log(command);
      command = '';
    	break;
    case 'Backspace':
    	command = command.slice(0, command.length - 1);
      break;
    case 'F5':
     	// Do nothing
      break;
    case 'Alt':
    	// Do nothing
      break;
    case 'Shift':
    	// Do nothing
      break;
    default:
    	command += evt.key;
      break;
 	}

  input.innerHTML = withCaret(command);
  
  switch (command) {
  	case 'Man help':
    case 'man help':
  		if (document.querySelector('.man-page').classList.contains('paused-fade')) {
  			document.querySelector('.man-page').classList.remove('paused-fade');
  		}
  	break;
    case 'whoami':
      input.innerHTML = withCaret("Arun Sahadeo");
    break;
  }
}
}