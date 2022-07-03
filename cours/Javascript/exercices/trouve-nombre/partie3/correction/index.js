/** Jeu : devine le nombre (entre 10 et 100)
 * 
 * Proposer au joueur de rejouer
 * - Tant qu'il joue : Stocker ses scores
 * - Quand il veut arrêter : Afficher ses scores de la façon suivante :
 * "Partie 1 : Gagné en 3 essais"
 * "Partie 2 : Gagné en 9 essais"
 * "Partie 3 : Perdu"
 * ...
 *
*/

// !!! TODO : Add part 3 code !!!

/*
let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
let essaisRestants = 10;
let saisieNombre;

do {
  saisieNombre = Number(
    prompt('Devine le nombre (entre 10 et 100)')
  );

  if (isNaN(saisieNombre)) {
    continue;
  }

  if (saisieNombre === nbreATrouver) {
    alert('Gagné ! Il a fallu ' + essaisRestants + ' coups !');
    break;
  }

  essaisRestants--;

  if (saisieNombre < nbreATrouver) {
    alert('Plus grand, essais restants ' + essaisRestants);
  }
  if (saisieNombre > nbreATrouver) {
    alert('Plus petit, essais restants ' + essaisRestants);
  }

  if (essaisRestants <= 0) {
    alert('Perdu, plus d\'essai');
    break;
  }

} while(saisieNombre !== nbreATrouver);
*/
