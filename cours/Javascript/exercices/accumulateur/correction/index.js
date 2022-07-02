/********** Exercice accumulateur **********/
// L'accumulateur est un compteur qui s'incrémente ou se décrémente.
let acc = 0;
let saisie = "";
let currentOperator = "+";

// Tant que l'utilisateur n'a pas saisi "stop"
while(true) {
  // On demande à l'utilisateur de saisir une valeur ou une commande (nothing, stop / + / -)
  let saisie = prompt("Entrez un nombre ou une commande");
  let saisieNum = Number(saisie);

  if (saisie === "nothing") {
    continue;
  }

  // Si la saisie est un nombre
  if (!isNaN(saisieNum)) {
    // Si l'opérateur courant est "+", on ajoute la valeur à l'accumulateur
    if (currentOperator === "+") {
      acc += saisieNum;
    }
    // Si l'opérateur courant est "-", on soustrait la valeur à l'accumulateur
    else if (currentOperator === "-") {
      acc -= saisieNum;
    }
  }
  // Si la saisie est la commande "-", on change l'opérateur courant en "-"
  else if(saisie === "-") {
    currentOperator = "-";
  }
  // Si la saisie est la commande "+", on change l'opérateur courant en "+"
  else if(saisie === "+") {
    currentOperator = "+";
  }
  // Si la saisie est la commande "stop", on arrête la boucle
  else if(saisie === "stop") {
    break;
  }
  
  // On affiche la valeur de l'accumulateur
  console.log(acc);
}
