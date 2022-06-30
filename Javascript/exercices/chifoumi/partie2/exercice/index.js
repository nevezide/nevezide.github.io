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
let randomChoice;
let computerChoice = '';
let userChoice = '';
let resultat = '';
let computerWins = 0;
let userWins = 0;
let i = 0;

while (i < 3) {
  randomChoice = Math.ceil(Math.random() * 3);

  if (randomChoice === 0) {
    computerChoice = 'feuille';
  } else if (randomChoice === 1) {
    computerChoice = 'pierre';
  } else {
    computerChoice = 'ciseaux';
  }

  do {
    userChoice = prompt("Choisissez entre feuille, pierre et ciseaux");
  } while ((userChoice !== 'feuille') && (userChoice !== 'pierre') && (userChoice !== 'ciseaux'))

  if (computerChoice === userChoice) {
    resultat = 'égalité';
  } else if (computerChoice === 'feuille') {
    if (userChoice === 'pierre') {
      resultat = 'ordinateur gagne';
      computerWins++;
    } else {
      resultat = 'vous gagnez';
      userWins++;
    }
  } else if (computerChoice === 'pierre') {
    if (userChoice === 'ciseaux') {
      resultat = 'ordinateur gagne';
      computerWins++;
    } else {
      resultat = 'vous gagnez';
      userWins++;
    }
  } else {
    if (userChoice === 'feuille') {
      resultat = 'ordinateur gagne';
      computerWins++;
    } else {
      resultat = 'vous gagnez';
      userWins++;
    }
  }

  alert(
    "L'ordinateur a choisi " + 
    computerChoice +
    " et vous avez choisi " +
    userChoice +
    " donc " +
    resultat +
    ", score ordinateur - vous : " +
    computerWins +
    " - " +
    userWins
  );

  i++;
}
