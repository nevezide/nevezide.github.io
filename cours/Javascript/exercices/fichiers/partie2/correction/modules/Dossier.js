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
