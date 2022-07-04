
// Collection d'utilisateurs
let users = [];

// TODO: Ecrire la fonction creerUtilisateur, qui
// - Demande à l'utilisateur son nom, prenom, age
// - Créer l'objet user avec ces 3 propriétés
// - Ajouter l'objet user à la collection users
// - Retourne l'objet user


// TODO: Ecrire la fonction creerUtilisateur, qui
// - Prend en paramètres : nom, prenom et age
// - Affiche le message "Bonjour, je m'appelle <prenom> <nom>, j'ai <age> ans"


/******************* Programme principal *******************/ 
// Créer un utilisateur
let user = creerUtilisateur();

// Afficher Bonjour
afficherBonjourUtilisateur(user.nom, user.prenom, user.age);
