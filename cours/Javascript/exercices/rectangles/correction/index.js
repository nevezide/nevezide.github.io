/**************************************************************/
/*                          Classes                           */
/**************************************************************/

// Créer la classe rectangle
class Rectangle {

  // Créer le constructeur qui prend en paramètre les dimensions du rectangle
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Créer un accesseur qui retourne la surface du rectangle,
  get area() {
    return this.width * this.height;
  }
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// DO NOT EDIT
for (let i = 0; i < 10; i++) {
  let rect = new Rectangle(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  );
  console.log(rect.area);
}
