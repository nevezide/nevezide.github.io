
let toto = ["banane", "pomme", "poire"];
const tailleTableauToto = toto.length;

for(let i = 0; i < tailleTableauToto; i++) {
  let element = toto[i];// On récupère l'élément du tableau à l'index i
  console.log(element);// Affiche chaque élément du tableau
}

// Phase d'initialisation : let i = 0;

// Condition de fin de boucle : i < tailleTableauToto;
// Tant qu'elle est vraie,
// on continue d'exécuter le code entre { et } : console.log(element);

// Phase de modification : i++;

/************** Ce qu'il se passe *************/

// Initialisation
// let i = 0;
// const tailleTableauToto = 3;

// Première itération
if (i < tailleTableauToto) { // i < tailleTableauToto => true
  let element = toto[i]; // element = toto[0] => "banane"
  console.log(element);// 0
}

// Seconde itération
i = i + 1; // i = 1
if (i < tailleTableauToto) { // i < tailleTableauToto => true
  let element = toto[i]; // element = toto[1] => "pomme"
  console.log(element);// 1
}

// Troisième itération
i = i + 1; // i = 2
if (i < tailleTableauToto) { // i < tailleTableauToto => true
  let element = toto[i]; // element = toto[2] => "poire"
  console.log(element);// 2
}

// Dernière itération
i = i + 1; // i = 3
if (i < tailleTableauToto) { // i < tailleTableauToto => false
  let element = toto[i];// Ce code ne sera pas exécuté
  console.log(element);// Ce code ne sera pas exécuté
}

// Fin de boucle :
// on exécute les instructions qui suivent la boucle
