
let liste_blanche = [
  'larissa@gmail.com',
  'hacker44@gmail.com'
];

let email_recus = [{
  from: 'toto@gmail.com',
  content: 'Bonjour toi !',
},{
  from: 'larissa@gmail.com',
  content: 'Hé Salut !',
},{
  from: 'hacker44@gmail.com',
  content: 'Je suis un hacker !',
},{
  from: 'hacker@gmail.com',
  content: 'Piratage en cours...',
}];


// 1. Ecrire la fonction estDansListeBlanche qui prend un email
// et retourne true si l'email est dans la liste blanche,
// false dans le cas contraire


// 2. Ecrire la fonction filtrerEmailRecus qui prend la liste email_recus
// et retourne uniquement les emails contenus dans liste_blanche


/***************** Programme principal ***************/

// Filtre les email reçus et récupère la liste d'email filtrée
const boite_reception = filtrerEmailRecus(email_recus);

// Afficher le contenu de la boite de réception
console.log(boite_reception);
