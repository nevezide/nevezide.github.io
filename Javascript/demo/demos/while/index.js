
let toto = "";

while (toto !== "stop") {
  prompt("Entrez votre texte :");
}

// Tant que toto n'est pas égal à "stop",
// on demande à l'utilisateur de saisir un texte

while (true) {
  let toto = prompt("Entrez votre texte :");
  if (toto === "stop") {
    break;
  }
}

while(true) {
  let toto = prompt("Entrez votre texte :");
  if (toto !== "stop") {
    continue;
  }
  break;
}
