const buttonX = document.getElementsByClassName('buttonX')[0];
const buttonO = document.getElementsByClassName('buttonO')[0];
const cells = document.querySelectorAll('.cell');

function btnO() {
  buttonO.innerHTML = 'choose o';
  buttonX.style.display = 'none';
}

function btnX() {
  buttonX.innerHTML = 'choose x';
  buttonO.style.display = 'none';
}

buttonO.addEventListener('click', btnO);
buttonX.addEventListener('click', btnX);

let i = Math.floor(Math.random() * 9);

function addX(cell) {
  if (buttonO.innerHTML === 'choose o') {
    cell.classList.add('circle');
    //cells[i].classList.add('x');
  } else if (buttonX.innerHTML === 'choose x') {
    cell.classList.add('x');
    //cells[i].classList.add('circle');
  }
}

function addOthers(cell) {
  if (buttonO.innerHTML === 'choose o') {
    cells[i].classList.add('x');
  } else if (buttonX.innerHTML === 'choose x') {
    cells[i].classList.add('circle');
  }
  console.log(cell);
}

cells.forEach((cell) => cell.addEventListener('click', () => addX(cell)));

cells.forEach((cell) => cell.addEventListener('click', () => addOthers(cell)));

// git commit -- workspace[git add] ->staging area[git commit] -> repository
