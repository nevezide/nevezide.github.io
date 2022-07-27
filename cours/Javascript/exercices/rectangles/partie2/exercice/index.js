/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

On souhaite générer des rectangles de taille aléatoire.
Pour chacun d'eux, on souhaite afficher leur surface.

TODO
- Créer la classe rectangle
- Créer le constructeur qui prend en paramètre
  les dimensions du rectangle (hauteur et largeur)
- Créer une méthode qui retourne la surface du rectangle

*/
/**************************************************************/
/*                          Classes                           */
/**************************************************************/

// Le code à écrire ici... 

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// DO NOT EDIT

for (let i = 0; i < 10; i++) {
  let rect = new Rectangle(
    Math.ceil(Math.random() * 10),
    Math.ceil(Math.random() * 10)
  );
  console.log(rect.calculateArea());
}
