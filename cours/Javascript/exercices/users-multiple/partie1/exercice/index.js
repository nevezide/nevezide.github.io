
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



/**
 * Fonction créer un utilisateur
 * (idem exercice users / partie 2)
 * 
 * - Demande à l'utilisateur son nom, prenom, age
 * - Créer l'objet utilisateur avec ces 3 propriétés
 * - Ajouter l'utilisateur à la collection users
 *
 * @returns utilisateur créé
 */



/******************* Programme principal *******************/ 
// Créer un utilisateur
let user = creerUtilisateur();

// Afficher Bonjour
afficherBonjourUtilisateur(user.nom, user.prenom, user.age);
