// Voici une collection : cad un tableau d'objets de même type
// Tu vois la syntaxe ?

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  }
];

// Demander à l'utilisateur de saisir son prenom, nom, age
// NOTE : penser à gérer les types de valeurs
let nom = prompt('Quel est ton nom ?');
let prenom = prompt('Quel est ton prenom ?');
let age = Number(prompt('Quel est ton age ?'));

// Puis créer un objet (comme celui déjà présent) avec ces 3 éléments
let user = {
  nom,
  prenom,
  age
};

// Enfin, l'ajouter à la collection
users.push(user);

// Pour finir, afficher le contenu de la collection
console.log(users);
