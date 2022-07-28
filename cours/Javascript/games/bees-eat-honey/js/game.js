/**************************************************************/
/*                           Data                             */
/**************************************************************/
let items = {};
let domBoard;
let domText;

const textChars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z', ' ', '0', '1', '2', '3', '4', '5', '6',
  '7', '8', '9'
];

function Item(domElement, posX, posY) {
  this.domElement = domElement;
  this.posX = posX;
  this.posY = posY;
  this.speed = 10;
}

/**************************************************************/
/*                         Functions                          */
/**************************************************************/
function move(item, direction) {
  let maxRight = domBoard.clientWidth - item.domElement.clientWidth;
  let maxBottom = domBoard.clientHeight - item.domElement.clientHeight;

  switch(direction) {
    case 'left':
      item.posX -= item.speed;
      if (item.posX <= 0) {
        item.posX = 0;
      }
      break;
    case 'right':
      item.posX += item.speed;
      if (item.posX >= maxRight) {
        item.posX = maxRight;
      }
      break;
    case 'up':
      item.posY -= item.speed;
      if (item.posY <= 0) {
        item.posY = 0;
      }
      break;
    case 'down':
      item.posY += item.speed;
      if (item.posY >= maxBottom) {
        item.posY = maxBottom;
      }
      break;
  }
  item.domElement.style.left = item.posX + 'px';
  item.domElement.style.top = item.posY + 'px';
}

function say(item, letter) {
  let tell = item.domElement.querySelector('.say');

  if (letter === 'Backspace') {
    tell.innerText = tell.innerText.slice(0, -1);
  } else if (textChars.indexOf(letter) > -1) {
    tell.innerText += letter;
  } else if (letter === 'Enter') {
    tell.innerText += '\n';
  } else {
    return;
  }

  domText.querySelector('textarea').value = tell.innerText;

  if(!tell.classList.contains('js-visible')) {
    tell.classList.add('js-visible');
  }
  if(tell.innerText === '') {
    tell.classList.remove('js-visible');
  }
}

/**************************************************************/
/*                       Event handlers                       */
/**************************************************************/

function arrowListener (event) {
  if (event.key === 'ArrowLeft') {
    move(items.bee, 'left');
    document.querySelector('#key-arrow-left').classList.add('js-key-down');
  } else if (event.key === 'ArrowRight') {
    move(items.bee, 'right');
    document.querySelector('#key-arrow-right').classList.add('js-key-down');
  } else if (event.key === 'ArrowUp') {
    move(items.bee, 'up');
    document.querySelector('#key-arrow-up').classList.add('js-key-down');
  } else if (event.key === 'ArrowDown') {
    move(items.bee, 'down');
    document.querySelector('#key-arrow-down').classList.add('js-key-down');
  }
  event.preventDefault();
}

function keyupListener () {
  document.querySelectorAll('.keyboard-arrow')
    .forEach((element) => element.classList.remove('js-key-down')
  );
}

function sayListener (event) {
  say(items.bee, event.key);

  event.preventDefault();
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  domBoard = document.querySelector('#board');
  domText = document.querySelector('.keyboard-text');

  items.bee = new Item(document.querySelector('#bee'), 0, 0);
  items.flower = new Item(document.querySelector('#flower'), 0, 0);
  items.swarm = new Item(document.querySelector('#swarm'), 0, 0);

  domText.addEventListener('keydown', sayListener);
  document.addEventListener('keydown', arrowListener);
  document.addEventListener('keyup', keyupListener);
});
