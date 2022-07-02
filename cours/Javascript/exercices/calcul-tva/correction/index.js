/**
 * Implémenter le code qui calcule la TVA des montants ci-dessous :
 * - Utiliser une fonction pour calculer la TVA :
 * elle prend un montant en paramètre et retourne la TVA calculée
 */

const TVA = 19.6;

const montantsHT = [12, 15, 20, 25, 30];

function calculTva(montantsHT) {
  return montantsHT * (TVA / 100);
}

for(var i = 0; i < montantsHT.length; i++) {
  console.log(calculTva(montantsHT[i]));
}

/* Résultat attendu : console.log([
   2.352,
   2.94,
   3.92,
   4.9,
   5.88
 ])
*/
