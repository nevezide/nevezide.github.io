
// Collection d'utilisateurs
let users = [];

/**
 * Fonction créer un utilisateur
 * 
 * - Demande à l'utilisateur son nom, prenom, age
 * - Créer l'utilisateur
 * - Ajouter l'utilisateur à la collection
 *
 * @returns utilisateur créé
 */
 function creerUtilisateur() {
  let nom = prompt("Quel est ton nom ?");
  let prenom = prompt("Quel est ton prénom ?");
  let age = Number(prompt("Quel est ton âge ?"));

  let user = {
    nom,
    prenom,
    age
  };

  users.push(user);

  return user;
}

/**
 * Fonction Afficher Bonjour
 * 
 * - Afficher le message "Bonjour, je m'appelle <prenom> <nom>, j'ai <age> ans"
 *
 * @param {String} nom 
 * @param {String} prenom 
 * @param {Number} age 
 */
function afficherBonjourUtilisateur(nom, prenom, age) {
  console.log(
    'Bonjour, je m\'appelle ' +
    prenom + ' ' +
    nom + ', ' +
    'j\'ai ' + age + ' ans'
  );
}

/**
 * Fonction calculer moyenne ages
 */
function calculerMoyenneAges() {
  let moyenne = 0;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    moyenne += user.age;
  }

  moyenne /= users.length;

  return moyenne;
}


/******************* Programme principal *******************/
for (let i = 0; i < 3; i++) {
  // Créer 3 utilisateurs
  let user = creerUtilisateur();
  // Afficher pour chacun d'eux Bonjour
  afficherBonjourUtilisateur(user.nom, user.prenom, user.age);
};

// Calculer la moyenne d'âge et l'afficher
let moyenne = calculerMoyenneAges();
console.log('Moyenne d\'âge ' + moyenne + ' ans');