import SystemElement from './SystemElement.js';

class Fichier extends SystemElement {
  content;

  constructor(name, content = '') {
    super(name);
    this.content = content;
  }
}

export default Fichier;
