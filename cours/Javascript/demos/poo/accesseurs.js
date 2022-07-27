
class Moule {
  #forme;

  constructor(f, h, l) {
    this.#forme = f;
    this.hauteur = h;
    this.largeur = l;
  }

  get forme() {
    console.log('get forme');
    return this.#forme;
  }

  set forme(f) {
    console.log('set forme');
    this.#forme = f;
  }
}

let gateau1 = new Moule('rond', 20, 30);

console.log(
  gateau1.forme // Call getter
);

gateau1.forme = 'carré' // Call setter

console.log(
  gateau1.forme // Call getter
);
