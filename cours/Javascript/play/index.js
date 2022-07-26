
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

class Charlotte extends Moule {
  constructor(nbreBiscuits, fruits) {
    super('rond', 20, 30);
    this.nbreBiscuits = nbreBiscuits;
    this.fruits = fruits;
  }

  faireCharlotte() {
    console.log(`Le moule à charlotte est ${this.forme} avec une hauteur de ${this.hauteur} et une largeur de ${this.largeur}`);
    console.log(`La charlotte avec ${this.nbreBiscuits} biscuits aux ${this.fruits} est prête`);
  }
}

class Tourte extends Moule {
  constructor(fruits) {
    super('rond', 3, 40);
    this.fruits = fruits;
  }

  faireTourte() {
    console.log(`Le moule à tourte est ${this.forme} avec une hauteur de ${this.hauteur} et une largeur de ${this.largeur}`);
    console.log(`La tourte aux ${this.fruits} est prête`);
  }
}

let gateau1 = new Charlotte(30, 'fraises');
gateau1.faireCharlotte();

let gateau2 = new Tourte('cerises');
gateau2.faireTourte();

console.log(
  gateau1,
  gateau2
);
