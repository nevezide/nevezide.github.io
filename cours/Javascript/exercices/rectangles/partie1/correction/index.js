/**************************************************************/
/*                          Classes                           */
/**************************************************************/

// Créer la classe rectangle
class Rectangle {

  // Créer le constructeur qui prend en paramètre
  // les dimensions du rectangle (hauteur et largeur)
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

for (let i = 0; i < 10; i++) {
  let rect = new Rectangle(
    Math.ceil(Math.random() * 10),
    Math.ceil(Math.random() * 10)
  );
  console.log(rect);
}
