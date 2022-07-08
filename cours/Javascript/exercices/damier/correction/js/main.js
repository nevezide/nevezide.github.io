/**************************************************************/
/*                         Données                            */
/**************************************************************/
let bobby = {
  dom: null,
  positionX: 0,
  positionY: 0
};

let cat = {
  dom: null,
  positionX: 0,
  positionY: 0
};

/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/
function clearCheckboard() {
  const elements = document.querySelectorAll('.cell');
  for(let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('js-black');
    elements[i].classList.remove('js-disco-color1');
    elements[i].classList.remove('js-disco-color2');
    elements[i].classList.remove('js-disco-color3');
    elements[i].classList.remove('js-disco-color4');
    elements[i].classList.remove('js-disco-color5');
  }
}

function createDamier() {
  for(let row = 1; row <= 8; row++) {
    for(let col = 1; col <= 8; col++) {
      const cell = document.querySelector(
        '.row' + row + '.col' + col
      );
      if ((row + col) % 2 === 0) {
        cell.classList.add('js-black');
      }
    }
  }
}

function createDiscoDanceFloor() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      let random = Math.ceil(Math.random() * 5);
      document.querySelector('.row' + i + '.col' + j)
        .classList.add('js-disco-color' + random);
    }
  }  
}

function createLabyrinth() {
  // Le tour du labyrinth
  for(let i = 1; i <= 8; i++) {
    document.querySelector('.row' + i + '.col1').classList.add('js-black');
    document.querySelector('.row' + i + '.col8').classList.add('js-black');
  }
  for(let i = 1; i <= 8; i++) {
    if (i !== 2) {
      document.querySelector('.row1.col' + i).classList.add('js-black');
    }
    document.querySelector('.row8.col' + i).classList.add('js-black');
  }
  // Les cases du milieu
  for(let i = 2; i <= 6; i++) {
    document.querySelector('.row' + i + '.col6').classList.add('js-black');
  }
  document.querySelector('.row2.col4').classList.add('js-black');
  document.querySelector('.row4.col2').classList.add('js-black');
  document.querySelector('.row4.col3').classList.add('js-black');
  document.querySelector('.row4.col4').classList.add('js-black');
  document.querySelector('.row6.col3').classList.add('js-black');
  document.querySelector('.row6.col4').classList.add('js-black');
  document.querySelector('.row6.col5').classList.add('js-black');
}

function moveElement(element, direction) {
  switch(direction) {
    case 'ArrowUp':
      element.positionY -= 3;
      if (element.positionY < 0) {
        element.positionY = 0;
      }
      element.dom.style.marginTop = element.positionY + 'rem';
      break;
    case 'ArrowDown':
      element.positionY += 3;
      if (element.positionY > 3 * 7) {
        element.positionY = 3 * 7;
      }
      element.dom.style.marginTop = element.positionY + 'rem';
      break;
    case 'ArrowLeft':
      element.positionX -= 3;
      if (element.positionX < 0) {
        element.positionX = 0;
      }
      element.dom.style.marginLeft = element.positionX + 'rem';
      break;
    case 'ArrowRight':
      element.positionX += 3;
      if (element.positionX > 3 * 7) {
        element.positionX = 3 * 7;
      }
      element.dom.style.marginLeft = element.positionX + 'rem';
      break;
  }
}

function randomMoveElement(element) {
  let randomDirection = Math.ceil(Math.random() * 4);
  let direction = 'ArrowUp';
  switch (randomDirection) {
    case 1:
      direction = 'ArrowRight';
      break;
    case 2:
      direction = 'ArrowDown';
      break;
    case 3:
      direction = 'ArrowLeft';
      break;
    default:
      direction = 'ArrowUp';
  }
  moveElement(element, direction);
}
/**************************************************************/
/*                      Event listeners                       */
/**************************************************************/
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

function onDiscoClick() {
  clearCheckboard();
  createDiscoDanceFloor();
}

function onLabyrinth() {
  clearCheckboard();
  createLabyrinth();
}

function onCellMouseDown(event) {
  event.target.classList.remove('js-pull');
  event.target.classList.add('js-push');
}

function onCellMouseUp(event) {
  event.target.classList.remove('js-push');
  event.target.classList.add('js-pull');
}

function onCellDblClick(event) {
  event.target.classList.remove('js-push');
  event.target.classList.remove('js-pull');
  event.target.classList.add('js-boom');
}

function onKeyDown(event, element) {
  const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  if (arrows.indexOf(event.key) > -1) {
    element.dom.classList.add('js-visible');
    moveElement(element, event.key);
  }
}
/**************************************************************/
/*                       Main Program                         */
/**************************************************************/
document.addEventListener('DOMContentLoaded', () => {

  console.log('Damier');

  // 1. Lorsque l'utilisateur clique sur le bouton "damier",
  // Afficher un damier dans la grille

  // TODO : Ajouter la classe .js-black sur les cases concernées
  document
    .querySelector('.damier')
    .addEventListener('click', onDamierClick);

  // 2. Lorsque l'utilisateur clique sur le bouton "disco",
  // Afficher un dancefloor de lumières dans la grille

  // TODO : Ajouter les classes .js-color1, ... .js-color5 aléatoirement
  document
    .querySelector('.disco')
    .addEventListener('click', onDiscoClick);

  // 3. Lorsque l'utilisateur clique sur le bouton "labyrinth",
  // Afficher le motif présent sur le bouton dans la grille

  // TODO : Ajouter la classe .js-black sur les cases concernées
  document
    .querySelector('.labyrinth')
    .addEventListener('click', onLabyrinth);

  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "js-push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "js-pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "js-boom")
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.addEventListener('mousedown', onCellMouseDown);
    cell.addEventListener('mouseup', onCellMouseUp);
    cell.addEventListener('dblclick', onCellDblClick);
  })

  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TODO : Ajouter la classe js-visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée
  bobby.dom = document.getElementById('bobby');
  document.addEventListener('keydown', (e) => onKeyDown(e, bobby));

  // 6. Chaque seconde, la div ayant l'id "cat" se déplace
  // sur les cases du plateau
  cat.dom = document.getElementById('cat');
  window.setInterval(randomMoveElement, 1000, cat);
});
