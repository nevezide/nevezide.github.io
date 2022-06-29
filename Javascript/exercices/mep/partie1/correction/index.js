// Partie 1

let jour = prompt("quel est le jour de la semaine ?");
let hasAstreinte = confirm("y a-t-il une astreinte ?");

if ( (jour === 'jeudi' || jour === 'vendredi') && ! hasAstreinte ) {
  alert("Pas de MEP en fin de semaine !");
} else {
  alert("MEP Autorisée");
}
