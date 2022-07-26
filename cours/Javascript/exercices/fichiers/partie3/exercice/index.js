/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de créer un système de fichiers.
3 choses seront à implémenter :
- SystemElement : contient les choses en commun aux fichiers et dossiers,
cad le nom et les droits d'accès.
- Fichier : contient le contenu d'un fichier.
- Dossier : contient des fichiers et des dossiers.

TODO
1. Dans la classe Dossier, ajouter une méthode findElement(name) qui retourne l'élément dont le nom est name.

2. Dans la classe Dossier, ajouter une méthode removeElement(element) qui supprime l'élément passé en paramètre.

*/
/**************************************************************/
/*                    !!! DO NOT EDIT !!!                     */
/**************************************************************/
import Dossier from './modules/Dossier.js';
import Fichier from './modules/Fichier.js';

// Création du dossier racine
let dossierRacine = new Dossier('root');

// Ajout de ficheirs dans le dossier racine
dossierRacine.addElement(new Fichier('fichier1.txt'));
dossierRacine.addElement(new Fichier('fichier2.txt'));

// Création d'un dossier "dossier1" dans le dossier racine
// avec des fichiers dans ce dossier
let dossier1 = new Dossier('dossier1');
dossier1.addElement(new Fichier('fichier3.txt', 'Blabla'));
dossier1.addElement(new Fichier('fichier4.txt'));
dossierRacine.addElement(dossier1);

// Affichage de l'arborescence du dossier racine
let elements = dossierRacine.listElements();
console.log(elements);

// Recherche d'un fichier dans le dossier racine
let fichier3 = dossier1.findElement('fichier3.txt');
// Affichage du contenu du fichier trouvé
console.log(fichier3.content);
// Suppression du fichier trouvé
dossier1.removeElement(fichier3);

// Affichage de l'arborescence du dossier racine
elements = dossierRacine.listElements();
console.log(elements);
