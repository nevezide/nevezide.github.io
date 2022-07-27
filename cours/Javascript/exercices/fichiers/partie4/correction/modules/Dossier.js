import SystemElement from './SystemElement.js';

class Dossier extends SystemElement {
  elements;

  constructor(name) {
    super(name);
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  removeElement(element) {
    // On recherche dans les elements du dossier le fichier à supprimer
    let index = this.elements.indexOf(element);
    // Si on l'a trouvé, on le supprime
    if (index > -1) {
      this.elements.splice(index, 1);
      return;
    }

    // Si on l'a pas trouvé, on recherche dans les sous-dossiers
    for (let i = 0; i < this.elements.length; i++) {
      let currentElement = this.elements[i];
      if (currentElement instanceof Dossier) {
        currentElement.removeElement(element);
      }
    }
  }

  findElement(name) {
    // On parcoure la liste des elements du dossier
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];

      // Si on a trouvé le fichier, on le retourne
      if (element.name === name) {
        return element;
      }
      // Si on a trouvé un sous-dossier, on continue la recherche dans ce dossier
      else if (element instanceof Dossier) {
        let foundElement = element.findElement(name);
        if (foundElement) {
          return foundElement;
        }
      }
    }
  }

  listElements(dossierCourant = '.') {
    // On parcoure la liste des elements du dossier
    return this.elements.forEach(element => {
      // Si on a trouvé un sous-dossier, on affiche son contenu
      if (element instanceof Dossier) {
        element.listElements(`${dossierCourant}/${element.name}`);
        return;
      }
      // Si on a trouvé un fichier, on affiche son chemin
      console.log(`${dossierCourant}/${element.name}`);
    });
  }
}

export default Dossier;
