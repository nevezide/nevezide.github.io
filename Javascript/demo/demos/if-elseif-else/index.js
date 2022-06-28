
let i = 3;

if (i === 2) {// i === 2 => false
  console.log("i est égal à 2");
} else if (i === 3) {// i === 3 => true
  console.log("i n'est pas égal à 2");// Ce code sera exécuté
} else if (i === 3) {
  console.log("i n'est pas égal à 2");
}

// Si le test (i === 2) est vrai,
// on exécute le code qui suit le if, entre { et }

// Si le test (i === 2) est faux,
// Et que le test (i === 3) est vrai,
// on exécute le code qui suit le else if, entre { et }

// Si le test (i === 2) est faux,
// Et que le test (i === 3) est faux,
// on exécute le code qui suit le else, entre { et }
