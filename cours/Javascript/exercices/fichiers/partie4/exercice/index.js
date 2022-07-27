/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de supprimer un élément dans un dossier

TODO
Dans la classe Dossier, ajouter une méthode removeElement(element)
qui supprime l'élément passé en paramètre.
NOTE : Si le fichier se trouve dnas un sous-dossier,
il doit être supprimé dans ses élements.

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
dossierRacine.listElements();

// Recherche d'un fichier dans le dossier racine
let fichier3 = dossierRacine.findElement('fichier3.txt');
// Affichage du contenu du fichier trouvé
console.log(fichier3.content);
// Suppression du fichier trouvé
dossierRacine.removeElement(fichier3);

// Affichage de l'arborescence du dossier racine
dossierRacine.listElements();
