// Voici une collection : cad un tableau d'objets de même type
// Tu vois la syntaxe ?

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  },{
    nom: "Durant",
    prenom: "Georges",
    age: 52
  },{
    nom: "Ololo",
    prenom: "Léa",
    age: 5
  },{
    nom: "Jeloie",
    prenom: "Théo",
    age: 12
  }
];

// Pour chaque user, afficher le message suivant
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(
    'Il y a ' + user.prenom + ' ' +
    user.nom + ', ' + user.age + ' ans'
  );
}

// Puis calculer et afficher la moyenne des âges
  // INFO : Moyenne = SOMME(age) / nombre de users
let moyenne = 0;
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  moyenne += user.age;
}

moyenne /= users.length;

console.log('Moyenne d\'âge ' + moyenne + ' ans');
