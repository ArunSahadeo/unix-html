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
     	:
      break;
    default:
    	command += evt.key;
      break;
 	}

  input.innerHTML = withCaret(command);

  switch (command) {
  	case 'pwd':
  	console.log("This is it");
  	break;
  	default:
  	console.log("Invalid input");
  	break;
  }

}
}