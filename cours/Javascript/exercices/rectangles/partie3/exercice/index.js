/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

On souhaite spécifier la couleur et la retourner
après avoir créé le rectangle.

TODO
- Créer un assesseur qui spécifie la couleur du rectangle
- Créer un assesseur qui retourne la couleur du rectangle

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

  rect.color = 'red';
  console.log(rect.color);
}
