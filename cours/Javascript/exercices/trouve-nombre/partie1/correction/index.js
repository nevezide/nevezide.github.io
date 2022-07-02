/** Jeu : devine le nombre (entre 10 et 100)
 *
 * Un nombre entre 10 et 100 est choisi aléatoirement
 *
 * Tant que le joueur n'a pas trouvé le nombre
 * - Demander au joueur de saisir un nombre :
 *   - S'il est plus petit que le nbre à trouver
 *   afficher "Plus grand"
 *   - S'il est plus grand que le nbre à trouver
 *   afficher "Plus petit"
 *   - S'il a trouvé, afficher "Gagné" et arrêter le jeu
 * 
 * IMPORTANT : Gérer le cas où l'utilisateur saisi autre chose qu'un nombre
*/

let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
let saisieNombre;

do {
  saisieNombre = Number(
    prompt("Devine le nombre (entre 10 et 100)")
  );

  if (isNaN(saisieNombre)) {
    continue;
  }
  if (saisieNombre < nbreATrouver) {
    alert("Plus grand");
  }
  if (saisieNombre > nbreATrouver) {
    alert("Plus petit");
  }
} while(saisieNombre !== nbreATrouver)

alert("Gagné !");
