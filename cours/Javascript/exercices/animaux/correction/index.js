/**************************************************************/
/*                          Classes                           */
/**************************************************************/

class Animal {
  // Créer le constructeur qui prend en paramètre le cri de l'animal
  constructor(cri) {
    this.cri = cri;
  }

  // Créer la méthode qui affiche le cri de l'animal
  crier() {
    console.log(this.cri);
  }
}

// Créer la classe chat qui hérite de Animal
class Chat extends Animal {
  // Créer le constructeur qui prend en paramètre le cri du chat
  constructor() {
    // Appeler le constructeur de la classe parente
    super("Miaouuuu !");
  }
}

// Créer la classe chien qui hérite de Animal
class Chien extends Animal {
  // Créer le constructeur qui prend en paramètre le cri du chien
  constructor() {
    // Appeler le constructeur de la classe parente
    super("Wouafff !");
  }
}

// Créer la classe vache qui hérite de Animal
class Vache extends Animal {
  // Créer le constructeur qui prend en paramètre le cri de la vache
  constructor() {
    // Appeler le constructeur de la classe parente
    super("Meuuuuh !");
  }
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// DO NOT EDIT
let chat = new Chat();
chat.crier();
let chien = new Chien();
chien.crier();
let vache = new Vache();
vache.crier();
