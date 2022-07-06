document.addEventListener('DOMContentLoaded', () => {

  console.log('Damier');

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

  // 1. Lorsque l'utilisateur clique sur le bouton "damier",
  // Afficher un damier dans la grille

  // TODO : Ajouter la classe .js-black sur les cases concernées
  function darkerRow(rowNumber) {
    let className = '';
    if (rowNumber % 2 === 0) {
      className = '.row' + rowNumber + ':nth-child(odd)';
    } else {
      className = '.row' + rowNumber + ':nth-child(even)';
    }
    const elements = document.querySelectorAll(className);
    for(let i = 0; i < elements.length; i++) {
      elements[i].classList.add('js-black');
    }
  }
  document.querySelector('.damier').addEventListener('click', () => {
    clearCheckboard();
    for(let i = 0; i <= 8; i++) {
      darkerRow(i);
    }
  });

  // 2. Lorsque l'utilisateur clique sur le bouton "disco",
  // Afficher un dancefloor de lumières dans la grille

  // TODO : Ajouter les classes .js-color1, ... .js-color5 aléatoirement
  function createDiscoDanceFloor() {
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        let random = Math.ceil(Math.random() * 5);
        document.querySelector('.row' + i + '.col' + j)
          .classList.add('js-disco-color' + random);
      }
    }  
  }
  document.querySelector('.disco').addEventListener('click', () => {
    clearCheckboard();
    createDiscoDanceFloor();
  });

  // 3. Lorsque l'utilisateur clique sur le bouton "labyrinth",
  // Afficher le motif présent sur le bouton dans la grille

  // TODO : Ajouter la classe .js-black sur les cases concernées
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
    document.querySelector('.row2.col4').classList.add('js-black');
    document.querySelector('.row4.col2').classList.add('js-black');
    document.querySelector('.row4.col3').classList.add('js-black');
    document.querySelector('.row4.col4').classList.add('js-black');
    document.querySelector('.row2.col6').classList.add('js-black');
    document.querySelector('.row3.col6').classList.add('js-black');
    document.querySelector('.row4.col6').classList.add('js-black');
    document.querySelector('.row5.col6').classList.add('js-black');
    document.querySelector('.row6.col6').classList.add('js-black');
    document.querySelector('.row6.col3').classList.add('js-black');
    document.querySelector('.row6.col4').classList.add('js-black');
    document.querySelector('.row6.col5').classList.add('js-black');
  }
  document.querySelector('.labyrinth').addEventListener('click', () => {
    clearCheckboard();
    createLabyrinth();
  });

  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "js-push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "js-pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "js-boom")

  document.querySelectorAll('.cell').forEach((cell) => {
    cell.addEventListener('mousedown', (event) => {
      event.target.classList.remove('js-pull');
      event.target.classList.add('js-push');
    });
    cell.addEventListener('mouseup', (event) => {
      event.target.classList.remove('js-push');
      event.target.classList.add('js-pull');
    });
    cell.addEventListener('dblclick', (event) => {
      event.target.classList.remove('js-push');
      event.target.classList.remove('js-pull');
      event.target.classList.add('js-boom');
    });
  })

  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TODO : Ajouter la classe js-visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée

  let positionX = 0;
  let positionY = 0;

  function moveBobby(direction) {
    const bobby = document.getElementById('bobby');
    switch(direction) {
      case 'ArrowUp':
        positionY -= 3;
        if (positionY < 0) {
          positionY = 0;
        }
        bobby.style.marginTop = positionY + 'rem';
        break;
      case 'ArrowDown':
        positionY += 3;
        if (positionY > 3 * 7) {
          positionY = 3 * 7;
        }
        bobby.style.marginTop = positionY + 'rem';
        break;
      case 'ArrowLeft':
        positionX -= 3;
        if (positionX < 0) {
          positionX = 0;
        }
        bobby.style.marginLeft = positionX + 'rem';
        break;
      case 'ArrowRight':
        positionX += 3;
        if (positionX > 3 * 7) {
          positionX = 3 * 7;
        }
        bobby.style.marginLeft = positionX + 'rem';
        break;
    }
  }

  document.addEventListener('keydown', (event) => {
    const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (arrows.indexOf(event.key) > -1) {
      document.getElementById('bobby').classList.add('js-visible');
      moveBobby(event.key);
    }
  });

});
