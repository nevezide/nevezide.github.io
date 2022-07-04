
// Collection d'utilisateurs
let users = [];

/**
 * Fonction Afficher Bonjour
 * (idem exercice users / partie 1)
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
 * Fonction créer un utilisateur
 * (idem exercice users / partie 2)
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


/******************* Programme principal *******************/ 
// Créer un utilisateur
let user = creerUtilisateur();

// Afficher Bonjour
afficherBonjourUtilisateur(user.nom, user.prenom, user.age);
