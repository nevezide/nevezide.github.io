/*
 * En JS tout est objet.
 * Nous avons vu les tableaux.
 * Un tableau est un type d'objet.
 * 
 * Un objet est comme une armoire avec des tiroirs,
 *   où chaque tiroir est identifié par une clé (<> pour chaque tiroir)
 * 
 * On peut mettre ce qu'on veut comme clé : toto, titi, tata, ...
 * Un tableau est un type d'objet avec comme clé un index : 0, 1, 2, 3, 4, 5, ...
 * 
 * Un tableau représente une liste de quelque chose :
 *   conceptuellement ce qq chose est un type de données (string, nombre, objet, ...)
 * Un objet représente qq chose (ex: une personne, un animal, une facture, ...)
 *   qui a des propriétés (nom, couleur, un montant, ...) de types différents
 * 
*/

let toto = {
  nom: "Toto",
  age: 22,
  ville: "Nantes"
};

// On crée un objet toto
// qui contient 3 propriétés :
// nom, age et ville

console.log(toto['nom']);// Toto

console.log(toto.nom);// Toto

toto["nom"] = "Titi";// toto.nom est égal à "Titi"

toto.nom = "Tata";// toto.nom est égal à "Tata"


/**************** Parcourir un objet ***********/
for (const key in toto) {
  const element = toto[key];
  console.log(element);
}

/**************** Cas des tableaux *************/

let titi = ['a', 'b', 'c'];

/* Un tableau en JS est la même chose que

let titi = {
  0: 'a',
  1: 'b',
  2: 'c'
};

*/
