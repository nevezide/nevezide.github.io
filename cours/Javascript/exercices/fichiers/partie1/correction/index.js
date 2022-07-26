import Dossier from './modules/Dossier.js';
import Fichier from './modules/Fichier.js';

// Création du dossier racine
let dossier = new Dossier('root');
console.log(dossier);

// Création d'un fichier sans contenu
let fichier1 = new Fichier('fichier1.txt');
console.log(fichier1);

// Création d'un fichier avec contenu
let fichier2 = new Fichier('fichier1.txt', 'Blabla');
console.log(fichier2);
