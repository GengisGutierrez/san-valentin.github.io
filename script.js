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

let sound = new Audio('./assets/ladyfingers.mp3');
playBtn.addEventListener('click', ()=>{
  sound.play();
})
pauseBtn.addEventListener('click', ()=>{
  sound.pause();
})



buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .2
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})