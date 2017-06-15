window.onload = function() {

const input = document.querySelector('.stdin');
const withCaret = (value) => `${value}<span class="caret"></span>`;

let command = '';
document.onkeydown = (evt) => {
  // Handle any shortcuts you want
  /* Alt key */
  if (evt.keyCode === 18 || evt.key === 18) {
   	return false;
  }
  /* Shift key */
  if (evt.keyCode === 16 || evt.key === 16) {
  	return false;
  }
  /* F5 */
  if (evt.keyCode === 116 || evt.key === 116) {
  	return false;
  }
  /* Ctrl key */
  if (evt.keyCode === 17 || evt.key === 17) {
  	return false;
  }
  /* TAB */
  if (evt.keyCode === 9 || evt.key === 9) {
  	return false;
  }
  switch (evt.key) {
  	case 'Enter':
  		console.log(command);
      command = '';
    	break;
    case 'Backspace':
    	command = command.slice(0, command.length - 1);
      break;
    default:
    	command += evt.key;
      break;
 	}
  input.innerHTML = withCaret(command);
}
}