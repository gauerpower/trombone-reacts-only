const motorcycleSound = new Audio("sounds/motorcycle.mp3");
const raspSound = new Audio("sounds/rasp.mp3");
const wompWomp = new Audio("sounds/womp2.mp3");
const wompWompWompWomp = new Audio("sounds/womp4.mp3");

$(".tbn").click(function (event) {
  let buttonNum = this.textContent;
  makeSoundAndAnimateButton(buttonNum, this);
});

$(document).keydown(function (event) {
  if (event.key != 1 && event.key != 2 && event.key != 3 && event.key != 4) {
  }
  let buttonNum = event.key;
  let currentButton = $("#" + buttonNum)[0];
  makeSoundAndAnimateButton(buttonNum, currentButton);
});

const makeSoundAndAnimateButton = (num, currentButton) => {
  switch (num) {
    case "1":
      wompWomp.play();
      break;
    case "2":
      wompWompWompWomp.play();
      break;
    case "3":
      raspSound.play();
      break;
    case "4":
      motorcycleSound.play();
      break;
    default:
      break;
  }
  currentButton.classList.add("pressed");
  setTimeout(() => {
    currentButton.classList.remove("pressed");
  }, 100);
};
