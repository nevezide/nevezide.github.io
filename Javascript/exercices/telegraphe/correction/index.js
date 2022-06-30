let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
let codeMorse = [
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
  "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
  "-----"
];

// Demander à l'utilisateur de saisir un texte à télégraphier
let userInput = prompt("Saisir le texte à télégraphier");

// Convertir le texte en code morse
let userInputArray = userInput.split("");
let userInputArrayLength = userInputArray.length;
let outputCodeMorse = [];

for (let i = 0; i < userInputArrayLength; i++) {
  let userInputArrayElement = userInputArray[i];
  let position = alphabet.indexOf(userInputArrayElement);

  outputCodeMorse.push(
    codeMorse[position]
  );
}


// Afficher le code morse dans la console
console.log(outputCodeMorse);
