const tic = document.getElementById('up-left')
tic.addEventListener('touchstart', event => {
  // touch event started
  document.getElementById("up-left").innerHTML = "X"
})