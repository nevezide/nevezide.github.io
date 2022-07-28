// extends
// super : constructeur et propriétés et méthodes du parent
// poly morphisme ?

/**************************************************************************************/
/*         Créer la classe Charlotte qui hérite de Moule avec ses propriétés          */
/**************************************************************************************/

class Charlotte extends Moule {
  constructor(nbreBiscuits, fruits) {
    super(20, 30, 'rond');
    this.nbreBiscuits = nbreBiscuits;
    this.fruits = fruits;
  }

  faireCharlotte() {
    console.log(`Le moule à charlotte est ${this.forme} avec une hauteur de ${this.hauteur} et une largeur de ${this.largeur}`);
    console.log(`La charlotte avec ${this.nbreBiscuits} biscuits aux ${this.fruit} est prête`);
  }
}

// 1. "extends" permet de créer une classe qui hérite de la classe parente

// 2. "super" permet d'appeler le constructur de la classe parente

/***********************************************************************************/
/*         Créer la classe Tourte qui hérite de Moule avec ses propriétés          */
/***********************************************************************************/

class Tourte extends Moule {
  constructor(fruits) {
    super(3, 40, 'rond');
    this.fruits = fruits;
  }

  faireTourte() {
    console.log(`Le moule à tourte est ${this.forme} avec une hauteur de ${this.hauteur} et une largeur de ${this.largeur}`);
    console.log(`La tourte aux ${this.fruits} est prête`);
  }
}

const gateau1 = new Charlotte(3, 'fraises');
gateau1.faireGonfler();// Méthode de la classe parente
gateau1.faireCharlotte();

const gateau2 = new Tourte('cerises');
gateau2.faireGonfler();// Méthode de la classe parente
gateau2.faireTourte();

// Exercice animaux
