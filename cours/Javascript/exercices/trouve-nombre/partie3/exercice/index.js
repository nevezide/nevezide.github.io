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

let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
