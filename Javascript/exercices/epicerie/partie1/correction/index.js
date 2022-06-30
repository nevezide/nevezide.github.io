/* Epicerie
 * - Un tableau contient une liste d'articles
 * - Les articles disponibles sont affichés au client
 * - Le programme demande au client quel article il veut acheter
 * - Le client choisi un article : il disparait de la liste d'articles
 * - Les articles disponibles sont à nouveau affichés au client 
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

// Afficher à nouveau la liste des articles disponibles
console.log(articles);
