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
1. Dans la classe Dossier, ajouter une méthode addElement qui prend en paramètre un élément (Fichier ou Dossier)
et qui l'ajoute à la liste des éléments de ce dossier.
2. Dans la classe Dossier, ajouter une méthode listElements qui affiche une liste des éléments de ce dossier.
Ils seront affichés sous cette forme :
./fichier1.txt
./fichier2.txt
./dossier1/fichier3.txt
./dossier1/fichier4.txt

*/
/**************************************************************/
/*                    !!! DO NOT EDIT !!!                     */
/**************************************************************/
import Dossier from './modules/Dossier.js';
import Fichier from './modules/Fichier.js';

// Création du dossier racine
let dossierRacine = new Dossier('root');

// Ajout de fichiers dans le dossier racine
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
/** Voici ce qui doit s'afficher

./fichier1.txt
./fichier2.txt
./dossier1/fichier3.txt
./dossier1/fichier4.txt

*/
