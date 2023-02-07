var buttons = document.querySelectorAll('button');
var result = document.querySelector('#result');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var value = this.innerHTML;
    if (value === 'Clear') {
      result.value = '';
    } else if (value === 'Backspace') {
      result.value = result.value.slice(0, -1);
    } else if (value === '=') {
      result.value = eval(result.value);
    } else {
      result.value += value;
    }
  });
}
