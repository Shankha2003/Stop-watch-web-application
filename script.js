const playbutton = document.getElementsByClassName('play')[0];
const resetbutton = document.getElementsByClassName('reset')[0];
const lapbutton = document.getElementsByClassName('lap')[0];

let isplay = false;
const toggle = () => {  
  lapbutton.classList.add('hidden');
  resetbutton.classList.add('hidden');
}
const play = () => {
  if (!isplay) {
    playbutton.innerHTML = 'Pause';
    isplay = true;
  } else {
    playbutton.innerHTML = 'Play';
    isplay = false;
  }
  toggle();
}
const reset = () => {
  playbutton.innerHTML = 'Play';
  isplay = false;
  toggle();
}
playbutton.addEventListener('click', play);
resetbutton.addEventListener('click', reset);