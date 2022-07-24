
/**************************************************************/
/*               Créer un module et l'utiliser                */
/**************************************************************/

class Composant {
    constructor(c) {
        this.content = c;
    }
    render() {
        return `
          <div class="composant">
            ${this.content}
          </div>
        `;
    }
}

// 1. Ajouter le composant dans le HTML
// <script type="module" src="composant.js"></script>

// 2. Créer un nouveau composant qui affiche "Hello World"
// let composant = new Composant('Hello World');
// document.write(composant.render());
