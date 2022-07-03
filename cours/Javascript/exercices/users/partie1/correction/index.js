
// A partir des éléments présents dans toto,
// afficher le message suivant :

// Bonjour, je m'appelle Toto Dupont, j'ai 37 ans

let toto = {
  nom: 'Dupont',
  prenom: 'Toto',
  age: 37
};

console.log(
  'Bonjour, je m\'appelle ' +
  toto.prenom + ' ' +
  toto.nom + ', ' +
  'j\'ai ' + toto.age + ' ans'
);
