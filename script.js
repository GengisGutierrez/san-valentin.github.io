const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Ey, porque dices que no?',
  'Ey ey ey pequeña no digas eso ... No digas eso ... Eres perfecta',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón'
]

// var myAudio = document.getElementById("myAudio");
// var playPauseButton = document.getElementById("playPauseButton");
// var volumeControl = document.getElementById("volumeControl");

// function togglePlayPause() {
//   if (myAudio.paused) {
//       myAudio.play();
//       playPauseButton.src = "./assets/pause.png";
//   } else {
//       myAudio.pause();
//       playPauseButton.src = "./assets/play.png";
//   }
// }
// function changeVolume() {
//   myAudio.volume = volumeControl.value;
// }



buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .2
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})