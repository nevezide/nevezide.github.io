
/* 
  Règles :
  - Feuille gagne contre Pierre : La feuille enveloppe la pierre
  - Pierre gagne contre Ciseaux : La pierre détruit les ciseaux
  - Ciseaux gagne contre Feuille : Les ciseaux coupent la feuille

  Algorithme à implémenter :
    - Choix aléatoire de l'ordinateur entre : feuille / pierre / ciseaux
    - Demander à l'utilisateur son choix entre : feuille / pierre / ciseaux
    - Déterminer le vainqueur (égalité si l'ordinateur et le joueur ont choisi la même chose)
    - Afficher le vainqueur
  */
let randomChoice = Math.ceil(Math.random() * 3);
let computerChoice = '';
let userChoice = '';
let resultat = '';

if (randomChoice === 0) {
  computerChoice = 'feuille';
} else if (randomChoice === 1) {
  computerChoice = 'pierre';
} else {
  computerChoice = 'ciseaux';
}

userChoice = prompt("Choisissez entre feuille, pierre et ciseaux");

if (computerChoice === userChoice) {
  resultat = 'égalité';
} else if (computerChoice === 'feuille') {
  if (userChoice === 'pierre') {
    resultat = 'ordinateur gagne';
  } else {
    resultat = 'vous gagnez';
  }
} else if (computerChoice === 'pierre') {
  if (userChoice === 'ciseaux') {
    resultat = 'ordinateur gagne';
  } else {
    resultat = 'vous gagnez';
  }
} else {
  if (userChoice === 'feuille') {
    resultat = 'ordinateur gagne';
  } else {
    resultat = 'vous gagnez';
  }
}

alert(
  "L'ordinateur a choisi " + 
  computerChoice +
  " et vous avez choisi " +
  userChoice +
  " donc " +
  resultat
);
