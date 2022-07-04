/**
 * Implémenter une fonction qui retourne true si l'année passée en paramètre
 * est bissextile.
 * 
 * Pour savoir si une année est bissextile, procédez comme suit :
 * 1. Si l'année est divisible par 4, passez à l'étape 2. ...
 * 2. Si l'année est divisible par 100, passez à l'étape 3. ...
 * 3. Si l'année est divisible par 400, passez à l'étape 4. ...
 * 4. L'année est une année bissextile (elle compte 366 jours).
 */

// Tant que l'utilisateur ne saisi pas une année
  // Demander de saisir une année
let annee;
while(isNaN(annee)) {
  annee = Number(prompt('Saisir une année'));
}

/**
 * Fonction isBissextile
 *
 * @param {Number} annee
 * @returns true si l'année est bissextile, false sinon
 */
function isBissextile(annee) {
  if (annee % 4 > 0) {
    return false;
  }
  if (annee % 100 > 0) {
    return false;
  }
  if (annee % 400 > 0) {
    return false;
  }
  return true;
}

// Si l'année est bissextile
if (isBissextile(annee)) {
  // Afficher le message l'année xxxx est bissextile
  console.log('L\'année ' + annee + ' est bissextile, elle a 366 jours');
} 
// Sinon
else {
  // Afficher le message l'année xxxx n'est pas bissextile
  console.log('L\'année ' + annee + ' n\'est pas bissextile, elle a 365 jours');
}
