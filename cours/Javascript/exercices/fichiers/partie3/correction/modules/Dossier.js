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
    this.elements.splice(
      this.elements.indexOf(element),
      1
    );
  }

  findElement(name) {
    return this.elements.find((element) => {
      if (element instanceof Dossier) {
        return element.findElement(name);
      }
      return element.name === name;
    });
  }

  listElements(dossierCourant = '.') {
    return this.elements.forEach(element => {
      if (element instanceof Dossier) {
        element.listElements(`${dossierCourant}/${element.name}`);
        return;
      }
      console.log(`${dossierCourant}/${element.name}`);
    });
  }
}

export default Dossier;
