// On ne s'étale pas trop là dessus
// A montrer en toute fin de journée

// Soit la classe suivante :
class Moule {
  forme;
  hauteur;
  largeur;

  constructor(f, h, l) {
    this.forme = f;
    this.hauteur = h;
    this.largeur = l;
  }

  faireGonfler() {
    let hauteurFinale = this.hauteur * 1.1;
    console.log(`Gonfle jusqu\'à ${hauteurFinale} !`);
  }
}

// Constructeur de la classe Moule
function Moule(f, h, l) {
  this.forme = f;
  this.hauteur = h;
  this.largeur = l;
}

// Méthode faireGonfler de la classe Moule
Moule.prototype.faireGonfler = function() {
  let hauteurFinale = this.hauteur * 1.1;
  console.log(`Gonfle jusqu\'à ${hauteurFinale} !`);
}

let m = new Moule("cercle", 1, 1);

// Présenter la chaine des prototypes (console du navigateur)
// Moule -> Object
// Date -> Object
