
/**************************************************************/
/*                            Data                            */
/**************************************************************/

const TVA = 19.6;

const montantsHT = [12, 15, 20, 25, 30];

/**************************************************************/
/*                         Fonctions                          */
/**************************************************************/

function calculTva(montantsHT) {
  return montantsHT * (TVA / 100);
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

for(var i = 0; i < montantsHT.length; i++) {
  console.log(calculTva(montantsHT[i]));
}

/* Résultat attendu : console.log([
   2.352,
   2.94,
   3.92,
   4.9,
   5.88
 ])
*/
