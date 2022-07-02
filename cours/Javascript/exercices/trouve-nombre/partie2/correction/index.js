/** Jeu : devine le nombre (entre 10 et 100)
 * 
 * Maintenant, le joueur a 10 essais
 * A chaque essai :
 * - S'il trouve, on affiche le nombre de coups qu'il lui a fallu
 * - Sinon, on lui affiche le nombre d'essais restants
 * (en plus du message "plus grand" / "plus petit")
 *
*/

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
