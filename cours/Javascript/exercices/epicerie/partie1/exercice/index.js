/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/* 
Epicerie

Je suis un épicier, je possède une liste d'articles à vendre.
Un client vient consulter ma liste d'articles.
Il peut ou non en acheter un.
Lorsqu'il décide d'en acheter un, celui-ci disparait de ma liste.

// TODO
- Un tableau contient la liste d'articles à vendre (dans Data).
- La liste d'articles est affichée au client.
- Le programme demande au client quel article il veut acheter
- Le client choisi un article à acheter :
  - si l'article est dans la liste : afficher 'ok' et le supprimer de la liste d'articles
  - sinon afficher 'Article indisponible...'
- Les articles sont à nouveau affichés au client 

NOTE : Pour des raisons de simplicité,
on simulera la suppression d'un article de la liste
en le remplaçant par une chaine vide '' dans le tableau.

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

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

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...
