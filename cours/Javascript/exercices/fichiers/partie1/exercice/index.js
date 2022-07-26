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
1. Implémenter la classe SystemElement avec comme propriétés :
  - name : le nom de l'élément
  - rights : les droits d'accès de l'élément (de la forme "rwx")
2. Implémenter la classe Dossier (héritant de SystemElement) avec comme propriétés :
  - elements : un tableau contenant des éléments (Fichier ou Dossier)
3. Implémenter la classe Fichier (héritant de SystemElement) avec comme propriétés :
  - content : le contenu du fichier (exemple : "Hello world")

*/
/**************************************************************/
/*                    !!! DO NOT EDIT !!!                     */
/**************************************************************/
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
