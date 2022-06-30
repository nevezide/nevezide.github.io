/* Epicerie - Variante de la partie 1
 * - On propose au client d'acheter un article
 *   tant qu'il y en a de disponibles
 */

const articles = [
  'Chips',
  'Saucisson',
  'Glace',
  'Fraises',
  'Vin',
  'Sucre',
  'Bière',
  'Mouchoirs'
];

let nbArticlesDisponibles = articles.length;

// Tant qu'il reste des articles disponibles dans le tableau
// (cad qui n'ont pas été remplacés par une chaine vide '')
while (nbArticlesDisponibles > 0) {

  // Afficher la liste des articles disponibles
  console.log(articles);

  // Demande au client quel article il veut acheter
  let articleVoulu = prompt('Quel article voulez-vous acheter ?');

  // Vérifie si l'article est disponible
  let i;
  for (i = 0; i < articles.length; i++) {
    if (articleVoulu === articles[i]) {
      // Si oui, afficher Ok
      console.log('Ok');
      // Remplacer par une chaine vide '' dans le tableau
      articles[i] = '';
      break;
    }
  }

  if (i === articles.length) {
    // Sinon, afficher 'Article indisponible...
    console.log('Article indisponible...');
  }

  nbArticlesDisponibles = 0;
  for (let j = 0; j < articles.length; j++) {
    if (articles[j] !== '') {
      nbArticlesDisponibles++;
    }
  }
}

console.log('Epicerie vide :/');
