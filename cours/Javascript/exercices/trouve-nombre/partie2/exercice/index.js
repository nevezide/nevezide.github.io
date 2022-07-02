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
