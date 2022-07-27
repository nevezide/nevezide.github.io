/**************************************************************/
/*                          Classes                           */
/**************************************************************/

// Créer la classe rectangle
class Rectangle {

  // Créer le constructeur qui prend en paramètre
  // les dimensions du rectangle (hauteur et largeur)
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  // Créer une méthode qui retourne la surface du rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Créer un assesseur qui spécifie la couleur du rectangle
  set color(c) {
    this._color = c;
  }

  // Créer un assesseur qui retourne la couleur du rectangle
  get color() {
    return this._color;
  }
}

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
