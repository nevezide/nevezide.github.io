/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

On souhaite générer des rectangles de taille aléatoire.

TODO
- Créer la classe rectangle
- Créer le constructeur qui prend en paramètre
  les dimensions du rectangle (hauteur et largeur)

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
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  );
  console.log(rect);
}
