
// Demander à l'utilisateur d'entrer un premier nombre
let userInput1 = Number(
  prompt("Entrez un nombre")
);
// Demander à l'utilisateur d'entrer un opérateur
let userOperator = prompt("Entrez un opérateur");

// Demander à l'utilisateur d'entrer un second nombre
let userInput2 = Number(
  prompt("Entrez un second nombre")
);

// Vérifier que l'utilisateur a bien entré un nombre
// (lui afficher un message si c'est pas le cas)
if(isNaN(userInput1) || isNaN(userInput2)) {
  alert("Vous n'avez pas entré un nombre");
}
// Vérifier que l'utilisateur a bien entré un opérateur valide (+ - * /)
// (lui afficher un message si c'est pas le cas)
// Effectuer l'opération demandée en fonction de l'opérateur
// Afficher le résultat de l'opération à l'utilisateur
else if (userOperator === "+") {
  alert(userInput1 + userInput2);
} else if (userOperator === "-") {
  alert(userInput1 - userInput2);
} else if (userOperator === "*") {
  alert(userInput1 * userInput2);
} else if (userOperator === "/") {
  alert(userInput1 / userInput2);
} else {
  alert("Vous n'avez pas entré un opérateur autorisé");
}
