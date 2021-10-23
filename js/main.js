var
  $count = document.getElementById('count'),
  $textarea = document.getElementById('text'),
  $maxlength = $textarea.getAttribute('maxlength');

$textarea.oninput = function name (params) {
  $count.innerHTML = $maxlength - this.value.length;

  /* if ($count.innerHTML == 0) {
    $count.classList.add('zero');
  } else {
    $count.classList.remove('zero');
  } */

  $count.innerHTML == 0 ? $count.classList.add('zero') : $count.classList.remove('zero');
};