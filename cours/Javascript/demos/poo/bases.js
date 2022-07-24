/**************************************************************/
/*         Créer la classe Moule avec ses propriétés          */
/**************************************************************/

class Moule {
  forme;
  hauteur;
  largeur;
}

// "class" permet de déclarer une classe

// Instanciation de la classe avec "new" suivi du nom de la classe
// => Créer un objet avec cette classe
let gateau = new Moule();
console.log(gateau);

// Explication de ce qui se passe :

// 1. Un objet est unique
let gateau1 = new Moule();
let gateau2 = new Moule();
console.log(gateau1 === gateau2); // false

// 2. Les propriétés sont vides par défaut (pas de valeur assignée)

// 3. On a vu que pour créér un objet, on utilise un constructeur pour dire à la machine comment créer l'objet.
// Or on a pas fait cela, pourquoi ?
// Réponse : Il utilise le constructeur par défaut de Object
// => Montrer le constructeur par défaut de Object

/**************************************************************/
/*         Ajouter un constructeur à la classe Moule          */
/**************************************************************/

class Moule {
  forme;
  hauteur;
  largeur;

  constructor(f, h, l) {
    this.forme = f;
    this.hauteur = h;
    this.largeur = l;
  }
}

// 1. "constructor" est une méthode permettant de créer un objet

// 2. "this" permet de récupérer l'objet courant (et donc de manipuler ses propriétés)

// A votre avis, que va retourner cette ligne ?
let gateau3 = new Moule();
console.log(gateau3);

// Mieux :)
let gateau4 = new Moule('rond', 10, 20);
console.log(gateau4);

/**************************************************************/
/*               Ajouter une méthode de classe                */
/**************************************************************/

// Dans une classe on peut déclarer des méthodes (on ne parle jamais de fonction dans une classe)

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

let gateau5 = new Moule('rond', 10, 20);
console.log(
  gateau5.faireGonfler()
);

/**************************************************************/
/*                Exercice dirigé, puis pratique              */
/**************************************************************/
